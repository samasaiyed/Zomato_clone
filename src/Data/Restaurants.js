//API DATA from zomato WEB APP
//zomato wbe app -> delivery -> inspect -> application -> storage -> clear site date -> network -> refresh page -> home -> preview -> copy object
export const restaurants = [
    {
        "type": "restaurant",
        "info": {
            "resId": 18974473,
            "name": "Royal Fast Food",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/3/18974473/ad5051aa972b4f50e8f18e9f5d9c1f9b_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/3/18974473/ad5051aa972b4f50e8f18e9f5d9c1f9b_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.6",
                "rating_text": "3.6",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "10.2K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.8",
                        "reviewCount": "140",
                        "reviewTextSmall": "140 Reviews",
                        "subtext": "140 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.8",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.3",
                        "reviewCount": "10K",
                        "reviewTextSmall": "10K Reviews",
                        "subtext": "10K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.3",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹400 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "New Textile Market, Surat",
                "address": "1/1622/10, Khanderaopura, Near Ekta Survive Station, New Textile Market, Surat",
                "localityUrl": "surat/new-textile-market-restaurants"
            },
            "timing": {
                "text": "Opens tomorrow at 11am",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
                    "url": "https://www.zomato.com/surat/restaurants/sichuan/",
                    "name": "Sichuan"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        "order": {
            "deliveryTime": "24 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/surat/royal-fast-food-new-textile-market/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/surat/royal-fast-food-new-textile-market/order",
            "clickActionDeeplink": ""
        },
        "distance": "1.9 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"960d0237-71d8-42e3-94e3-aadb6dc5d79a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4314534803002097664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18974473\",\"element_type\":\"listing\",\"rank\":1}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF up to 100",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 3800021,
            "name": "Wok On Fire",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/0/3800020/b4bb8f72e69ce42d738db647a12ce0e9_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/0/3800020/b4bb8f72e69ce42d738db647a12ce0e9_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.9",
                "rating_text": "3.9",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "4,734",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.0",
                        "reviewCount": "799",
                        "reviewTextSmall": "799 Reviews",
                        "subtext": "799 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.0",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.8",
                        "reviewCount": "3,935",
                        "reviewTextSmall": "3,935 Reviews",
                        "subtext": "3,935 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.8",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹1,000 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "Adajan Gam, Surat",
                "address": "G 6, Riddhi Shoppers, Pal Adajan Road, Opposite Star Bazaar, Adajan Gam, Surat",
                "localityUrl": "surat/adajan-gam-restaurants"
            },
            "timing": {
                "text": "Closes in 1 hour 9 minutes",
                "color": "#e5521f"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTVcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/thai/",
                    "name": "Thai"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1MVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/surat/restaurants/momos/",
                    "name": "Momos"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/surat/restaurants/beverages/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
                    "url": "https://www.zomato.com/surat/restaurants/sichuan/",
                    "name": "Sichuan"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/surat/restaurants/shake/",
                    "name": "Shake"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/surat/restaurants/coffee/",
                    "name": "Coffee"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        "order": {
            "deliveryTime": "31 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/surat/wok-on-fire-adajan-gam/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/surat/wok-on-fire-adajan-gam/order",
            "clickActionDeeplink": ""
        },
        "distance": "3.9 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"960d0237-71d8-42e3-94e3-aadb6dc5d79a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4314534803002097664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"3800021\",\"element_type\":\"listing\",\"rank\":2}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF up to 100",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19134244,
            "name": "Pizza Point Muglisara",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/4/19134244/cf73862effe54385200661033b7363d6_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/4/19134244/cf73862effe54385200661033b7363d6_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "646",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "646",
                        "reviewTextSmall": "646 Reviews",
                        "subtext": "646 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹350 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "New Textile Market, Surat",
                "address": "Near IP Mission School, Muglisara Main Road, New Textile Market, Surat",
                "localityUrl": "surat/new-textile-market-restaurants"
            },
            "timing": {
                "text": "Closes in 1 hour 9 minutes",
                "color": "#e5521f"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                    "url": "https://www.zomato.com/surat/restaurants/burger/",
                    "name": "Burger"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                    "url": "https://www.zomato.com/surat/restaurants/sandwich/",
                    "name": "Sandwich"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/fast-food/",
                    "name": "Fast Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        "order": {
            "deliveryTime": "33 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/surat/pizza-point-muglisara-new-textile-market/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/surat/pizza-point-muglisara-new-textile-market/order",
            "clickActionDeeplink": ""
        },
        "distance": "560 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"960d0237-71d8-42e3-94e3-aadb6dc5d79a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4314534803002097664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19134244\",\"element_type\":\"listing\",\"rank\":3}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF up to 100",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19676440,
            "name": "Pizza Hut",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/7/3800017/edc92b9e7877ea851a3d6f1190d1580f_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/7/3800017/edc92b9e7877ea851a3d6f1190d1580f_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.8",
                "rating_text": "3.8",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "3,270",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.9",
                        "reviewCount": "68",
                        "reviewTextSmall": "68 Reviews",
                        "subtext": "68 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.9",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.6",
                        "reviewCount": "3,202",
                        "reviewTextSmall": "3,202 Reviews",
                        "subtext": "3,202 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.6",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹600 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "Katargam, Surat",
                "address": "Shop G 65B – 66 – 67, Ground Floor, Laxmi Enclave 2, Opposite Gajera School, Katargam, Surat",
                "localityUrl": "surat/katargam-restaurants"
            },
            "timing": {
                "text": "Closes in 1 hour 9 minutes",
                "color": "#e5521f"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/surat/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/surat/restaurants/beverages/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/italian/",
                    "name": "Italian"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        "order": {
            "deliveryTime": "31 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/surat/pizza-hut-katargam/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/surat/pizza-hut-katargam/order",
            "clickActionDeeplink": ""
        },
        "distance": "3.2 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"960d0237-71d8-42e3-94e3-aadb6dc5d79a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4314534803002097664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19676440\",\"element_type\":\"listing\",\"rank\":4}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF up to 100",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19062082,
            "name": "M.P Paratha & Omlet",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/2/19062082/3bfb77b6f4d55307e3414f095ed7be40_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/2/19062082/3bfb77b6f4d55307e3414f095ed7be40_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.8",
                "rating_text": "3.8",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "12.8K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.9",
                        "reviewCount": "177",
                        "reviewTextSmall": "177 Reviews",
                        "subtext": "177 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.9",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.7",
                        "reviewCount": "12.7K",
                        "reviewTextSmall": "12.7K Reviews",
                        "subtext": "12.7K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.7",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹500 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "New Textile Market, Surat",
                "address": "Saliyawala Market, Zampa Bazar Main Road, New Textile Market, Surat",
                "localityUrl": "surat/new-textile-market-restaurants"
            },
            "timing": {
                "text": "Closes in 1 hour 9 minutes",
                "color": "#e5521f"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/street-food/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/north-indian/",
                    "name": "North Indian"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        "order": {
            "deliveryTime": "24 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/surat/m-p-paratha-omlet-new-textile-market/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/surat/m-p-paratha-omlet-new-textile-market/order",
            "clickActionDeeplink": ""
        },
        "distance": "1.1 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"960d0237-71d8-42e3-94e3-aadb6dc5d79a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4314534803002097664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19062082\",\"element_type\":\"listing\",\"rank\":5}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF up to 100",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
                    "aspect_ratio": 2.0625
                },
                "text": "Restaurant partner follows WHO protocol"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18996603,
            "name": "Abu Baba Pizza Corner",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/3/18996603/83f00312a85f8884c95ae32825de5862_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/3/18996603/83f00312a85f8884c95ae32825de5862_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.8",
                "rating_text": "3.8",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "486",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.7",
                        "reviewCount": "34",
                        "reviewTextSmall": "34 Reviews",
                        "subtext": "34 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.7",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.9",
                        "reviewCount": "452",
                        "reviewTextSmall": "452 Reviews",
                        "subtext": "452 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.9",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹300 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "Shahpore, Surat",
                "address": "Shop 12-B, Hemangini Apartment, Opposite Sabri Masjid, Muglisara, Shahpore, Surat",
                "localityUrl": "surat/shahpore-restaurants"
            },
            "timing": {
                "text": "Closes in 10 minutes",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/fast-food/",
                    "name": "Fast Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        "order": {
            "deliveryTime": "25 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/surat/abu-baba-pizza-corner-shahpore/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/surat/abu-baba-pizza-corner-shahpore/order",
            "clickActionDeeplink": ""
        },
        "distance": "570 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"960d0237-71d8-42e3-94e3-aadb6dc5d79a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4314534803002097664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18996603\",\"element_type\":\"listing\",\"rank\":6}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF up to 100",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19332738,
            "name": "Everything @ 99",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/8/19332738/5e911fe465e952d74b28cfb959768ec6_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/8/19332738/5e911fe465e952d74b28cfb959768ec6_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.1",
                "rating_text": "3.1",
                "rating_subtitle": "Average",
                "rating_color": "CDD614",
                "votes": "3,184",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.1",
                        "reviewCount": "3,184",
                        "reviewTextSmall": "3,184 Reviews",
                        "subtext": "3,184 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.1",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹400 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "New Textile Market, Surat",
                "address": "6/281/A, 121-1/A/238-B, Paiki, Ground Floor, Kolsawad, Manchharpura, New Textile Market, Surat",
                "localityUrl": "surat/new-textile-market-restaurants"
            },
            "timing": {
                "text": "Closes in 10 minutes",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/surat/restaurants/biryani/",
                    "name": "Biryani"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        "order": {
            "deliveryTime": "25 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/surat/everything-@-99-new-textile-market/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/surat/everything-@-99-new-textile-market/order",
            "clickActionDeeplink": ""
        },
        "distance": "1.4 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"960d0237-71d8-42e3-94e3-aadb6dc5d79a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4314534803002097664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19332738\",\"element_type\":\"listing\",\"rank\":7}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF up to 100",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
                    "aspect_ratio": 2.0625
                },
                "text": "Restaurant partner follows WHO protocol"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18633928,
            "name": "Geetha Refreshment",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/8/18633928/4d6c85686f507dab357ffb2ff03cccf0_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/8/18633928/4d6c85686f507dab357ffb2ff03cccf0_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.1",
                "rating_text": "4.1",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "16.4K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.1",
                        "reviewCount": "497",
                        "reviewTextSmall": "497 Reviews",
                        "subtext": "497 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.1",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.0",
                        "reviewCount": "15.9K",
                        "reviewTextSmall": "15.9K Reviews",
                        "subtext": "15.9K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.0",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹500 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "Althan Bhatar, Surat",
                "address": "Silver Point, Bhatar Ram Chowk Road, Near Vidya Bharathi School, Althan Bhatar, Surat",
                "localityUrl": "surat/althan-bhatar-restaurants"
            },
            "timing": {
                "text": "Closes in 10 minutes",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/south-indian/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/surat/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/surat/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        "order": {
            "deliveryTime": "27 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/surat/geetha-refreshment-althan-bhatar/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/surat/geetha-refreshment-althan-bhatar/order",
            "clickActionDeeplink": ""
        },
        "distance": "4.7 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"960d0237-71d8-42e3-94e3-aadb6dc5d79a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4314534803002097664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18633928\",\"element_type\":\"listing\",\"rank\":8}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF up to 100",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20100215,
            "name": "Trishiv Chinese Corner",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/9/19166419/42c6c89880d00ea00b0fdf811c573271_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/9/19166419/42c6c89880d00ea00b0fdf811c573271_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.8",
                "rating_text": "3.8",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "824",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.8",
                        "reviewCount": "824",
                        "reviewTextSmall": "824 Reviews",
                        "subtext": "824 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.8",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹500 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "Varachha, Surat",
                "address": "Shop 5, 18/E, Gokul Diamond Center, Opposite Varachha Police Station, Varachha, Surat",
                "localityUrl": "surat/varachha-restaurants"
            },
            "timing": {
                "text": "Closes in 25 minutes",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
                    "url": "https://www.zomato.com/surat/restaurants/sichuan/",
                    "name": "Sichuan"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/fast-food/",
                    "name": "Fast Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        "order": {
            "deliveryTime": "28 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/surat/trishiv-chinese-corner-varachha/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/surat/trishiv-chinese-corner-varachha/order",
            "clickActionDeeplink": ""
        },
        "distance": "2.4 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"960d0237-71d8-42e3-94e3-aadb6dc5d79a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4314534803002097664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20100215\",\"element_type\":\"listing\",\"rank\":9}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF up to 100",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20425845,
            "name": "Gangour",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/6/3800536/fab9f073493fd71c4872c2ba7b6e458f_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/6/3800536/fab9f073493fd71c4872c2ba7b6e458f_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.6",
                "rating_text": "3.6",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "127",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.6",
                        "reviewCount": "2",
                        "reviewTextSmall": "2 Reviews",
                        "subtext": "2 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.6",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.5",
                        "reviewCount": "125",
                        "reviewTextSmall": "125 Reviews",
                        "subtext": "125 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.5",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹300 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "Katargam, Surat",
                "address": "Shop G-21/22, Shree Nilkanth Business Hub, Singanpore Road, Katargam, Surat",
                "localityUrl": "surat/katargam-restaurants"
            },
            "timing": {
                "text": "Closes in 10 minutes",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/street-food/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                    "url": "https://www.zomato.com/surat/restaurants/burger/",
                    "name": "Burger"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                    "url": "https://www.zomato.com/surat/restaurants/sandwich/",
                    "name": "Sandwich"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/surat/restaurants/rolls/",
                    "name": "Rolls"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/south-indian/",
                    "name": "South Indian"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        "order": {
            "deliveryTime": "31 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/surat/gangour-2-katargam/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/surat/gangour-2-katargam/order",
            "clickActionDeeplink": ""
        },
        "distance": "2.9 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"960d0237-71d8-42e3-94e3-aadb6dc5d79a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4314534803002097664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20425845\",\"element_type\":\"listing\",\"rank\":10}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF up to 100",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19265860,
            "name": "China Town Chinese Food",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/2/19002872/1767611f954f50112fb7a1b65d951765_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/2/19002872/1767611f954f50112fb7a1b65d951765_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.5",
                "rating_text": "3.5",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "3,831",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.1",
                        "reviewCount": "2",
                        "reviewTextSmall": "2 Reviews",
                        "subtext": "2 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.1",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.8",
                        "reviewCount": "3,829",
                        "reviewTextSmall": "3,829 Reviews",
                        "subtext": "3,829 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.8",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹300 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "City Light, Surat",
                "address": "City Light Road, Panaas, City Light, Surat",
                "localityUrl": "surat/city-light-restaurants"
            },
            "timing": {
                "text": "Closes in 1 hour 9 minutes",
                "color": "#e5521f"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/street-food/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
                    "url": "https://www.zomato.com/surat/restaurants/sichuan/",
                    "name": "Sichuan"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        "order": {
            "deliveryTime": "38 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/surat/china-town-chinese-food-1-city-light/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/surat/china-town-chinese-food-1-city-light/order",
            "clickActionDeeplink": ""
        },
        "distance": "5.7 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"960d0237-71d8-42e3-94e3-aadb6dc5d79a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4314534803002097664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19265860\",\"element_type\":\"listing\",\"rank\":11}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF up to 100",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20376576,
            "name": "Martino'z Pizza",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/2/20170632/575f4c957081ae2d6aea587a43635b06_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/2/20170632/575f4c957081ae2d6aea587a43635b06_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.4",
                "rating_text": "3.4",
                "rating_subtitle": "Average",
                "rating_color": "CDD614",
                "votes": "47",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.6",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "0 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.6",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.2",
                        "reviewCount": "47",
                        "reviewTextSmall": "47 Reviews",
                        "subtext": "47 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹450 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "Katargam, Surat",
                "address": "8-9-10, Ground Floor, Zircon Plus, Dabholi Road, Katargam, Surat",
                "localityUrl": "surat/katargam-restaurants"
            },
            "timing": {
                "text": "Closes in 10 minutes",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzNcIl19Il0%3D",
                    "url": "https://www.zomato.com/surat/restaurants/mexican/",
                    "name": "Mexican"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        "order": {
            "deliveryTime": "29 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/surat/martinoz-pizza-katargam/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/surat/martinoz-pizza-katargam/order",
            "clickActionDeeplink": ""
        },
        "distance": "3.5 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"960d0237-71d8-42e3-94e3-aadb6dc5d79a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4314534803002097664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20376576\",\"element_type\":\"listing\",\"rank\":12}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF up to 100",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
            "type": "restaurant",
            "info": {
                "resId": 19458179,
                "name": "Tawah",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/9/19458179/9d943079c5260483faaaec54ded1733e_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https://b.zmtcdn.com/data/pictures/9/19458179/9d943079c5260483faaaec54ded1733e_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "3.5",
                    "rating_text": "3.5",
                    "rating_subtitle": "Good",
                    "rating_color": "9ACD32",
                    "votes": "3,135",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "3.5",
                            "reviewCount": "12",
                            "reviewTextSmall": "12 Reviews",
                            "subtext": "12 Dining Reviews",
                            "color": "#1C1C1C",
                            "ratingV2": "3.5",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "500"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "3.4",
                            "reviewCount": "3,123",
                            "reviewTextSmall": "3,123 Reviews",
                            "subtext": "3,123 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "3.4",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "500"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "₹500 for two"
                },
                "cfo": {
                    "text": "₹250 for one"
                },
                "locality": {
                    "name": "Adajan Patiya, Surat",
                    "address": "Plot 34/A, 34/D, 1St Floor, Ward 17/B, 0470, 71/2, Paiki, Shree Krishna Nagar CHS, Adajan Patiya, Surat",
                    "localityUrl": "surat/adajan-patiya-restaurants"
                },
                "timing": {
                    "text": "Closes in 35 minutes",
                    "color": "#e5521f"
                },
                "cuisine": [
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/north-indian/",
                        "name": "North Indian"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                        "url": "https://www.zomato.com/surat/restaurants/biryani/",
                        "name": "Biryani"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/fast-food/",
                        "name": "Fast Food"
                    }
                ],
                "should_ban_ugc": false,
                "costText": {
                    "text": "₹250 for one"
                }
            },
            "order": {
                "deliveryTime": "30 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "/surat/tawah-adajan-patiya/order"
                }
            },
            "gold": [],
            "takeaway": [],
            "cardAction": {
                "text": "",
                "clickUrl": "/surat/tawah-adajan-patiya/order",
                "clickActionDeeplink": ""
            },
            "distance": "2.7 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"960d0237-71d8-42e3-94e3-aadb6dc5d79a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4314534803002097664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19458179\",\"element_type\":\"listing\",\"rank\":1}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "50% OFF up to 100",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": [
                {
                    "image": {
                        "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                        "aspect_ratio": 2.66666666667
                    },
                    "text": "Follows all Max Safety measures to ensure your food is safe"
                }
            ]
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 18609962,
                "name": "Jakaas Chinese Food",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/2/18609962/a522cbf000ca430a8e262818982a05ae_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https://b.zmtcdn.com/data/pictures/2/18609962/a522cbf000ca430a8e262818982a05ae_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "4.2",
                    "rating_text": "4.2",
                    "rating_subtitle": "Very Good",
                    "rating_color": "5BA829",
                    "votes": "19.4K",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "4.2",
                            "reviewCount": "513",
                            "reviewTextSmall": "513 Reviews",
                            "subtext": "513 Dining Reviews",
                            "color": "#1C1C1C",
                            "ratingV2": "4.2",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "700"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "4.1",
                            "reviewCount": "18.9K",
                            "reviewTextSmall": "18.9K Reviews",
                            "subtext": "18.9K Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "4.1",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "700"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "₹400 for two"
                },
                "cfo": {
                    "text": "₹250 for one"
                },
                "locality": {
                    "name": "Adajan Gam, Surat",
                    "address": "Shop 38/39, Royal Residency, Building C, Vir Arjun Marg, Near Mahalaxmi Temple, Adajan Gam, Surat",
                    "localityUrl": "surat/adajan-gam-restaurants"
                },
                "timing": {
                    "text": "Opens tomorrow at 12noon",
                    "color": "#ab000d"
                },
                "cuisine": [
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/chinese/",
                        "name": "Chinese"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/street-food/",
                        "name": "Street Food"
                    }
                ],
                "should_ban_ugc": false,
                "costText": {
                    "text": "₹250 for one"
                }
            },
            "order": {
                "deliveryTime": "26 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "/surat/jakaas-chinese-food-adajan-gam/order"
                }
            },
            "gold": [],
            "takeaway": [],
            "cardAction": {
                "text": "",
                "clickUrl": "/surat/jakaas-chinese-food-adajan-gam/order",
                "clickActionDeeplink": ""
            },
            "distance": "3.5 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"960d0237-71d8-42e3-94e3-aadb6dc5d79a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4314534803002097664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18609962\",\"element_type\":\"listing\",\"rank\":2}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "50% OFF up to 100",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": [
                {
                    "image": {
                        "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                        "aspect_ratio": 2.66666666667
                    },
                    "text": "Follows all Max Safety measures to ensure your food is safe"
                }
            ]
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 19276974,
                "name": "Akshar Pavbhaji & Chinese",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/4/19276974/b7acd3a9586b028369d01716f0eb51ae_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https://b.zmtcdn.com/data/pictures/4/19276974/b7acd3a9586b028369d01716f0eb51ae_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "3.7",
                    "rating_text": "3.7",
                    "rating_subtitle": "Good",
                    "rating_color": "9ACD32",
                    "votes": "658",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "3.7",
                            "reviewCount": "18",
                            "reviewTextSmall": "18 Reviews",
                            "subtext": "18 Dining Reviews",
                            "color": "#1C1C1C",
                            "ratingV2": "3.7",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "600"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "3.7",
                            "reviewCount": "640",
                            "reviewTextSmall": "640 Reviews",
                            "subtext": "640 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "3.7",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "600"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "₹250 for two"
                },
                "cfo": {
                    "text": "₹250 for one"
                },
                "locality": {
                    "name": "Varachha, Surat",
                    "address": "11-12, Lakshman Nagar Chowk, Prabhukrupa Society, Varachha, Surat",
                    "localityUrl": "surat/varachha-restaurants"
                },
                "timing": {
                    "text": "Closes in 1 hour 4 minutes",
                    "color": "#e5521f"
                },
                "cuisine": [
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/chinese/",
                        "name": "Chinese"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/street-food/",
                        "name": "Street Food"
                    }
                ],
                "should_ban_ugc": false,
                "costText": {
                    "text": "₹250 for one"
                }
            },
            "order": {
                "deliveryTime": "30 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "/surat/akshar-pavbhaji-chinese-varachha/order"
                }
            },
            "gold": [],
            "takeaway": [],
            "cardAction": {
                "text": "",
                "clickUrl": "/surat/akshar-pavbhaji-chinese-varachha/order",
                "clickActionDeeplink": ""
            },
            "distance": "5.4 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"960d0237-71d8-42e3-94e3-aadb6dc5d79a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4314534803002097664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19276974\",\"element_type\":\"listing\",\"rank\":3}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "50% OFF up to 100",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": []
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 18598287,
                "name": "Chandan Omlette Center",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/7/18598287/8c2a469e0aaa90a529703d40925fa0b3_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https://b.zmtcdn.com/data/pictures/7/18598287/8c2a469e0aaa90a529703d40925fa0b3_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "4.2",
                    "rating_text": "4.2",
                    "rating_subtitle": "Very Good",
                    "rating_color": "5BA829",
                    "votes": "4,526",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "4.2",
                            "reviewCount": "88",
                            "reviewTextSmall": "88 Reviews",
                            "subtext": "88 Dining Reviews",
                            "color": "#1C1C1C",
                            "ratingV2": "4.2",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "700"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "4.2",
                            "reviewCount": "4,438",
                            "reviewTextSmall": "4,438 Reviews",
                            "subtext": "4,438 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "4.2",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "700"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "₹300 for two"
                },
                "cfo": {
                    "text": "₹250 for one"
                },
                "locality": {
                    "name": "City Light, Surat",
                    "address": "RS 44/2, Block 125, Kabir House, Opposite Old Jakatnaka, U.M. Road, Bharthana-Vesu, Surat, City Light, Surat",
                    "localityUrl": "surat/city-light-restaurants"
                },
                "timing": {
                    "text": "Opens tomorrow at 11:30am",
                    "color": "#ab000d"
                },
                "cuisine": [
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDhcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/gujarati/",
                        "name": "Gujarati"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/street-food/",
                        "name": "Street Food"
                    }
                ],
                "should_ban_ugc": false,
                "costText": {
                    "text": "₹250 for one"
                }
            },
            "order": {
                "deliveryTime": "39 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "/surat/chandan-omlette-center-city-light/order"
                }
            },
            "gold": [],
            "takeaway": [],
            "cardAction": {
                "text": "",
                "clickUrl": "/surat/chandan-omlette-center-city-light/order",
                "clickActionDeeplink": ""
            },
            "distance": "6.7 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"960d0237-71d8-42e3-94e3-aadb6dc5d79a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4314534803002097664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18598287\",\"element_type\":\"listing\",\"rank\":4}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "50% OFF up to 100",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": [
                {
                    "image": {
                        "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                        "aspect_ratio": 2.66666666667
                    },
                    "text": "Follows all Max Safety measures to ensure your food is safe"
                }
            ]
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 19176116,
                "name": "Laxmi Egg House",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/6/19176116/caea21c88e091194107eaa14f84579c8_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https://b.zmtcdn.com/data/pictures/6/19176116/caea21c88e091194107eaa14f84579c8_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "3.9",
                    "rating_text": "3.9",
                    "rating_subtitle": "Good",
                    "rating_color": "9ACD32",
                    "votes": "7,747",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "4.1",
                            "reviewCount": "122",
                            "reviewTextSmall": "122 Reviews",
                            "subtext": "122 Dining Reviews",
                            "color": "#1C1C1C",
                            "ratingV2": "4.1",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "700"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "3.7",
                            "reviewCount": "7,625",
                            "reviewTextSmall": "7,625 Reviews",
                            "subtext": "7,625 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "3.7",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "600"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "₹300 for two"
                },
                "cfo": {
                    "text": "₹250 for one"
                },
                "locality": {
                    "name": "Karanj, Surat",
                    "address": "Plot 295, 1st FL Atalji Nagar Vasahat, Varachha Road, Karanj, Surat",
                    "localityUrl": "surat/karanj-restaurants"
                },
                "timing": {
                    "text": "Opens tomorrow at 10:30am",
                    "color": "#ab000d"
                },
                "cuisine": [
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/street-food/",
                        "name": "Street Food"
                    }
                ],
                "should_ban_ugc": false,
                "costText": {
                    "text": "₹250 for one"
                }
            },
            "order": {
                "deliveryTime": "28 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "/surat/laxmi-egg-house-karanj/order"
                }
            },
            "gold": [],
            "takeaway": [],
            "cardAction": {
                "text": "",
                "clickUrl": "/surat/laxmi-egg-house-karanj/order",
                "clickActionDeeplink": ""
            },
            "distance": "3.2 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"960d0237-71d8-42e3-94e3-aadb6dc5d79a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4314534803002097664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19176116\",\"element_type\":\"listing\",\"rank\":5}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "50% OFF up to 100",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": [
                {
                    "image": {
                        "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                        "aspect_ratio": 2.66666666667
                    },
                    "text": "Follows all Max Safety measures to ensure your food is safe"
                }
            ]
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 18894929,
                "name": "Hotel Maruti",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/chains/9/18894929/a5ce5a5cc54dbfe7521dc8e934744729_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https://b.zmtcdn.com/data/pictures/chains/9/18894929/a5ce5a5cc54dbfe7521dc8e934744729_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "4.0",
                    "rating_text": "4.0",
                    "rating_subtitle": "Very Good",
                    "rating_color": "5BA829",
                    "votes": "10.9K",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "4.0",
                            "reviewCount": "206",
                            "reviewTextSmall": "206 Reviews",
                            "subtext": "206 Dining Reviews",
                            "color": "#1C1C1C",
                            "ratingV2": "4.0",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "600"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "3.9",
                            "reviewCount": "10.7K",
                            "reviewTextSmall": "10.7K Reviews",
                            "subtext": "10.7K Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "3.9",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "600"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "₹300 for two"
                },
                "cfo": {
                    "text": "₹250 for one"
                },
                "locality": {
                    "name": "Magob, Surat",
                    "address": "Shop 11, 12, Plot 1 & 9, Abhinandan Complex, Near Puna Kumbbhariya Road, Magob, Surat",
                    "localityUrl": "surat/magob-restaurants"
                },
                "timing": {
                    "text": "Closes in 35 minutes",
                    "color": "#e5521f"
                },
                "cuisine": [
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/north-indian/",
                        "name": "North Indian"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/chinese/",
                        "name": "Chinese"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDhcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/gujarati/",
                        "name": "Gujarati"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/street-food/",
                        "name": "Street Food"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                        "url": "https://www.zomato.com/surat/restaurants/biryani/",
                        "name": "Biryani"
                    }
                ],
                "should_ban_ugc": false,
                "costText": {
                    "text": "₹250 for one"
                }
            },
            "order": {
                "deliveryTime": "28 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "/surat/hotel-maruti-magob/order"
                }
            },
            "gold": [],
            "takeaway": [],
            "cardAction": {
                "text": "",
                "clickUrl": "/surat/hotel-maruti-magob/order",
                "clickActionDeeplink": ""
            },
            "distance": "4.7 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"960d0237-71d8-42e3-94e3-aadb6dc5d79a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4314534803002097664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18894929\",\"element_type\":\"listing\",\"rank\":6}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "50% OFF up to 100",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": [
                {
                    "image": {
                        "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                        "aspect_ratio": 2.66666666667
                    },
                    "text": "Follows all Max Safety measures to ensure your food is safe"
                }
            ]
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 3800736,
                "name": "Taste Of Bhagwati (TOB)",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/6/3800736/d0abd74050e861eda86bd077bc25b0fb_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https://b.zmtcdn.com/data/pictures/6/3800736/d0abd74050e861eda86bd077bc25b0fb_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "3.8",
                    "rating_text": "3.8",
                    "rating_subtitle": "Good",
                    "rating_color": "9ACD32",
                    "votes": "2,891",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "4.0",
                            "reviewCount": "335",
                            "reviewTextSmall": "335 Reviews",
                            "subtext": "335 Dining Reviews",
                            "color": "#1C1C1C",
                            "ratingV2": "4.0",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "600"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "3.5",
                            "reviewCount": "2,556",
                            "reviewTextSmall": "2,556 Reviews",
                            "subtext": "2,556 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "3.5",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "500"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "₹1,000 for two"
                },
                "cfo": {
                    "text": "₹250 for one"
                },
                "locality": {
                    "name": "New Textile Market, Surat",
                    "address": "Sakaar Textile House, Near Jash Market, Ring Road, New Textile Market, Surat",
                    "localityUrl": "surat/new-textile-market-restaurants"
                },
                "timing": {
                    "text": "Closes in 5 minutes",
                    "color": "#ab000d"
                },
                "cuisine": [
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/north-indian/",
                        "name": "North Indian"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/chinese/",
                        "name": "Chinese"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjc4XCJdfSJd",
                        "url": "https://www.zomato.com/surat/restaurants/oriental/",
                        "name": "Oriental"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/italian/",
                        "name": "Italian"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/fast-food/",
                        "name": "Fast Food"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                        "url": "https://www.zomato.com/surat/restaurants/desserts/",
                        "name": "Desserts"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                        "url": "https://www.zomato.com/surat/restaurants/shake/",
                        "name": "Shake"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                        "url": "https://www.zomato.com/surat/restaurants/beverages/",
                        "name": "Beverages"
                    }
                ],
                "should_ban_ugc": false,
                "costText": {
                    "text": "₹250 for one"
                }
            },
            "order": {
                "deliveryTime": "27 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "/surat/taste-of-bhagwati-tob-new-textile-market/order"
                }
            },
            "gold": [],
            "takeaway": [],
            "cardAction": {
                "text": "",
                "clickUrl": "/surat/taste-of-bhagwati-tob-new-textile-market/order",
                "clickActionDeeplink": ""
            },
            "distance": "2.1 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"960d0237-71d8-42e3-94e3-aadb6dc5d79a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4314534803002097664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"3800736\",\"element_type\":\"listing\",\"rank\":7}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "50% OFF up to 100",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": [
                {
                    "image": {
                        "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                        "aspect_ratio": 2.66666666667
                    },
                    "text": "Follows all Max Safety measures to ensure your food is safe"
                }
            ]
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 3800658,
                "name": "Taj Mahal",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/8/3800658/67ea85683813411d1664d0b115a7c0a5_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https://b.zmtcdn.com/data/pictures/8/3800658/67ea85683813411d1664d0b115a7c0a5_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "3.6",
                    "rating_text": "3.6",
                    "rating_subtitle": "Good",
                    "rating_color": "9ACD32",
                    "votes": "4,069",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "4.2",
                            "reviewCount": "158",
                            "reviewTextSmall": "158 Reviews",
                            "subtext": "158 Dining Reviews",
                            "color": "#1C1C1C",
                            "ratingV2": "4.2",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "700"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "3.0",
                            "reviewCount": "3,911",
                            "reviewTextSmall": "3,911 Reviews",
                            "subtext": "3,911 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "3.0",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "yellow",
                                "tint": "600"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "₹400 for two"
                },
                "cfo": {
                    "text": "₹250 for one"
                },
                "locality": {
                    "name": "New Textile Market, Surat",
                    "address": "Depot 7/166, Station Road, Opposite Jain Dharamshala, New Textile Market, Surat",
                    "localityUrl": "surat/new-textile-market-restaurants"
                },
                "timing": {
                    "text": "Closes in 5 minutes",
                    "color": "#ab000d"
                },
                "cuisine": [
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/north-indian/",
                        "name": "North Indian"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/south-indian/",
                        "name": "South Indian"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                        "url": "https://www.zomato.com/surat/restaurants/biryani/",
                        "name": "Biryani"
                    }
                ],
                "should_ban_ugc": false,
                "costText": {
                    "text": "₹250 for one"
                }
            },
            "order": {
                "deliveryTime": "25 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "/surat/taj-mahal-new-textile-market/order"
                }
            },
            "gold": [],
            "takeaway": [],
            "cardAction": {
                "text": "",
                "clickUrl": "/surat/taj-mahal-new-textile-market/order",
                "clickActionDeeplink": ""
            },
            "distance": "1.4 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"960d0237-71d8-42e3-94e3-aadb6dc5d79a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4314534803002097664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"3800658\",\"element_type\":\"listing\",\"rank\":8}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "50% OFF up to 100",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": [
                {
                    "image": {
                        "url": "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
                        "aspect_ratio": 2.0625
                    },
                    "text": "Restaurant partner follows WHO protocol"
                }
            ]
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 19037638,
                "name": "Shree Khodiyar Kathiyawadi Dhaba",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/chains/8/19037638/dbb33bd45383ef7b216f8fcc78a38fb2_o2_featured_v2.jpeg"
                },
                "o2FeaturedImage": {
                    "url": "https://b.zmtcdn.com/data/pictures/chains/8/19037638/dbb33bd45383ef7b216f8fcc78a38fb2_o2_featured_v2.jpeg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "3.7",
                    "rating_text": "3.7",
                    "rating_subtitle": "Good",
                    "rating_color": "9ACD32",
                    "votes": "3,051",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "3.7",
                            "reviewCount": "92",
                            "reviewTextSmall": "92 Reviews",
                            "subtext": "92 Dining Reviews",
                            "color": "#1C1C1C",
                            "ratingV2": "3.7",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "600"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "3.6",
                            "reviewCount": "2,959",
                            "reviewTextSmall": "2,959 Reviews",
                            "subtext": "2,959 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "3.6",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "600"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "₹350 for two"
                },
                "cfo": {
                    "text": "₹250 for one"
                },
                "locality": {
                    "name": "Katargam, Surat",
                    "address": "A-3, 4, 5, Puran Baug, Katargam, Surat",
                    "localityUrl": "surat/katargam-restaurants"
                },
                "timing": {
                    "text": "Closes in 5 minutes",
                    "color": "#ab000d"
                },
                "cuisine": [
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDhcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/gujarati/",
                        "name": "Gujarati"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/north-indian/",
                        "name": "North Indian"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/street-food/",
                        "name": "Street Food"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                        "url": "https://www.zomato.com/surat/restaurants/desserts/",
                        "name": "Desserts"
                    }
                ],
                "should_ban_ugc": false,
                "costText": {
                    "text": "₹250 for one"
                }
            },
            "order": {
                "deliveryTime": "27 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "/surat/shree-khodiyar-kathiyawadi-dhaba-katargam/order"
                }
            },
            "gold": [],
            "takeaway": [],
            "cardAction": {
                "text": "",
                "clickUrl": "/surat/shree-khodiyar-kathiyawadi-dhaba-katargam/order",
                "clickActionDeeplink": ""
            },
            "distance": "2.6 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"960d0237-71d8-42e3-94e3-aadb6dc5d79a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4314534803002097664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19037638\",\"element_type\":\"listing\",\"rank\":9}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "50% OFF up to 100",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": [
                {
                    "image": {
                        "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                        "aspect_ratio": 2.66666666667
                    },
                    "text": "Follows all Max Safety measures to ensure your food is safe"
                }
            ]
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 19381729,
                "name": "Annapoorna Family Restaurant",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/chains/9/19381729/4b8905254da80928fc681e5a4efc1a4d_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https://b.zmtcdn.com/data/pictures/chains/9/19381729/4b8905254da80928fc681e5a4efc1a4d_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "4.0",
                    "rating_text": "4.0",
                    "rating_subtitle": "Very Good",
                    "rating_color": "5BA829",
                    "votes": "1,001",
                    "subtext": "REVIEW",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "3.9",
                            "reviewCount": "11",
                            "reviewTextSmall": "11 Reviews",
                            "subtext": "11 Dining Reviews",
                            "color": "#1C1C1C",
                            "ratingV2": "3.9",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "600"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "4.1",
                            "reviewCount": "990",
                            "reviewTextSmall": "990 Reviews",
                            "subtext": "990 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "4.1",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "700"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "₹500 for two"
                },
                "cfo": {
                    "text": "₹250 for one"
                },
                "locality": {
                    "name": "Mota Varachha, Surat",
                    "address": "Shop 39, Ground Floor, Golden Square, Golden Chowk, Near D-Mart, Mota Varachha, Surat",
                    "localityUrl": "surat/mota-varachha-restaurants"
                },
                "timing": {
                    "text": "Closes in 5 minutes",
                    "color": "#ab000d"
                },
                "cuisine": [
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/north-indian/",
                        "name": "North Indian"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/south-indian/",
                        "name": "South Indian"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/street-food/",
                        "name": "Street Food"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/fast-food/",
                        "name": "Fast Food"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/chinese/",
                        "name": "Chinese"
                    }
                ],
                "should_ban_ugc": false,
                "costText": {
                    "text": "₹250 for one"
                }
            },
            "order": {
                "deliveryTime": "29 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "/surat/annapoorna-family-restaurant-mota-varachha/order"
                }
            },
            "gold": [],
            "takeaway": [],
            "cardAction": {
                "text": "",
                "clickUrl": "/surat/annapoorna-family-restaurant-mota-varachha/order",
                "clickActionDeeplink": ""
            },
            "distance": "6.2 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"960d0237-71d8-42e3-94e3-aadb6dc5d79a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4314534803002097664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19381729\",\"element_type\":\"listing\",\"rank\":10}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "50% OFF up to 100",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": [
                {
                    "image": {
                        "url": "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
                        "aspect_ratio": 2.0625
                    },
                    "text": "Restaurant partner follows WHO protocol"
                }
            ]
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 3800052,
                "name": "Golden Dragon",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/2/3800052/c258575e8ed3d40860ee6e913fbedf0e_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https://b.zmtcdn.com/data/pictures/2/3800052/c258575e8ed3d40860ee6e913fbedf0e_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "4.3",
                    "rating_text": "4.3",
                    "rating_subtitle": "Very Good",
                    "rating_color": "5BA829",
                    "votes": "9,437",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "4.4",
                            "reviewCount": "592",
                            "reviewTextSmall": "592 Reviews",
                            "subtext": "592 Dining Reviews",
                            "color": "#1C1C1C",
                            "ratingV2": "4.4",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "700"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "4.1",
                            "reviewCount": "8,845",
                            "reviewTextSmall": "8,845 Reviews",
                            "subtext": "8,845 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "4.1",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "700"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "₹800 for two"
                },
                "cfo": {
                    "text": "₹250 for one"
                },
                "locality": {
                    "name": "Athwa, Surat",
                    "address": "G 10-15, Amidhara Shopping Centre, Rangila Park, Ghod Dod Road, Athwa, Surat",
                    "localityUrl": "surat/athwa-restaurants"
                },
                "timing": {
                    "text": "Closes in 5 minutes",
                    "color": "#ab000d"
                },
                "cuisine": [
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/chinese/",
                        "name": "Chinese"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/sea-food/",
                        "name": "Seafood"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
                        "url": "https://www.zomato.com/surat/restaurants/sichuan/",
                        "name": "Sichuan"
                    }
                ],
                "should_ban_ugc": false,
                "costText": {
                    "text": "₹250 for one"
                }
            },
            "order": {
                "deliveryTime": "30 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "/surat/golden-dragon-athwa/order"
                }
            },
            "gold": [],
            "takeaway": [],
            "cardAction": {
                "text": "",
                "clickUrl": "/surat/golden-dragon-athwa/order",
                "clickActionDeeplink": ""
            },
            "distance": "3.9 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"960d0237-71d8-42e3-94e3-aadb6dc5d79a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4314534803002097664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"3800052\",\"element_type\":\"listing\",\"rank\":11}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "50% OFF up to 100",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": [
                {
                    "image": {
                        "url": "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
                        "aspect_ratio": 2.0625
                    },
                    "text": "Restaurant partner follows WHO protocol"
                }
            ]
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 19224797,
                "name": "Madina Hotel",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/7/19224797/544bff75c4a1295e204b8984ca796082_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https://b.zmtcdn.com/data/pictures/7/19224797/544bff75c4a1295e204b8984ca796082_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "3.6",
                    "rating_text": "3.6",
                    "rating_subtitle": "Good",
                    "rating_color": "9ACD32",
                    "votes": "1,569",
                    "subtext": "REVIEW",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "3.9",
                            "reviewCount": "331",
                            "reviewTextSmall": "331 Reviews",
                            "subtext": "331 Dining Reviews",
                            "color": "#1C1C1C",
                            "ratingV2": "3.9",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "600"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "3.2",
                            "reviewCount": "1,238",
                            "reviewTextSmall": "1,238 Reviews",
                            "subtext": "1,238 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "3.2",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "500"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "₹400 for two"
                },
                "cfo": {
                    "text": "₹250 for one"
                },
                "locality": {
                    "name": "Chowk Bazaar, Surat",
                    "address": "Opposite Gujrat Mitra Press Badekha Chakla Chowk Bazaar, Surat",
                    "localityUrl": "surat/chowk-bazaar-restaurants"
                },
                "timing": {
                    "text": "Opens tomorrow at 10am",
                    "color": "#ab000d"
                },
                "cuisine": [
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/north-indian/",
                        "name": "North Indian"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
                        "url": "https://www.zomato.com/surat/restaurants/mughlai/",
                        "name": "Mughlai"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
                        "url": "https://www.zomato.com/surat/restaurants/salad/",
                        "name": "Salad"
                    },
                    {
                        "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
                        "url": "https://www.zomato.com/surat/restaurants/kebab/",
                        "name": "Kebab"
                    }
                ],
                "should_ban_ugc": false,
                "costText": {
                    "text": "₹250 for one"
                }
            },
            "order": {
                "deliveryTime": "24 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "/surat/madina-hotel-chowk-bazaar/order"
                }
            },
            "gold": [],
            "takeaway": [],
            "cardAction": {
                "text": "",
                "clickUrl": "/surat/madina-hotel-chowk-bazaar/order",
                "clickActionDeeplink": ""
            },
            "distance": "1.2 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"960d0237-71d8-42e3-94e3-aadb6dc5d79a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4314534803002097664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19224797\",\"element_type\":\"listing\",\"rank\":12}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "50% OFF up to 100",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": []
        }
]
