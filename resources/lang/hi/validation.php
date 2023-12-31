<?php
return [
    'between' => [
        'numeric' => ' :attribute का मान :min और :max के बीच होना चाहिए।',
        'file' => ' :attribute का मान :min और :max किलोबाइट्स के बीच होना चाहिए।',
        'string' => ' :attribute का मान :min और :max वर्णों के बीच होना चाहिए।',
        'array' => ' :attribute का मान :min और :max आइटम्स के बीच होना चाहिए।',
    ],
    'date' => ' :attribute एक मान्य तिथि नहीं है।',
    'digits' => ' :attribute को :digits अंक होने चाहिए।',
    'digits_between' => ' :attribute को :min और :max अंकों के बीच होना चाहिए।',
    'distinct' => ' :attribute फ़ील्ड में एक डुप्लिकेट मान है।',
    'email' => ' :attribute एक मान्य ईमेल पता होना चाहिए।',
    'ends_with' => ' :attribute को निम्नलिखित में से किसी के साथ समाप्त होना चाहिए: :values।',
    'exists' => ' चयनित :attribute अमान्य है।',
    'gt' => [
        'numeric' => ' :attribute का मान :value से अधिक होना चाहिए।',
        'file' => ' :attribute का मान :value किलोबाइट्स से अधिक होना चाहिए।',
        'string' => ' :attribute का मान :value वर्णों से अधिक होना चाहिए।',
        'array' => ' :attribute का मान :value आइटम्स से अधिक होना चाहिए।',
    ],
    'gte' => [
        'numeric' => ' :attribute का मान :value से अधिक या उसके बराबर होना चाहिए।',
        'file' => ' :attribute का मान :value किलोबाइट्स से अधिक या उसके बराबर होना चाहिए।',
        'string' => ' :attribute का मान :value वर्णों से अधिक या उसके बराबर होना चाहिए।',
        'array' => ' :attribute का मान :value आइटम्स से अधिक या उसके बराबर होना चाहिए।',
    ],
    'in' => ' चयनित :attribute अमान्य है।',
    'in_array' => ' :attribute फ़ील्ड :other में मौजूद नहीं है।',
    'integer' => ' :attribute को एक पूर्णांक होना चाहिए।',
    'lt' => [
        'numeric' => ' :attribute का मान :value से कम होना चाहिए।',
        'file' => ' :attribute का मान :value किलोबाइट्स से कम होना चाहिए।',
        'string' => ' :attribute का मान :value वर्णों से कम होना चाहिए।',
        'array' => ' :attribute का मान :value आइटम्स से कम होना चाहिए।',
    ],
    'lte' => [
        'numeric' => ' :attribute का मान :value से कम या उसके बराबर होना चाहिए।',
        'file' => ' :attribute का मान :value किलोबाइट्स से कम या उसके बराबर होना चाहिए।',
        'string' => ' :attribute का मान :value वर्णों से कम या उसके बराबर होना चाहिए।',
        'array' => ' :attribute का मान :value आइटम्स से कम या उसके बराबर होना चाहिए।',
    ],
    'max' => [
        'numeric' => ' :attribute का मान :max से अधिक नहीं होना चाहिए।',
        'file' => ' :attribute का मान :max किलोबाइट्स से अधिक नहीं होना चाहिए।',
        'string' => ' :attribute का मान :max वर्णों से अधिक नहीं होना चाहिए।',
        'array' => ' :attribute का मान :max आइटम्स से अधिक नहीं होना चाहिए।',
    ],
    'min' => [
        'numeric' => ' :attribute का मान कम से कम :min होना चाहिए।',
        'file' => ' :attribute का मान कम से कम :min किलोबाइट्स होना चाहिए।',
        'string' => ' :attribute का मान कम से कम :min वर्णों का होना चाहिए।',
        'array' => ' :attribute का मान कम से कम :min आइटम्स होना चाहिए।',
    ],
    'not_in' => ' चयनित :attribute अमान्य है।',
    'numeric' => ' :attribute एक संख्या होनी चाहिए।',
    'password' => ' पासवर्ड गलत है।',
    'required' => ' :attribute फ़ील्ड आवश्यक है।',
    'required_if' => ' :attribute फ़ील्ड आवश्यक है जब :other :value है।',
    'required_unless' => ' :attribute फ़ील्ड आवश्यक है जब तक :other :values में नहीं है।',
    'required_with' => ' :attribute फ़ील्ड आवश्यक है जब :values मौजूद है।',
    'required_with_all' => ' :attribute फ़ील्ड आवश्यक है जब :values सभी मौजूद हैं।',
    'required_without' => ' :attribute फ़ील्ड आवश्यक है जब :values मौजूद नहीं है।',
    'required_without_all' => ' :attribute फ़ील्ड आवश्यक है जब :values सभी मौजूद नहीं हैं।',
    'starts_with' => ' :attribute को निम्नलिखित में से किसी के साथ शुरू होना चाहिए: :values।',
    'string' => ' :attribute को एक स्ट्रिंग होना चाहिए।',
];
