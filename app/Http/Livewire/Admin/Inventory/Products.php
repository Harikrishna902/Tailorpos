<?php

namespace App\Http\Livewire\Admin\Inventory;


use App\Models\Product;
use Livewire\Component;
use Livewire\WithFileUploads;
use Image;
use Auth;
use App\Models\Translation;

class Products extends Component
{
    use WithFileUploads;
    public $image,$name,$stitching_cost,$is_active=1,$search,$products,$product;
    public $editMode = false,$i=1;

    //render the page
    public function render()
    {
        /* if the user is not admin and not branch */
        if((Auth::user()->user_type!=2) && (Auth::user()->user_type!=3)) {
            abort(404);
        }
        $query = Product::latest();
        if($this->search != '')
        {
            $query->where('name','like','%'.$this->search.'%');
        }
        $this->products = $query->get();
        return view('livewire.admin.inventory.products');
    }

    //Save data when product clicks save button
    public function save() {
        //If the product did not click on the edit button
        if($this->editMode == false)
        {
            $this->validate([
                'image' => 'nullable|image',
                'name'  => 'required',
                'stitching_cost' => 'required|numeric',
            ]);
            $imageurl = null;
            if($this->image){
                $default_favicon = $this->image;
                $input['file'] = time().'.'.$default_favicon->getClientOriginalExtension();
                $destinationPath = public_path('/uploads/product');
                if (!file_exists($destinationPath)) {
                    mkdir($destinationPath, 0777, true);
                }
                $imgFile = Image::make($this->image->getRealPath());
                $imgFile->resize(300,300)->save($destinationPath.'/'.$input['file']);
                $imageurl = '/uploads/product/'.$input['file'];
            }
            $product = Product::create([
                'name'  => $this->name,
                'stitching_cost' => $this->stitching_cost,
                'is_active' => $this->is_active,
                'image' => $imageurl,
                'created_by' => Auth::user()->id,
            ]);
            $this->products = Product::latest()->get();
            $this->resetInputFields();
            $this->emit('closemodal');
            $this->dispatchBrowserEvent(
                'alert', ['type' => 'success',  'message' => 'Product Created Successfully!']);
        }
        //If product clicked on the edit button
        else if($this->editMode == true && $this->product)
        {
            $this->validate([
                'image' => 'nullable|image',
                'name'  => 'required',
                'stitching_cost' => 'required|numeric',
            ]);
            $imageurl = null;
            if($this->image){
                try{
                    $path = $this->product->image;
                    if (file_exists(public_path($path))) {
                        unlink(public_path($path));
                    }
                }
                catch(\Exception $e)
                {   }
                $default_favicon = $this->image;
                $input['file'] = time().'.'.$default_favicon->getClientOriginalExtension();
                $destinationPath = public_path('/uploads/product');
                if (!file_exists($destinationPath)) {
                    mkdir($destinationPath, 0777, true);
                }
                $imgFile = Image::make($this->image->getRealPath());
                $imgFile->resize(300,300)->save($destinationPath.'/'.$input['file']);
                $imageurl = '/uploads/product/'.$input['file'];
                $this->product->image = $imageurl;
            }
            $this->product->name = $this->name;
            $this->product->stitching_cost = $this->stitching_cost;
            $this->product->is_active = $this->is_active ?? 0;
            $this->product->save();
            $this->editMode = false;
            $this->products = Product::latest()->get();
            $this->resetInputFields();
            $this->emit('closemodal');
            $this->dispatchBrowserEvent(
                'alert', ['type' => 'success',  'message' => 'Product Updated Successfully!']);
        }
    }

    //Reset Input Fields
    public function resetInputFields()
    {
        $this->name = '';
        $this->stitching_cost= '';
        $this->i= $this->i+1;
        $this->image="";
        $this->is_active = 1;
        $this->resetErrorBag();
        $this->editMode = false;
        $this->product=null;
    }

    //If product clicked on the edit button get item id and initialize input variables with it.
    public function edit($id)
    {
        $this->editMode = true;
        $this->resetErrorBag();
        $this->product = Product::find($id);
        $this->name = $this->product->name;
        $this->stitching_cost = $this->product->stitching_cost;
        $this->is_active = $this->product->is_active;
    }

    //Toggle product active status
    public function toggle($id)
    {
        $product = Product::find($id);
        $product->is_active = !($product->is_active);
        $product->save();
    }
}