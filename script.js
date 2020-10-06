TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMin": 60,
  "hfovMax": 120,
  "adjacentPanoramas": [
   {
    "backwardYaw": 159.63,
    "panorama": {
     "hfovMin": 60,
     "hfovMax": 120,
     "adjacentPanoramas": [
      {
       "backwardYaw": 46.2,
       "panorama": {
        "hfovMin": 60,
        "hfovMax": 120,
        "adjacentPanoramas": [
         {
          "backwardYaw": 53.27,
          "panorama": "this.panorama_FC96EF69_FB78_6249_41E0_1DAB35716727",
          "class": "AdjacentPanorama",
          "yaw": 46.2,
          "distance": 1
         }
        ],
        "label": "R0010075_20200923191338-01",
        "partial": false,
        "thumbnailUrl": "media/panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281_t.jpg",
        "vfov": 180,
        "id": "panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281",
        "class": "Panorama",
        "hfov": 360,
        "frames": [
         {
          "overlays": [
           {
            "useHandCursor": true,
            "id": "overlay_F0E2036B_FB87_A249_41C7_FA3B1CB12B71",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281_0_HS_1_0_0_map.gif",
                 "height": 57,
                 "class": "ImageResourceLevel",
                 "width": 58
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -9.6,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 46.2,
              "hfov": 7.66
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281_0_HS_1_0.png",
                 "height": 115,
                 "class": "ImageResourceLevel",
                 "width": 116
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 7.66,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -9.6,
              "yaw": 46.2
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_FC96EF69_FB78_6249_41E0_1DAB35716727, this.camera_F4978202_FB98_7DBB_41E2_A5D36E9707EC); this.mainPlayList.set('selectedIndex', 25)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_F041278A_FB87_A2CA_41E1_E28E941A81F6",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281_0_HS_0_0_0_map.gif",
                 "height": 57,
                 "class": "ImageResourceLevel",
                 "width": 58
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -3.53,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 116.68,
              "hfov": 7.75
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281_0_HS_0_0.png",
                 "height": 115,
                 "class": "ImageResourceLevel",
                 "width": 116
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 7.75,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -3.53,
              "yaw": 116.68
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 26)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ]
           },
           {
            "image": {
             "levels": [
              {
               "url": "media/panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_tcap0.png",
               "height": 1348,
               "class": "ImageResourceLevel",
               "width": 1348
              }
             ],
             "class": "ImageResource"
            },
            "id": "panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281_tcap0",
            "class": "TripodCapPanoramaOverlay",
            "hfov": 45,
            "angle": 0,
            "inertia": false,
            "rotate": false
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281_r_hq.jpeg",
             "height": 1704,
             "class": "ImageResourceLevel",
             "width": 1704
            },
            {
             "url": "media/panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281_f_hq.jpeg",
             "height": 1704,
             "class": "ImageResourceLevel",
             "width": 1704
            },
            {
             "url": "media/panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "top": {
           "levels": [
            {
             "url": "media/panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281_u_hq.jpeg",
             "height": 1704,
             "class": "ImageResourceLevel",
             "width": 1704
            },
            {
             "url": "media/panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281_d_hq.jpeg",
             "height": 1704,
             "class": "ImageResourceLevel",
             "width": 1704
            },
            {
             "url": "media/panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281_l_hq.jpeg",
             "height": 1704,
             "class": "ImageResourceLevel",
             "width": 1704
            },
            {
             "url": "media/panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "back": {
           "levels": [
            {
             "url": "media/panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281_b_hq.jpeg",
             "height": 1704,
             "class": "ImageResourceLevel",
             "width": 1704
            },
            {
             "url": "media/panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281_t.jpg"
         }
        ],
        "pitch": 0
       },
       "class": "AdjacentPanorama",
       "yaw": 53.27,
       "distance": 1
      },
      {
       "backwardYaw": -166.77,
       "panorama": "this.panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743",
       "class": "AdjacentPanorama",
       "yaw": 159.63,
       "distance": 1
      },
      {
       "backwardYaw": -54.35,
       "panorama": {
        "hfovMin": 60,
        "hfovMax": 120,
        "adjacentPanoramas": [
         {
          "backwardYaw": -66.47,
          "panorama": "this.panorama_FC96EF69_FB78_6249_41E0_1DAB35716727",
          "class": "AdjacentPanorama",
          "yaw": -54.35,
          "distance": 1
         },
         {
          "backwardYaw": -2.81,
          "panorama": {
           "hfovMin": 60,
           "hfovMax": 120,
           "adjacentPanoramas": [
            {
             "backwardYaw": 102.28,
             "panorama": {
              "hfovMin": 60,
              "hfovMax": 120,
              "adjacentPanoramas": [
               {
                "backwardYaw": -98.81,
                "panorama": {
                 "hfovMin": 60,
                 "hfovMax": 120,
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": 161.9,
                   "panorama": {
                    "hfovMin": 60,
                    "hfovMax": 120,
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": 136.64,
                      "panorama": {
                       "hfovMin": 60,
                       "hfovMax": 120,
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": 153.06,
                         "panorama": {
                          "hfovMin": 60,
                          "hfovMax": 120,
                          "adjacentPanoramas": [
                           {
                            "backwardYaw": -162.73,
                            "panorama": "this.panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB",
                            "class": "AdjacentPanorama",
                            "yaw": 153.06,
                            "distance": 1
                           },
                           {
                            "backwardYaw": -67.48,
                            "panorama": {
                             "hfovMin": 60,
                             "hfovMax": 120,
                             "adjacentPanoramas": [
                              {
                               "backwardYaw": -87.7,
                               "panorama": {
                                "hfovMin": 60,
                                "hfovMax": 120,
                                "adjacentPanoramas": [
                                 {
                                  "backwardYaw": 139.42,
                                  "panorama": {
                                   "hfovMin": 60,
                                   "hfovMax": 120,
                                   "adjacentPanoramas": [
                                    {
                                     "backwardYaw": 153.57,
                                     "panorama": "this.panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD",
                                     "class": "AdjacentPanorama",
                                     "yaw": 139.42,
                                     "distance": 1
                                    },
                                    {
                                     "backwardYaw": -152.37,
                                     "panorama": "this.panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B",
                                     "class": "AdjacentPanorama",
                                     "yaw": 58.33,
                                     "distance": 1
                                    }
                                   ],
                                   "label": "R0010065_20200915194854-01",
                                   "partial": false,
                                   "thumbnailUrl": "media/panorama_BF4EBA82_B41A_476A_41E4_959A620651A3_t.jpg",
                                   "vfov": 180,
                                   "id": "panorama_BF4EBA82_B41A_476A_41E4_959A620651A3",
                                   "class": "Panorama",
                                   "hfov": 360,
                                   "frames": [
                                    {
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "id": "overlay_ABBBDB5D_B876_CD52_41DC_33ACA34AC40E",
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_BF4EBA82_B41A_476A_41E4_959A620651A3_0_HS_1_0_0_map.gif",
                                            "height": 57,
                                            "class": "ImageResourceLevel",
                                            "width": 58
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -12.38,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 58.33,
                                         "hfov": 7.59
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_BF4EBA82_B41A_476A_41E4_959A620651A3_0_HS_1_0.png",
                                            "height": 115,
                                            "class": "ImageResourceLevel",
                                            "width": 116
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 7.59,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -12.38,
                                         "yaw": 58.33
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B, this.camera_F573518A_FB98_7ECB_41C7_492A135C14C8); this.mainPlayList.set('selectedIndex', 23)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "id": "overlay_AC68EAF8_B876_4F53_41D0_FDC8C05B0DC7",
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_BF4EBA82_B41A_476A_41E4_959A620651A3_0_HS_0_0_0_map.gif",
                                            "height": 57,
                                            "class": "ImageResourceLevel",
                                            "width": 58
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -12.12,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 139.42,
                                         "hfov": 7.59
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_BF4EBA82_B41A_476A_41E4_959A620651A3_0_HS_0_0.png",
                                            "height": 115,
                                            "class": "ImageResourceLevel",
                                            "width": 116
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 7.59,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -12.12,
                                         "yaw": 139.42
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD, this.camera_F57E917E_FB98_7E4B_41C9_13FA3AE18483); this.mainPlayList.set('selectedIndex', 21)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ]
                                      },
                                      {
                                       "image": {
                                        "levels": [
                                         {
                                          "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_tcap0.png",
                                          "height": 1348,
                                          "class": "ImageResourceLevel",
                                          "width": 1348
                                         }
                                        ],
                                        "class": "ImageResource"
                                       },
                                       "id": "panorama_BF4EBA82_B41A_476A_41E4_959A620651A3_tcap0",
                                       "class": "TripodCapPanoramaOverlay",
                                       "hfov": 45,
                                       "angle": 0,
                                       "inertia": false,
                                       "rotate": false
                                      }
                                     ],
                                     "right": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_BF4EBA82_B41A_476A_41E4_959A620651A3_r_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_BF4EBA82_B41A_476A_41E4_959A620651A3_r.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "front": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_BF4EBA82_B41A_476A_41E4_959A620651A3_f_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_BF4EBA82_B41A_476A_41E4_959A620651A3_f.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "class": "CubicPanoramaFrame",
                                     "top": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_BF4EBA82_B41A_476A_41E4_959A620651A3_u_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_BF4EBA82_B41A_476A_41E4_959A620651A3_u.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "bottom": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_BF4EBA82_B41A_476A_41E4_959A620651A3_d_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_BF4EBA82_B41A_476A_41E4_959A620651A3_d.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "left": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_BF4EBA82_B41A_476A_41E4_959A620651A3_l_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_BF4EBA82_B41A_476A_41E4_959A620651A3_l.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "back": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_BF4EBA82_B41A_476A_41E4_959A620651A3_b_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_BF4EBA82_B41A_476A_41E4_959A620651A3_b.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "thumbnailUrl": "media/panorama_BF4EBA82_B41A_476A_41E4_959A620651A3_t.jpg"
                                    }
                                   ],
                                   "pitch": 0
                                  },
                                  "class": "AdjacentPanorama",
                                  "yaw": 153.57,
                                  "distance": 1
                                 },
                                 {
                                  "backwardYaw": 164.43,
                                  "panorama": "this.panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B",
                                  "class": "AdjacentPanorama",
                                  "yaw": -87.7,
                                  "distance": 1
                                 },
                                 {
                                  "backwardYaw": -6.85,
                                  "panorama": {
                                   "hfovMin": 60,
                                   "hfovMax": 120,
                                   "adjacentPanoramas": [
                                    {
                                     "backwardYaw": 91.67,
                                     "panorama": {
                                      "hfovMin": 60,
                                      "hfovMax": 120,
                                      "adjacentPanoramas": [
                                       {
                                        "backwardYaw": 176.72,
                                        "panorama": "this.panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34",
                                        "class": "AdjacentPanorama",
                                        "yaw": 91.67,
                                        "distance": 1
                                       }
                                      ],
                                      "label": "R0010063_20200915194726-01",
                                      "partial": false,
                                      "thumbnailUrl": "media/panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E_t.jpg",
                                      "vfov": 180,
                                      "id": "panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E",
                                      "class": "Panorama",
                                      "hfov": 360,
                                      "frames": [
                                       {
                                        "overlays": [
                                         {
                                          "useHandCursor": true,
                                          "id": "overlay_AB6BB47C_B873_FB52_41D0_A377BBA67EE7",
                                          "class": "HotspotPanoramaOverlay",
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E_0_HS_0_0_0_map.gif",
                                               "height": 57,
                                               "class": "ImageResourceLevel",
                                               "width": 58
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -21.22,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 91.67,
                                            "hfov": 7.24
                                           }
                                          ],
                                          "items": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E_0_HS_0_0.png",
                                               "height": 115,
                                               "class": "ImageResourceLevel",
                                               "width": 116
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "hfov": 7.24,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -21.22,
                                            "yaw": 91.67
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34, this.camera_F4AB120E_FB98_7DCB_4197_BF5A97D85B5E); this.mainPlayList.set('selectedIndex', 18)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ]
                                         },
                                         {
                                          "image": {
                                           "levels": [
                                            {
                                             "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_tcap0.png",
                                             "height": 1348,
                                             "class": "ImageResourceLevel",
                                             "width": 1348
                                            }
                                           ],
                                           "class": "ImageResource"
                                          },
                                          "id": "panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E_tcap0",
                                          "class": "TripodCapPanoramaOverlay",
                                          "hfov": 45,
                                          "angle": 0,
                                          "inertia": false,
                                          "rotate": false
                                         }
                                        ],
                                        "right": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E_r_hq.jpeg",
                                           "height": 1704,
                                           "class": "ImageResourceLevel",
                                           "width": 1704
                                          },
                                          {
                                           "url": "media/panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E_r.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "front": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E_f_hq.jpeg",
                                           "height": 1704,
                                           "class": "ImageResourceLevel",
                                           "width": 1704
                                          },
                                          {
                                           "url": "media/panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E_f.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "class": "CubicPanoramaFrame",
                                        "top": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E_u_hq.jpeg",
                                           "height": 1704,
                                           "class": "ImageResourceLevel",
                                           "width": 1704
                                          },
                                          {
                                           "url": "media/panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E_u.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "bottom": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E_d_hq.jpeg",
                                           "height": 1704,
                                           "class": "ImageResourceLevel",
                                           "width": 1704
                                          },
                                          {
                                           "url": "media/panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E_d.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "left": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E_l_hq.jpeg",
                                           "height": 1704,
                                           "class": "ImageResourceLevel",
                                           "width": 1704
                                          },
                                          {
                                           "url": "media/panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E_l.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "back": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E_b_hq.jpeg",
                                           "height": 1704,
                                           "class": "ImageResourceLevel",
                                           "width": 1704
                                          },
                                          {
                                           "url": "media/panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E_b.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "thumbnailUrl": "media/panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E_t.jpg"
                                       }
                                      ],
                                      "pitch": 0
                                     },
                                     "class": "AdjacentPanorama",
                                     "yaw": 176.72,
                                     "distance": 1
                                    },
                                    {
                                     "backwardYaw": 124.26,
                                     "panorama": "this.panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD",
                                     "class": "AdjacentPanorama",
                                     "yaw": -6.85,
                                     "distance": 1
                                    },
                                    {
                                     "backwardYaw": 30.79,
                                     "panorama": {
                                      "hfovMin": 60,
                                      "hfovMax": 120,
                                      "adjacentPanoramas": [
                                       {
                                        "backwardYaw": 78.54,
                                        "panorama": "this.panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34",
                                        "class": "AdjacentPanorama",
                                        "yaw": 30.79,
                                        "distance": 1
                                       }
                                      ],
                                      "label": "R0010062_20200915194658-01",
                                      "partial": false,
                                      "thumbnailUrl": "media/panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9_t.jpg",
                                      "vfov": 180,
                                      "id": "panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9",
                                      "class": "Panorama",
                                      "hfov": 360,
                                      "frames": [
                                       {
                                        "overlays": [
                                         {
                                          "useHandCursor": true,
                                          "id": "overlay_AB493284_B872_DFB2_41B3_AB591984F6A5",
                                          "class": "HotspotPanoramaOverlay",
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9_0_HS_0_0_0_map.gif",
                                               "height": 57,
                                               "class": "ImageResourceLevel",
                                               "width": 58
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -15.66,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 30.79,
                                            "hfov": 7.48
                                           }
                                          ],
                                          "items": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9_0_HS_0_0.png",
                                               "height": 115,
                                               "class": "ImageResourceLevel",
                                               "width": 116
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "hfov": 7.48,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -15.66,
                                            "yaw": 30.79
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34, this.camera_F49C41F6_FB98_7E5B_4190_C467A406EDB8); this.mainPlayList.set('selectedIndex', 18)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ]
                                         },
                                         {
                                          "image": {
                                           "levels": [
                                            {
                                             "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_tcap0.png",
                                             "height": 1348,
                                             "class": "ImageResourceLevel",
                                             "width": 1348
                                            }
                                           ],
                                           "class": "ImageResource"
                                          },
                                          "id": "panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9_tcap0",
                                          "class": "TripodCapPanoramaOverlay",
                                          "hfov": 45,
                                          "angle": 0,
                                          "inertia": false,
                                          "rotate": false
                                         }
                                        ],
                                        "right": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9_r_hq.jpeg",
                                           "height": 1704,
                                           "class": "ImageResourceLevel",
                                           "width": 1704
                                          },
                                          {
                                           "url": "media/panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9_r.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "front": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9_f_hq.jpeg",
                                           "height": 1704,
                                           "class": "ImageResourceLevel",
                                           "width": 1704
                                          },
                                          {
                                           "url": "media/panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9_f.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "class": "CubicPanoramaFrame",
                                        "top": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9_u_hq.jpeg",
                                           "height": 1704,
                                           "class": "ImageResourceLevel",
                                           "width": 1704
                                          },
                                          {
                                           "url": "media/panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9_u.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "bottom": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9_d_hq.jpeg",
                                           "height": 1704,
                                           "class": "ImageResourceLevel",
                                           "width": 1704
                                          },
                                          {
                                           "url": "media/panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9_d.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "left": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9_l_hq.jpeg",
                                           "height": 1704,
                                           "class": "ImageResourceLevel",
                                           "width": 1704
                                          },
                                          {
                                           "url": "media/panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9_l.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "back": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9_b_hq.jpeg",
                                           "height": 1704,
                                           "class": "ImageResourceLevel",
                                           "width": 1704
                                          },
                                          {
                                           "url": "media/panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9_b.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "thumbnailUrl": "media/panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9_t.jpg"
                                       }
                                      ],
                                      "pitch": 0
                                     },
                                     "class": "AdjacentPanorama",
                                     "yaw": 78.54,
                                     "distance": 1
                                    }
                                   ],
                                   "label": "R0010061_20200915194628-01",
                                   "partial": false,
                                   "thumbnailUrl": "media/panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34_t.jpg",
                                   "vfov": 180,
                                   "id": "panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34",
                                   "class": "Panorama",
                                   "hfov": 360,
                                   "frames": [
                                    {
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "id": "overlay_AACECD64_B87F_C573_41DF_F52BCF6B72AA",
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34_0_HS_2_0_0_map.gif",
                                            "height": 48,
                                            "class": "ImageResourceLevel",
                                            "width": 49
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -9.26,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 176.72,
                                         "hfov": 6.48
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34_0_HS_2_0.png",
                                            "height": 97,
                                            "class": "ImageResourceLevel",
                                            "width": 98
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 6.48,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -9.26,
                                         "yaw": 176.72
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E, this.camera_EB84E095_FB98_7ED9_41B7_63F5FFB81F59); this.mainPlayList.set('selectedIndex', 20)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "id": "overlay_AB56D8D5_B87E_CB52_41DE_912D24E070DC",
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34_0_HS_1_0_0_map.gif",
                                            "height": 57,
                                            "class": "ImageResourceLevel",
                                            "width": 58
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -18.69,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 78.54,
                                         "hfov": 7.36
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34_0_HS_1_0.png",
                                            "height": 115,
                                            "class": "ImageResourceLevel",
                                            "width": 116
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 7.36,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -18.69,
                                         "yaw": 78.54
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9, this.camera_EB9550AD_FB98_7EC9_41E3_DC445B9D2ABF); this.mainPlayList.set('selectedIndex', 19)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "id": "overlay_AB70B28C_B87E_5FB3_41DE_ED7DB7A04238",
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34_0_HS_0_0_0_map.gif",
                                            "height": 57,
                                            "class": "ImageResourceLevel",
                                            "width": 58
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -14.9,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -6.85,
                                         "hfov": 7.51
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34_0_HS_0_0.png",
                                            "height": 115,
                                            "class": "ImageResourceLevel",
                                            "width": 116
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 7.51,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -14.9,
                                         "yaw": -6.85
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD, this.camera_EB9D10A1_FB98_7EF9_41E9_218091B0A282); this.mainPlayList.set('selectedIndex', 21)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ]
                                      },
                                      {
                                       "image": {
                                        "levels": [
                                         {
                                          "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_tcap0.png",
                                          "height": 1348,
                                          "class": "ImageResourceLevel",
                                          "width": 1348
                                         }
                                        ],
                                        "class": "ImageResource"
                                       },
                                       "id": "panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34_tcap0",
                                       "class": "TripodCapPanoramaOverlay",
                                       "hfov": 45,
                                       "angle": 0,
                                       "inertia": false,
                                       "rotate": false
                                      }
                                     ],
                                     "right": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34_r_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34_r.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "front": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34_f_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34_f.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "class": "CubicPanoramaFrame",
                                     "top": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34_u_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34_u.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "bottom": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34_d_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34_d.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "left": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34_l_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34_l.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "back": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34_b_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34_b.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "thumbnailUrl": "media/panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34_t.jpg"
                                    }
                                   ],
                                   "pitch": 0
                                  },
                                  "class": "AdjacentPanorama",
                                  "yaw": 124.26,
                                  "distance": 1
                                 }
                                ],
                                "label": "R0010064_20200915194808-01",
                                "partial": false,
                                "thumbnailUrl": "media/panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD_t.jpg",
                                "vfov": 180,
                                "id": "panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD",
                                "class": "Panorama",
                                "hfov": 360,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_ABCAD30C_B872_3EB2_41DD_F9842D883821",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD_0_HS_2_0_0_map.gif",
                                         "height": 57,
                                         "class": "ImageResourceLevel",
                                         "width": 58
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -9.09,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -87.7,
                                      "hfov": 7.67
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD_0_HS_2_0.png",
                                         "height": 115,
                                         "class": "ImageResourceLevel",
                                         "width": 116
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 7.67,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -9.09,
                                      "yaw": -87.7
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B, this.camera_F55DE106_FB98_7FBB_41E4_62C66A64EA2A); this.mainPlayList.set('selectedIndex', 23)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_ABEF1644_B872_46B3_41D3_9C8E3E2CAB4C",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD_0_HS_1_0_0_map.gif",
                                         "height": 57,
                                         "class": "ImageResourceLevel",
                                         "width": 58
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -10.1,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 153.57,
                                      "hfov": 7.65
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD_0_HS_1_0.png",
                                         "height": 115,
                                         "class": "ImageResourceLevel",
                                         "width": 116
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 7.65,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -10.1,
                                      "yaw": 153.57
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_BF4EBA82_B41A_476A_41E4_959A620651A3, this.camera_EBA530C5_FB98_7EB9_41D8_0C3BF850B50E); this.mainPlayList.set('selectedIndex', 22)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_ABAF8D1D_B875_CAD2_41DB_A72CB4DEEC75",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD_0_HS_0_0_0_map.gif",
                                         "height": 57,
                                         "class": "ImageResourceLevel",
                                         "width": 58
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -8.33,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 124.26,
                                      "hfov": 7.69
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD_0_HS_0_0.png",
                                         "height": 115,
                                         "class": "ImageResourceLevel",
                                         "width": 116
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 7.69,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -8.33,
                                      "yaw": 124.26
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34, this.camera_F5535113_FB98_7FD9_41DA_F0A780A3E914); this.mainPlayList.set('selectedIndex', 18)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ]
                                   },
                                   {
                                    "image": {
                                     "levels": [
                                      {
                                       "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_tcap0.png",
                                       "height": 1348,
                                       "class": "ImageResourceLevel",
                                       "width": 1348
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "id": "panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD_tcap0",
                                    "class": "TripodCapPanoramaOverlay",
                                    "hfov": 45,
                                    "angle": 0,
                                    "inertia": false,
                                    "rotate": false
                                   }
                                  ],
                                  "right": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD_r_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD_r.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "front": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD_f_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD_f.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "class": "CubicPanoramaFrame",
                                  "top": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD_u_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD_u.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "bottom": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD_d_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD_d.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "left": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD_l_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD_l.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "back": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD_b_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD_b.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "thumbnailUrl": "media/panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD_t.jpg"
                                 }
                                ],
                                "pitch": 0
                               },
                               "class": "AdjacentPanorama",
                               "yaw": 164.43,
                               "distance": 1
                              },
                              {
                               "backwardYaw": 58.33,
                               "panorama": "this.panorama_BF4EBA82_B41A_476A_41E4_959A620651A3",
                               "class": "AdjacentPanorama",
                               "yaw": -152.37,
                               "distance": 1
                              },
                              {
                               "backwardYaw": 70.96,
                               "panorama": "this.panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA",
                               "class": "AdjacentPanorama",
                               "yaw": -67.48,
                               "distance": 1
                              }
                             ],
                             "label": "R0010068_20200915195034-01",
                             "partial": false,
                             "thumbnailUrl": "media/panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_t.jpg",
                             "vfov": 180,
                             "id": "panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B",
                             "class": "Panorama",
                             "hfov": 360,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "image": {
                                  "levels": [
                                   {
                                    "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_tcap0.png",
                                    "height": 1348,
                                    "class": "ImageResourceLevel",
                                    "width": 1348
                                   }
                                  ],
                                  "class": "ImageResource"
                                 },
                                 "id": "panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_tcap0",
                                 "class": "TripodCapPanoramaOverlay",
                                 "hfov": 45,
                                 "angle": 0,
                                 "inertia": false,
                                 "rotate": false
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_A4FF506F_B40A_C3BA_41E4_8EC979601764",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_0_HS_0_0_0_map.gif",
                                      "height": 57,
                                      "class": "ImageResourceLevel",
                                      "width": 57
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -2.02,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -67.48,
                                   "hfov": 7.76
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_0_HS_0_0.png",
                                      "height": 114,
                                      "class": "ImageResourceLevel",
                                      "width": 115
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.76,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -2.02,
                                   "yaw": -67.48
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA, this.camera_F4DDD279_FB98_6249_41EB_D2F93B246881); this.mainPlayList.set('selectedIndex', 24)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_AFC7A7AD_B857_C5CD_419F_9050CCF6981D",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_0_HS_2_0_0_map.gif",
                                      "height": 57,
                                      "class": "ImageResourceLevel",
                                      "width": 58
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -8.33,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -152.37,
                                   "hfov": 7.69
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_0_HS_2_0.png",
                                      "height": 115,
                                      "class": "ImageResourceLevel",
                                      "width": 116
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.69,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -8.33,
                                   "yaw": -152.37
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_BF4EBA82_B41A_476A_41E4_959A620651A3, this.camera_F4C5526D_FB98_6249_41E1_1E1246B835C7); this.mainPlayList.set('selectedIndex', 22)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_AF8617A0_B856_45F3_41BE_2B8D4B13DFE7",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_0_HS_1_0_0_map.gif",
                                      "height": 57,
                                      "class": "ImageResourceLevel",
                                      "width": 58
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -7.58,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 164.43,
                                   "hfov": 7.7
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_0_HS_1_0.png",
                                      "height": 115,
                                      "class": "ImageResourceLevel",
                                      "width": 116
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.7,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -7.58,
                                   "yaw": 164.43
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD, this.camera_F4CCC261_FB98_6279_41C7_9768F81FC151); this.mainPlayList.set('selectedIndex', 21)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ]
                                }
                               ],
                               "right": {
                                "levels": [
                                 {
                                  "url": "media/panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_r_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_r.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "front": {
                                "levels": [
                                 {
                                  "url": "media/panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_f_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_f.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "class": "CubicPanoramaFrame",
                               "top": {
                                "levels": [
                                 {
                                  "url": "media/panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_u_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_u.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "bottom": {
                                "levels": [
                                 {
                                  "url": "media/panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_d_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_d.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "left": {
                                "levels": [
                                 {
                                  "url": "media/panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_l_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_l.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "back": {
                                "levels": [
                                 {
                                  "url": "media/panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_b_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_b.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "thumbnailUrl": "media/panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_t.jpg"
                              }
                             ],
                             "pitch": 0
                            },
                            "class": "AdjacentPanorama",
                            "yaw": 70.96,
                            "distance": 1
                           }
                          ],
                          "label": "R0010069_20200915195140-01",
                          "partial": false,
                          "thumbnailUrl": "media/panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA_t.jpg",
                          "vfov": 180,
                          "id": "panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA",
                          "class": "Panorama",
                          "hfov": 360,
                          "frames": [
                           {
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "id": "overlay_BBB54D2D_B40A_7DBE_41DA_2C81577C85A8",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA_0_HS_1_0_0_map.gif",
                                   "height": 57,
                                   "class": "ImageResourceLevel",
                                   "width": 57
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -3.28,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 153.06,
                                "hfov": 7.76
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA_0_HS_1_0.png",
                                   "height": 114,
                                   "class": "ImageResourceLevel",
                                   "width": 115
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 7.76,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -3.28,
                                "yaw": 153.06
                               }
                              ],
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB, this.camera_F47FC055_FB98_7E59_41D5_B7D221F9D531); this.mainPlayList.set('selectedIndex', 1)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "id": "overlay_A4AA7987_B40F_C56A_41CC_8BA22664B911",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA_0_HS_0_0_0_map.gif",
                                   "height": 57,
                                   "class": "ImageResourceLevel",
                                   "width": 57
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -45.72,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 70.96,
                                "hfov": 5.42
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA_0_HS_0_0.png",
                                   "height": 114,
                                   "class": "ImageResourceLevel",
                                   "width": 115
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 5.42,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -45.72,
                                "yaw": 70.96
                               }
                              ],
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B, this.camera_F4728062_FB98_7E7B_41D8_0ED9CBE46953); this.mainPlayList.set('selectedIndex', 23)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ]
                             },
                             {
                              "image": {
                               "levels": [
                                {
                                 "url": "media/panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_tcap0.png",
                                 "height": 1348,
                                 "class": "ImageResourceLevel",
                                 "width": 1348
                                }
                               ],
                               "class": "ImageResource"
                              },
                              "id": "panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA_tcap0",
                              "class": "TripodCapPanoramaOverlay",
                              "hfov": 45,
                              "angle": 0,
                              "inertia": false,
                              "rotate": false
                             }
                            ],
                            "right": {
                             "levels": [
                              {
                               "url": "media/panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA_r_hq.jpeg",
                               "height": 1704,
                               "class": "ImageResourceLevel",
                               "width": 1704
                              },
                              {
                               "url": "media/panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA_r.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "front": {
                             "levels": [
                              {
                               "url": "media/panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA_f_hq.jpeg",
                               "height": 1704,
                               "class": "ImageResourceLevel",
                               "width": 1704
                              },
                              {
                               "url": "media/panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA_f.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "class": "CubicPanoramaFrame",
                            "top": {
                             "levels": [
                              {
                               "url": "media/panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA_u_hq.jpeg",
                               "height": 1704,
                               "class": "ImageResourceLevel",
                               "width": 1704
                              },
                              {
                               "url": "media/panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA_u.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "bottom": {
                             "levels": [
                              {
                               "url": "media/panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA_d_hq.jpeg",
                               "height": 1704,
                               "class": "ImageResourceLevel",
                               "width": 1704
                              },
                              {
                               "url": "media/panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA_d.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "left": {
                             "levels": [
                              {
                               "url": "media/panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA_l_hq.jpeg",
                               "height": 1704,
                               "class": "ImageResourceLevel",
                               "width": 1704
                              },
                              {
                               "url": "media/panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA_l.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "back": {
                             "levels": [
                              {
                               "url": "media/panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA_b_hq.jpeg",
                               "height": 1704,
                               "class": "ImageResourceLevel",
                               "width": 1704
                              },
                              {
                               "url": "media/panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA_b.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "thumbnailUrl": "media/panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA_t.jpg"
                           }
                          ],
                          "pitch": 0
                         },
                         "class": "AdjacentPanorama",
                         "yaw": -162.73,
                         "distance": 1
                        },
                        {
                         "backwardYaw": 169.74,
                         "panorama": {
                          "hfovMin": 60,
                          "hfovMax": 120,
                          "adjacentPanoramas": [
                           {
                            "backwardYaw": 86.12,
                            "panorama": "this.panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB",
                            "class": "AdjacentPanorama",
                            "yaw": 169.74,
                            "distance": 1
                           },
                           {
                            "backwardYaw": -145.3,
                            "panorama": {
                             "hfovMin": 60,
                             "hfovMax": 120,
                             "adjacentPanoramas": [
                              {
                               "backwardYaw": 45.19,
                               "panorama": {
                                "hfovMin": 60,
                                "hfovMax": 120,
                                "adjacentPanoramas": [
                                 {
                                  "backwardYaw": 89.65,
                                  "panorama": "this.panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54",
                                  "class": "AdjacentPanorama",
                                  "yaw": -17.72,
                                  "distance": 1
                                 },
                                 {
                                  "backwardYaw": 118.2,
                                  "panorama": "this.panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205",
                                  "class": "AdjacentPanorama",
                                  "yaw": 45.19,
                                  "distance": 1
                                 }
                                ],
                                "label": "R0010040_20200817193104-01",
                                "partial": false,
                                "thumbnailUrl": "media/panorama_BF49991E_B41A_459B_41DB_AFF106155788_t.jpg",
                                "vfov": 180,
                                "id": "panorama_BF49991E_B41A_459B_41DB_AFF106155788",
                                "class": "Panorama",
                                "hfov": 360,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_B750C4AD_B852_5BCD_41CE_8E4E6E5E574C",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_BF49991E_B41A_459B_41DB_AFF106155788_0_HS_1_0_0_map.gif",
                                         "height": 57,
                                         "class": "ImageResourceLevel",
                                         "width": 58
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -14.15,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 45.19,
                                      "hfov": 7.53
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_BF49991E_B41A_459B_41DB_AFF106155788_0_HS_1_0.png",
                                         "height": 115,
                                         "class": "ImageResourceLevel",
                                         "width": 116
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 7.53,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -14.15,
                                      "yaw": 45.19
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205, this.camera_F44CBF8F_FB98_62C8_41E2_EB055CE23F12); this.mainPlayList.set('selectedIndex', 9)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_B73492EE_B86E_5F4E_41E6_22300125D516",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_BF49991E_B41A_459B_41DB_AFF106155788_0_HS_0_0_0_map.gif",
                                         "height": 57,
                                         "class": "ImageResourceLevel",
                                         "width": 58
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -11.11,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -17.72,
                                      "hfov": 7.62
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_BF49991E_B41A_459B_41DB_AFF106155788_0_HS_0_0.png",
                                         "height": 115,
                                         "class": "ImageResourceLevel",
                                         "width": 116
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 7.62,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -11.11,
                                      "yaw": -17.72
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54, this.camera_F448EF74_FB98_625F_41DD_1DB95E1F8B94); this.mainPlayList.set('selectedIndex', 2)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ]
                                   },
                                   {
                                    "image": {
                                     "levels": [
                                      {
                                       "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_tcap0.png",
                                       "height": 1348,
                                       "class": "ImageResourceLevel",
                                       "width": 1348
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "id": "panorama_BF49991E_B41A_459B_41DB_AFF106155788_tcap0",
                                    "class": "TripodCapPanoramaOverlay",
                                    "hfov": 45,
                                    "angle": 0,
                                    "inertia": false,
                                    "rotate": false
                                   }
                                  ],
                                  "right": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF49991E_B41A_459B_41DB_AFF106155788_r_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF49991E_B41A_459B_41DB_AFF106155788_r.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "front": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF49991E_B41A_459B_41DB_AFF106155788_f_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF49991E_B41A_459B_41DB_AFF106155788_f.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "class": "CubicPanoramaFrame",
                                  "top": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF49991E_B41A_459B_41DB_AFF106155788_u_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF49991E_B41A_459B_41DB_AFF106155788_u.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "bottom": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF49991E_B41A_459B_41DB_AFF106155788_d_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF49991E_B41A_459B_41DB_AFF106155788_d.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "left": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF49991E_B41A_459B_41DB_AFF106155788_l_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF49991E_B41A_459B_41DB_AFF106155788_l.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "back": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF49991E_B41A_459B_41DB_AFF106155788_b_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF49991E_B41A_459B_41DB_AFF106155788_b.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "thumbnailUrl": "media/panorama_BF49991E_B41A_459B_41DB_AFF106155788_t.jpg"
                                 }
                                ],
                                "pitch": 0
                               },
                               "class": "AdjacentPanorama",
                               "yaw": 118.2,
                               "distance": 1
                              },
                              {
                               "backwardYaw": 26.24,
                               "panorama": "this.panorama_BF499049_B41A_43F9_41C8_D167F91ACF93",
                               "class": "AdjacentPanorama",
                               "yaw": -145.3,
                               "distance": 1
                              },
                              {
                               "backwardYaw": 73.99,
                               "panorama": "this.panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54",
                               "class": "AdjacentPanorama",
                               "yaw": 148.01,
                               "distance": 1
                              }
                             ],
                             "label": "R0010047_20200817193456-01",
                             "partial": false,
                             "thumbnailUrl": "media/panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205_t.jpg",
                             "vfov": 180,
                             "id": "panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205",
                             "class": "Panorama",
                             "hfov": 360,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_B7EA47ED_B872_4572_41B1_26FE5F402581",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205_0_HS_1_0_0_map.gif",
                                      "height": 57,
                                      "class": "ImageResourceLevel",
                                      "width": 58
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -8.08,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -145.3,
                                   "hfov": 7.69
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205_0_HS_1_0.png",
                                      "height": 115,
                                      "class": "ImageResourceLevel",
                                      "width": 116
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.69,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -8.08,
                                   "yaw": -145.3
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_BF499049_B41A_43F9_41C8_D167F91ACF93, this.camera_EB8F707C_FB98_7E4F_41C9_CC4054147F21); this.mainPlayList.set('selectedIndex', 8)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_B7ABB15D_B872_5D52_41E2_FDF977E93E01",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205_0_HS_0_0_0_map.gif",
                                      "height": 57,
                                      "class": "ImageResourceLevel",
                                      "width": 58
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -7.83,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 148.01,
                                   "hfov": 7.7
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205_0_HS_0_0.png",
                                      "height": 115,
                                      "class": "ImageResourceLevel",
                                      "width": 116
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.7,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -7.83,
                                   "yaw": 148.01
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54, this.camera_EB820088_FB98_7EB7_41EC_2D30881AC37B); this.mainPlayList.set('selectedIndex', 2)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_AFBEE335_B852_3ED2_41D8_7AB227939B3C",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205_0_HS_2_0_0_map.gif",
                                      "height": 57,
                                      "class": "ImageResourceLevel",
                                      "width": 58
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -5.3,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 118.2,
                                   "hfov": 7.73
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205_0_HS_2_0.png",
                                      "height": 115,
                                      "class": "ImageResourceLevel",
                                      "width": 116
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.73,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -5.3,
                                   "yaw": 118.2
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_BF49991E_B41A_459B_41DB_AFF106155788, this.camera_F475006F_FB98_7E49_41E2_F88FD3CD5D06); this.mainPlayList.set('selectedIndex', 6)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ]
                                },
                                {
                                 "image": {
                                  "levels": [
                                   {
                                    "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_tcap0.png",
                                    "height": 1348,
                                    "class": "ImageResourceLevel",
                                    "width": 1348
                                   }
                                  ],
                                  "class": "ImageResource"
                                 },
                                 "id": "panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205_tcap0",
                                 "class": "TripodCapPanoramaOverlay",
                                 "hfov": 45,
                                 "angle": 0,
                                 "inertia": false,
                                 "rotate": false
                                }
                               ],
                               "right": {
                                "levels": [
                                 {
                                  "url": "media/panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205_r_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205_r.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "front": {
                                "levels": [
                                 {
                                  "url": "media/panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205_f_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205_f.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "class": "CubicPanoramaFrame",
                               "top": {
                                "levels": [
                                 {
                                  "url": "media/panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205_u_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205_u.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "bottom": {
                                "levels": [
                                 {
                                  "url": "media/panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205_d_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205_d.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "left": {
                                "levels": [
                                 {
                                  "url": "media/panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205_l_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205_l.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "back": {
                                "levels": [
                                 {
                                  "url": "media/panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205_b_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205_b.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "thumbnailUrl": "media/panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205_t.jpg"
                              }
                             ],
                             "pitch": 0
                            },
                            "class": "AdjacentPanorama",
                            "yaw": 26.24,
                            "distance": 1
                           }
                          ],
                          "label": "R0010043_20200817193308-02",
                          "partial": false,
                          "thumbnailUrl": "media/panorama_BF499049_B41A_43F9_41C8_D167F91ACF93_t.jpg",
                          "vfov": 180,
                          "id": "panorama_BF499049_B41A_43F9_41C8_D167F91ACF93",
                          "class": "Panorama",
                          "hfov": 360,
                          "frames": [
                           {
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "id": "overlay_B7299555_B86F_C55D_41A5_767A0D352D59",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_BF499049_B41A_43F9_41C8_D167F91ACF93_0_HS_2_0_0_map.gif",
                                   "height": 57,
                                   "class": "ImageResourceLevel",
                                   "width": 58
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -18.44,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 169.74,
                                "hfov": 7.37
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_BF499049_B41A_43F9_41C8_D167F91ACF93_0_HS_2_0.png",
                                   "height": 115,
                                   "class": "ImageResourceLevel",
                                   "width": 116
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 7.37,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -18.44,
                                "yaw": 169.74
                               }
                              ],
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB, this.camera_F550511F_FB98_7FC9_41EF_6AD010C3B480); this.mainPlayList.set('selectedIndex', 1)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "id": "overlay_B781599A_B86E_CDD6_41BF_00E448CA5EF8",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_BF499049_B41A_43F9_41C8_D167F91ACF93_0_HS_1_0_0_map.gif",
                                   "height": 57,
                                   "class": "ImageResourceLevel",
                                   "width": 58
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -5.3,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 26.24,
                                "hfov": 7.73
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_BF499049_B41A_43F9_41C8_D167F91ACF93_0_HS_1_0.png",
                                   "height": 115,
                                   "class": "ImageResourceLevel",
                                   "width": 116
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 7.73,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -5.3,
                                "yaw": 26.24
                               }
                              ],
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205, this.camera_F555712C_FB98_7FCE_41E0_02B87811FD92); this.mainPlayList.set('selectedIndex', 9)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "id": "overlay_B79A927D_B86D_DF52_41D7_5BD9BB1C8111",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_BF499049_B41A_43F9_41C8_D167F91ACF93_0_HS_0_0_0_map.gif",
                                   "height": 57,
                                   "class": "ImageResourceLevel",
                                   "width": 58
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -5.3,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 53.02,
                                "hfov": 7.73
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_BF499049_B41A_43F9_41C8_D167F91ACF93_0_HS_0_0.png",
                                   "height": 115,
                                   "class": "ImageResourceLevel",
                                   "width": 116
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 7.73,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -5.3,
                                "yaw": 53.02
                               }
                              ],
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.mainPlayList.set('selectedIndex', 6)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ]
                             },
                             {
                              "image": {
                               "levels": [
                                {
                                 "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_tcap0.png",
                                 "height": 1348,
                                 "class": "ImageResourceLevel",
                                 "width": 1348
                                }
                               ],
                               "class": "ImageResource"
                              },
                              "id": "panorama_BF499049_B41A_43F9_41C8_D167F91ACF93_tcap0",
                              "class": "TripodCapPanoramaOverlay",
                              "hfov": 45,
                              "angle": 0,
                              "inertia": false,
                              "rotate": false
                             }
                            ],
                            "right": {
                             "levels": [
                              {
                               "url": "media/panorama_BF499049_B41A_43F9_41C8_D167F91ACF93_r_hq.jpeg",
                               "height": 1704,
                               "class": "ImageResourceLevel",
                               "width": 1704
                              },
                              {
                               "url": "media/panorama_BF499049_B41A_43F9_41C8_D167F91ACF93_r.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "front": {
                             "levels": [
                              {
                               "url": "media/panorama_BF499049_B41A_43F9_41C8_D167F91ACF93_f_hq.jpeg",
                               "height": 1704,
                               "class": "ImageResourceLevel",
                               "width": 1704
                              },
                              {
                               "url": "media/panorama_BF499049_B41A_43F9_41C8_D167F91ACF93_f.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "class": "CubicPanoramaFrame",
                            "top": {
                             "levels": [
                              {
                               "url": "media/panorama_BF499049_B41A_43F9_41C8_D167F91ACF93_u_hq.jpeg",
                               "height": 1704,
                               "class": "ImageResourceLevel",
                               "width": 1704
                              },
                              {
                               "url": "media/panorama_BF499049_B41A_43F9_41C8_D167F91ACF93_u.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "bottom": {
                             "levels": [
                              {
                               "url": "media/panorama_BF499049_B41A_43F9_41C8_D167F91ACF93_d_hq.jpeg",
                               "height": 1704,
                               "class": "ImageResourceLevel",
                               "width": 1704
                              },
                              {
                               "url": "media/panorama_BF499049_B41A_43F9_41C8_D167F91ACF93_d.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "left": {
                             "levels": [
                              {
                               "url": "media/panorama_BF499049_B41A_43F9_41C8_D167F91ACF93_l_hq.jpeg",
                               "height": 1704,
                               "class": "ImageResourceLevel",
                               "width": 1704
                              },
                              {
                               "url": "media/panorama_BF499049_B41A_43F9_41C8_D167F91ACF93_l.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "back": {
                             "levels": [
                              {
                               "url": "media/panorama_BF499049_B41A_43F9_41C8_D167F91ACF93_b_hq.jpeg",
                               "height": 1704,
                               "class": "ImageResourceLevel",
                               "width": 1704
                              },
                              {
                               "url": "media/panorama_BF499049_B41A_43F9_41C8_D167F91ACF93_b.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "thumbnailUrl": "media/panorama_BF499049_B41A_43F9_41C8_D167F91ACF93_t.jpg"
                           }
                          ],
                          "pitch": 0
                         },
                         "class": "AdjacentPanorama",
                         "yaw": 86.12,
                         "distance": 1
                        },
                        {
                         "backwardYaw": -75.82,
                         "panorama": "this.panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54",
                         "class": "AdjacentPanorama",
                         "yaw": 136.64,
                         "distance": 1
                        },
                        {
                         "backwardYaw": 69.19,
                         "panorama": {
                          "hfovMin": 60,
                          "hfovMax": 120,
                          "adjacentPanoramas": [
                           {
                            "backwardYaw": -124.33,
                            "panorama": {
                             "hfovMin": 60,
                             "hfovMax": 120,
                             "adjacentPanoramas": [
                              {
                               "backwardYaw": 172.52,
                               "panorama": {
                                "hfovMin": 60,
                                "hfovMax": 120,
                                "adjacentPanoramas": [
                                 {
                                  "backwardYaw": 49.74,
                                  "panorama": "this.panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A",
                                  "class": "AdjacentPanorama",
                                  "yaw": 172.52,
                                  "distance": 1
                                 }
                                ],
                                "label": "R0010058_20200915194014-01",
                                "partial": false,
                                "thumbnailUrl": "media/panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80_t.jpg",
                                "vfov": 180,
                                "id": "panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80",
                                "class": "Panorama",
                                "hfov": 360,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_AA7B4E9C_B87D_C7D2_41CF_BFD267C3A878",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80_0_HS_0_0_0_map.gif",
                                         "height": 57,
                                         "class": "ImageResourceLevel",
                                         "width": 58
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -9.35,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 172.52,
                                      "hfov": 7.66
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80_0_HS_0_0.png",
                                         "height": 115,
                                         "class": "ImageResourceLevel",
                                         "width": 116
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 7.66,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -9.35,
                                      "yaw": 172.52
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A, this.camera_F4B08249_FB98_6249_41CF_6E48EDA90037); this.mainPlayList.set('selectedIndex', 11)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ]
                                   },
                                   {
                                    "image": {
                                     "levels": [
                                      {
                                       "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_tcap0.png",
                                       "height": 1348,
                                       "class": "ImageResourceLevel",
                                       "width": 1348
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "id": "panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80_tcap0",
                                    "class": "TripodCapPanoramaOverlay",
                                    "hfov": 45,
                                    "angle": 0,
                                    "inertia": false,
                                    "rotate": false
                                   }
                                  ],
                                  "right": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80_r_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80_r.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "front": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80_f_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80_f.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "class": "CubicPanoramaFrame",
                                  "top": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80_u_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80_u.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "bottom": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80_d_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80_d.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "left": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80_l_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80_l.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "back": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80_b_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80_b.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "thumbnailUrl": "media/panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80_t.jpg"
                                 }
                                ],
                                "pitch": 0
                               },
                               "class": "AdjacentPanorama",
                               "yaw": 49.74,
                               "distance": 1
                              },
                              {
                               "backwardYaw": -94.26,
                               "panorama": {
                                "hfovMin": 60,
                                "hfovMax": 120,
                                "adjacentPanoramas": [
                                 {
                                  "backwardYaw": -163.74,
                                  "panorama": {
                                   "hfovMin": 60,
                                   "hfovMax": 120,
                                   "adjacentPanoramas": [
                                    {
                                     "backwardYaw": 28.26,
                                     "panorama": "this.panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB",
                                     "class": "AdjacentPanorama",
                                     "yaw": -163.74,
                                     "distance": 1
                                    }
                                   ],
                                   "label": "R0010057_20200915193854-01",
                                   "partial": false,
                                   "thumbnailUrl": "media/panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556_t.jpg",
                                   "vfov": 180,
                                   "id": "panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556",
                                   "class": "Panorama",
                                   "hfov": 360,
                                   "frames": [
                                    {
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "id": "overlay_AA52D965_B872_CD72_41B4_1F10C493067E",
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556_0_HS_0_0_0_map.gif",
                                            "height": 57,
                                            "class": "ImageResourceLevel",
                                            "width": 58
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -11.62,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -163.74,
                                         "hfov": 7.61
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556_0_HS_0_0.png",
                                            "height": 115,
                                            "class": "ImageResourceLevel",
                                            "width": 116
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 7.61,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -11.62,
                                         "yaw": -163.74
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB, this.camera_EBAD40B9_FB98_7EC9_41D7_CD058E168374); this.mainPlayList.set('selectedIndex', 13)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ]
                                      },
                                      {
                                       "image": {
                                        "levels": [
                                         {
                                          "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_tcap0.png",
                                          "height": 1348,
                                          "class": "ImageResourceLevel",
                                          "width": 1348
                                         }
                                        ],
                                        "class": "ImageResource"
                                       },
                                       "id": "panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556_tcap0",
                                       "class": "TripodCapPanoramaOverlay",
                                       "hfov": 45,
                                       "angle": 0,
                                       "inertia": false,
                                       "rotate": false
                                      }
                                     ],
                                     "right": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556_r_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556_r.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "front": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556_f_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556_f.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "class": "CubicPanoramaFrame",
                                     "top": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556_u_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556_u.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "bottom": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556_d_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556_d.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "left": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556_l_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556_l.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "back": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556_b_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556_b.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "thumbnailUrl": "media/panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556_t.jpg"
                                    }
                                   ],
                                   "pitch": 0
                                  },
                                  "class": "AdjacentPanorama",
                                  "yaw": 28.26,
                                  "distance": 1
                                 },
                                 {
                                  "backwardYaw": -90.73,
                                  "panorama": {
                                   "hfovMin": 60,
                                   "hfovMax": 120,
                                   "adjacentPanoramas": [
                                    {
                                     "backwardYaw": 105.32,
                                     "panorama": "this.panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB",
                                     "class": "AdjacentPanorama",
                                     "yaw": -90.73,
                                     "distance": 1
                                    }
                                   ],
                                   "label": "R0010056_20200915193800-01",
                                   "partial": false,
                                   "thumbnailUrl": "media/panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0_t.jpg",
                                   "vfov": 180,
                                   "id": "panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0",
                                   "class": "Panorama",
                                   "hfov": 360,
                                   "frames": [
                                    {
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "id": "overlay_A9BFE1BD_B872_7DD2_41D8_649183C1F784",
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0_0_HS_0_0_0_map.gif",
                                            "height": 57,
                                            "class": "ImageResourceLevel",
                                            "width": 58
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -18.95,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -90.73,
                                         "hfov": 7.35
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0_0_HS_0_0.png",
                                            "height": 115,
                                            "class": "ImageResourceLevel",
                                            "width": 116
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 7.35,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -18.95,
                                         "yaw": -90.73
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB, this.camera_F49841EA_FB98_7E4B_41E9_0E6606F66285); this.mainPlayList.set('selectedIndex', 13)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ]
                                      },
                                      {
                                       "image": {
                                        "levels": [
                                         {
                                          "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_tcap0.png",
                                          "height": 1348,
                                          "class": "ImageResourceLevel",
                                          "width": 1348
                                         }
                                        ],
                                        "class": "ImageResource"
                                       },
                                       "id": "panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0_tcap0",
                                       "class": "TripodCapPanoramaOverlay",
                                       "hfov": 45,
                                       "angle": 0,
                                       "inertia": false,
                                       "rotate": false
                                      }
                                     ],
                                     "right": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0_r_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0_r.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "front": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0_f_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0_f.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "class": "CubicPanoramaFrame",
                                     "top": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0_u_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0_u.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "bottom": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0_d_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0_d.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "left": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0_l_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0_l.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "back": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0_b_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0_b.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "thumbnailUrl": "media/panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0_t.jpg"
                                    }
                                   ],
                                   "pitch": 0
                                  },
                                  "class": "AdjacentPanorama",
                                  "yaw": 105.32,
                                  "distance": 1
                                 },
                                 {
                                  "backwardYaw": 98.75,
                                  "panorama": "this.panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A",
                                  "class": "AdjacentPanorama",
                                  "yaw": -94.26,
                                  "distance": 1
                                 }
                                ],
                                "label": "R0010055_20200915193706-01",
                                "partial": false,
                                "thumbnailUrl": "media/panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB_t.jpg",
                                "vfov": 180,
                                "id": "panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB",
                                "class": "Panorama",
                                "hfov": 360,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_A9D391D5_B872_FD52_41E4_A887BF6B9EB4",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB_0_HS_2_0_0_map.gif",
                                         "height": 57,
                                         "class": "ImageResourceLevel",
                                         "width": 58
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -15.16,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 105.32,
                                      "hfov": 7.5
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB_0_HS_2_0.png",
                                         "height": 115,
                                         "class": "ImageResourceLevel",
                                         "width": 116
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 7.5,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -15.16,
                                      "yaw": 105.32
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0, this.camera_F426EEF2_FB98_6246_41E1_67D0A4356733); this.mainPlayList.set('selectedIndex', 14)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_A98B3079_B872_7B55_41D7_05493111B240",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB_0_HS_1_0_0_map.gif",
                                         "height": 57,
                                         "class": "ImageResourceLevel",
                                         "width": 58
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -17.68,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 28.26,
                                      "hfov": 7.4
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB_0_HS_1_0.png",
                                         "height": 115,
                                         "class": "ImageResourceLevel",
                                         "width": 116
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 7.4,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -17.68,
                                      "yaw": 28.26
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556, this.camera_F4232EE6_FB98_627A_41D3_4E162D306C8A); this.mainPlayList.set('selectedIndex', 15)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_AA580255_B873_FF52_41E3_D9BC933C0741",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB_0_HS_0_0_0_map.gif",
                                         "height": 57,
                                         "class": "ImageResourceLevel",
                                         "width": 58
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -14.15,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -94.26,
                                      "hfov": 7.53
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB_0_HS_0_0.png",
                                         "height": 115,
                                         "class": "ImageResourceLevel",
                                         "width": 116
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 7.53,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -14.15,
                                      "yaw": -94.26
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A, this.camera_F43A9F13_FB98_63D8_41B1_1CBF916703F0); this.mainPlayList.set('selectedIndex', 11)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ]
                                   },
                                   {
                                    "image": {
                                     "levels": [
                                      {
                                       "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_tcap0.png",
                                       "height": 1348,
                                       "class": "ImageResourceLevel",
                                       "width": 1348
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "id": "panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB_tcap0",
                                    "class": "TripodCapPanoramaOverlay",
                                    "hfov": 45,
                                    "angle": 0,
                                    "inertia": false,
                                    "rotate": false
                                   }
                                  ],
                                  "right": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB_r_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB_r.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "front": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB_f_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB_f.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "class": "CubicPanoramaFrame",
                                  "top": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB_u_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB_u.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "bottom": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB_d_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB_d.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "left": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB_l_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB_l.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "back": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB_b_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB_b.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "thumbnailUrl": "media/panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB_t.jpg"
                                 }
                                ],
                                "pitch": 0
                               },
                               "class": "AdjacentPanorama",
                               "yaw": 98.75,
                               "distance": 1
                              },
                              {
                               "backwardYaw": 149.02,
                               "panorama": "this.panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E",
                               "class": "AdjacentPanorama",
                               "yaw": -124.33,
                               "distance": 1
                              },
                              {
                               "backwardYaw": -128.62,
                               "panorama": {
                                "hfovMin": 60,
                                "hfovMax": 120,
                                "adjacentPanoramas": [
                                 {
                                  "backwardYaw": -160.2,
                                  "panorama": "this.panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A",
                                  "class": "AdjacentPanorama",
                                  "yaw": -128.62,
                                  "distance": 1
                                 }
                                ],
                                "label": "R0010054_20200915193548-01",
                                "partial": false,
                                "thumbnailUrl": "media/panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50_t.jpg",
                                "vfov": 180,
                                "id": "panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50",
                                "class": "Panorama",
                                "hfov": 360,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_A9E15F2D_B872_46F2_41D5_92D68D84B4E5",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50_0_HS_0_0_0_map.gif",
                                         "height": 57,
                                         "class": "ImageResourceLevel",
                                         "width": 58
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -10.61,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -128.62,
                                      "hfov": 7.64
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50_0_HS_0_0.png",
                                         "height": 115,
                                         "class": "ImageResourceLevel",
                                         "width": 116
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 7.64,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -10.61,
                                      "yaw": -128.62
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A, this.camera_F48791D2_FB98_7E5B_41CF_BCB35C880F5F); this.mainPlayList.set('selectedIndex', 11)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ]
                                   },
                                   {
                                    "image": {
                                     "levels": [
                                      {
                                       "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_tcap0.png",
                                       "height": 1348,
                                       "class": "ImageResourceLevel",
                                       "width": 1348
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "id": "panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50_tcap0",
                                    "class": "TripodCapPanoramaOverlay",
                                    "hfov": 45,
                                    "angle": 0,
                                    "inertia": false,
                                    "rotate": false
                                   }
                                  ],
                                  "right": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50_r_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50_r.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "front": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50_f_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50_f.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "class": "CubicPanoramaFrame",
                                  "top": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50_u_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50_u.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "bottom": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50_d_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50_d.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "left": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50_l_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50_l.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "back": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50_b_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50_b.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "thumbnailUrl": "media/panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50_t.jpg"
                                 }
                                ],
                                "pitch": 0
                               },
                               "class": "AdjacentPanorama",
                               "yaw": -160.2,
                               "distance": 1
                              },
                              {
                               "backwardYaw": 169.99,
                               "panorama": {
                                "hfovMin": 60,
                                "hfovMax": 120,
                                "adjacentPanoramas": [
                                 {
                                  "backwardYaw": 61.1,
                                  "panorama": "this.panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A",
                                  "class": "AdjacentPanorama",
                                  "yaw": 169.99,
                                  "distance": 1
                                 }
                                ],
                                "label": "R0010059_20200915194106-01",
                                "partial": false,
                                "thumbnailUrl": "media/panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1_t.jpg",
                                "vfov": 180,
                                "id": "panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1",
                                "class": "Panorama",
                                "hfov": 360,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_AA116C98_B87E_4BD2_41E1_FC6815A27212",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1_0_HS_1_0_0_map.gif",
                                         "height": 57,
                                         "class": "ImageResourceLevel",
                                         "width": 58
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -3.53,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 169.99,
                                      "hfov": 7.75
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1_0_HS_1_0.png",
                                         "height": 115,
                                         "class": "ImageResourceLevel",
                                         "width": 116
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 7.75,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -3.53,
                                      "yaw": 169.99
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A, this.camera_F57A0172_FB98_7E5B_41DF_2579FEF9C54B); this.mainPlayList.set('selectedIndex', 11)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_AAC1ABE4_B87E_CD73_41D2_B74475A079FC",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1_0_HS_0_0_0_map.gif",
                                         "height": 57,
                                         "class": "ImageResourceLevel",
                                         "width": 58
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -50.27,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 129.06,
                                      "hfov": 4.96
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1_0_HS_0_0.png",
                                         "height": 115,
                                         "class": "ImageResourceLevel",
                                         "width": 116
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 4.96,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -50.27,
                                      "yaw": 129.06
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.mainPlayList.set('selectedIndex', 18)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ]
                                   },
                                   {
                                    "image": {
                                     "levels": [
                                      {
                                       "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_tcap0.png",
                                       "height": 1348,
                                       "class": "ImageResourceLevel",
                                       "width": 1348
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "id": "panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1_tcap0",
                                    "class": "TripodCapPanoramaOverlay",
                                    "hfov": 45,
                                    "angle": 0,
                                    "inertia": false,
                                    "rotate": false
                                   }
                                  ],
                                  "right": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1_r_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1_r.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "front": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1_f_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1_f.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "class": "CubicPanoramaFrame",
                                  "top": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1_u_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1_u.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "bottom": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1_d_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1_d.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "left": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1_l_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1_l.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "back": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1_b_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1_b.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "thumbnailUrl": "media/panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1_t.jpg"
                                 }
                                ],
                                "pitch": 0
                               },
                               "class": "AdjacentPanorama",
                               "yaw": 61.1,
                               "distance": 1
                              }
                             ],
                             "label": "R0010053_20200915193508-01",
                             "partial": false,
                             "thumbnailUrl": "media/panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_t.jpg",
                             "vfov": 180,
                             "id": "panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A",
                             "class": "Panorama",
                             "hfov": 360,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_A8ADBD65_B875_C572_41B0_5F11CE86708C",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_0_HS_4_0_0_map.gif",
                                      "height": 57,
                                      "class": "ImageResourceLevel",
                                      "width": 58
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -17.18,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -160.2,
                                   "hfov": 7.42
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_0_HS_4_0.png",
                                      "height": 115,
                                      "class": "ImageResourceLevel",
                                      "width": 116
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.42,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -17.18,
                                   "yaw": -160.2
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50, this.camera_F48E41BA_FB98_7ECB_41D2_0A1035435ADA); this.mainPlayList.set('selectedIndex', 12)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_A9154E0D_B876_C6B2_41D6_617266211C50",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_0_HS_3_0_0_map.gif",
                                      "height": 57,
                                      "class": "ImageResourceLevel",
                                      "width": 58
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -12.12,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 98.75,
                                   "hfov": 7.59
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_0_HS_3_0.png",
                                      "height": 115,
                                      "class": "ImageResourceLevel",
                                      "width": 116
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.59,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -12.12,
                                   "yaw": 98.75
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB, this.camera_F574B1A2_FB98_7EFB_41E5_749CE51101B2); this.mainPlayList.set('selectedIndex', 13)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_A90FBEC3_B876_47B6_41B1_E9204A938628",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_0_HS_2_0_0_map.gif",
                                      "height": 57,
                                      "class": "ImageResourceLevel",
                                      "width": 58
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -13.89,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 49.74,
                                   "hfov": 7.54
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_0_HS_2_0.png",
                                      "height": 115,
                                      "class": "ImageResourceLevel",
                                      "width": 116
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.54,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -13.89,
                                   "yaw": 49.74
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80, this.camera_F5701196_FB98_7EDB_41E6_77E5A7309E57); this.mainPlayList.set('selectedIndex', 16)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_A9D5A35E_B876_FD4E_41E6_B54F4E613EF7",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_0_HS_1_0_0_map.gif",
                                      "height": 57,
                                      "class": "ImageResourceLevel",
                                      "width": 58
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -9.6,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 61.1,
                                   "hfov": 7.66
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_0_HS_1_0.png",
                                      "height": 115,
                                      "class": "ImageResourceLevel",
                                      "width": 116
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.66,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -9.6,
                                   "yaw": 61.1
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1, this.camera_F482D1C6_FB98_7EBB_41D1_31F021229850); this.mainPlayList.set('selectedIndex', 17)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_A930B63C_B875_C6D3_41CD_002558107CFB",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_0_HS_0_0_0_map.gif",
                                      "height": 57,
                                      "class": "ImageResourceLevel",
                                      "width": 58
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -5.3,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -124.33,
                                   "hfov": 7.73
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_0_HS_0_0.png",
                                      "height": 115,
                                      "class": "ImageResourceLevel",
                                      "width": 116
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.73,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -5.3,
                                   "yaw": -124.33
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E, this.camera_F48941AE_FB98_7ECB_41E5_86651BE1DFC4); this.mainPlayList.set('selectedIndex', 10)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ]
                                },
                                {
                                 "image": {
                                  "levels": [
                                   {
                                    "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_tcap0.png",
                                    "height": 1348,
                                    "class": "ImageResourceLevel",
                                    "width": 1348
                                   }
                                  ],
                                  "class": "ImageResource"
                                 },
                                 "id": "panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_tcap0",
                                 "class": "TripodCapPanoramaOverlay",
                                 "hfov": 45,
                                 "angle": 0,
                                 "inertia": false,
                                 "rotate": false
                                }
                               ],
                               "right": {
                                "levels": [
                                 {
                                  "url": "media/panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_r_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_r.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "front": {
                                "levels": [
                                 {
                                  "url": "media/panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_f_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_f.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "class": "CubicPanoramaFrame",
                               "top": {
                                "levels": [
                                 {
                                  "url": "media/panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_u_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_u.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "bottom": {
                                "levels": [
                                 {
                                  "url": "media/panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_d_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_d.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "left": {
                                "levels": [
                                 {
                                  "url": "media/panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_l_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_l.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "back": {
                                "levels": [
                                 {
                                  "url": "media/panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_b_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_b.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "thumbnailUrl": "media/panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_t.jpg"
                              }
                             ],
                             "pitch": 0
                            },
                            "class": "AdjacentPanorama",
                            "yaw": 149.02,
                            "distance": 1
                           },
                           {
                            "backwardYaw": -129.13,
                            "panorama": "this.panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB",
                            "class": "AdjacentPanorama",
                            "yaw": 69.19,
                            "distance": 1
                           }
                          ],
                          "label": "R0010052_20200915193002-01",
                          "partial": false,
                          "thumbnailUrl": "media/panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E_t.jpg",
                          "vfov": 180,
                          "id": "panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E",
                          "class": "Panorama",
                          "hfov": 360,
                          "frames": [
                           {
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "id": "overlay_B788AC5D_B873_CB4D_41C9_7487D1C7D026",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E_0_HS_1_0_0_map.gif",
                                   "height": 57,
                                   "class": "ImageResourceLevel",
                                   "width": 58
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -53.81,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 69.19,
                                "hfov": 4.59
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E_0_HS_1_0.png",
                                   "height": 115,
                                   "class": "ImageResourceLevel",
                                   "width": 116
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 4.59,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -53.81,
                                "yaw": 69.19
                               }
                              ],
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB, this.camera_F45B5FBE_FB98_62CB_41DA_C1E0D1532D28); this.mainPlayList.set('selectedIndex', 1)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "id": "overlay_A8562FA1_B872_45F5_41D2_A371933C99BA",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E_0_HS_0_0_0_map.gif",
                                   "height": 57,
                                   "class": "ImageResourceLevel",
                                   "width": 58
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": 7.33,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 149.02,
                                "hfov": 7.7
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E_0_HS_0_0.png",
                                   "height": 115,
                                   "class": "ImageResourceLevel",
                                   "width": 116
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 7.7,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": 7.33,
                                "yaw": 149.02
                               }
                              ],
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A, this.camera_F4403FA7_FB98_62F9_41E1_A1B5466125E0); this.mainPlayList.set('selectedIndex', 11)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ]
                             },
                             {
                              "image": {
                               "levels": [
                                {
                                 "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_tcap0.png",
                                 "height": 1348,
                                 "class": "ImageResourceLevel",
                                 "width": 1348
                                }
                               ],
                               "class": "ImageResource"
                              },
                              "id": "panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E_tcap0",
                              "class": "TripodCapPanoramaOverlay",
                              "hfov": 45,
                              "angle": 0,
                              "inertia": false,
                              "rotate": false
                             }
                            ],
                            "right": {
                             "levels": [
                              {
                               "url": "media/panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E_r_hq.jpeg",
                               "height": 1704,
                               "class": "ImageResourceLevel",
                               "width": 1704
                              },
                              {
                               "url": "media/panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E_r.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "front": {
                             "levels": [
                              {
                               "url": "media/panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E_f_hq.jpeg",
                               "height": 1704,
                               "class": "ImageResourceLevel",
                               "width": 1704
                              },
                              {
                               "url": "media/panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E_f.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "class": "CubicPanoramaFrame",
                            "top": {
                             "levels": [
                              {
                               "url": "media/panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E_u_hq.jpeg",
                               "height": 1704,
                               "class": "ImageResourceLevel",
                               "width": 1704
                              },
                              {
                               "url": "media/panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E_u.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "bottom": {
                             "levels": [
                              {
                               "url": "media/panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E_d_hq.jpeg",
                               "height": 1704,
                               "class": "ImageResourceLevel",
                               "width": 1704
                              },
                              {
                               "url": "media/panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E_d.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "left": {
                             "levels": [
                              {
                               "url": "media/panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E_l_hq.jpeg",
                               "height": 1704,
                               "class": "ImageResourceLevel",
                               "width": 1704
                              },
                              {
                               "url": "media/panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E_l.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "back": {
                             "levels": [
                              {
                               "url": "media/panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E_b_hq.jpeg",
                               "height": 1704,
                               "class": "ImageResourceLevel",
                               "width": 1704
                              },
                              {
                               "url": "media/panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E_b.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "thumbnailUrl": "media/panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E_t.jpg"
                           }
                          ],
                          "pitch": 0
                         },
                         "class": "AdjacentPanorama",
                         "yaw": -129.13,
                         "distance": 1
                        }
                       ],
                       "label": "R0010028_20200817192232-01",
                       "partial": false,
                       "thumbnailUrl": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_t.jpg",
                       "vfov": 180,
                       "id": "panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB",
                       "class": "Panorama",
                       "hfov": 360,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "id": "overlay_B578D174_B853_DD52_41E5_82F0F1288305",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_0_HS_3_0_0_map.gif",
                                "height": 57,
                                "class": "ImageResourceLevel",
                                "width": 58
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -15.41,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 86.12,
                             "hfov": 7.49
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_0_HS_3_0.png",
                                "height": 115,
                                "class": "ImageResourceLevel",
                                "width": 116
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 7.49,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -15.41,
                             "yaw": 86.12
                            }
                           ],
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_BF499049_B41A_43F9_41C8_D167F91ACF93, this.camera_F46EB01F_FB98_7DC9_41E3_5FA369D84438); this.mainPlayList.set('selectedIndex', 8)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_B5E3D5AF_B852_45CD_41E2_D56D0C75C28D",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_0_HS_2_0_0_map.gif",
                                "height": 57,
                                "class": "ImageResourceLevel",
                                "width": 58
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -7.83,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 136.64,
                             "hfov": 7.7
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_0_HS_2_0.png",
                                "height": 115,
                                "class": "ImageResourceLevel",
                                "width": 116
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 7.7,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -7.83,
                             "yaw": 136.64
                            }
                           ],
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54, this.camera_F4620037_FB98_7DD9_41D9_EBD8992846D8); this.mainPlayList.set('selectedIndex', 2)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_B59B52F0_B85E_7F53_41E3_5EA98E8B2335",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_0_HS_1_0_0_map.gif",
                                "height": 57,
                                "class": "ImageResourceLevel",
                                "width": 58
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": 3.29,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -129.13,
                             "hfov": 7.76
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_0_HS_1_0.png",
                                "height": 115,
                                "class": "ImageResourceLevel",
                                "width": 116
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 7.76,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": 3.29,
                             "yaw": -129.13
                            }
                           ],
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E, this.camera_F464D048_FB98_7DB7_41E4_DB236B50BCB0); this.mainPlayList.set('selectedIndex', 10)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_AC690CE4_B875_CB72_41E6_C91C550807A4",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_0_HS_0_0_0_map.gif",
                                "height": 57,
                                "class": "ImageResourceLevel",
                                "width": 58
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -10.36,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -162.73,
                             "hfov": 7.64
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_0_HS_0_0.png",
                                "height": 115,
                                "class": "ImageResourceLevel",
                                "width": 116
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 7.64,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -10.36,
                             "yaw": -162.73
                            }
                           ],
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA, this.camera_F4541008_FB98_7DB7_41CC_CC8422BD8D5F); this.mainPlayList.set('selectedIndex', 24)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ]
                          },
                          {
                           "image": {
                            "levels": [
                             {
                              "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_tcap0.png",
                              "height": 1348,
                              "class": "ImageResourceLevel",
                              "width": 1348
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "id": "panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_tcap0",
                           "class": "TripodCapPanoramaOverlay",
                           "hfov": 45,
                           "angle": 0,
                           "inertia": false,
                           "rotate": false
                          }
                         ],
                         "right": {
                          "levels": [
                           {
                            "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_r_hq.jpeg",
                            "height": 1704,
                            "class": "ImageResourceLevel",
                            "width": 1704
                           },
                           {
                            "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_r.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "front": {
                          "levels": [
                           {
                            "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_f_hq.jpeg",
                            "height": 1704,
                            "class": "ImageResourceLevel",
                            "width": 1704
                           },
                           {
                            "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_f.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "CubicPanoramaFrame",
                         "top": {
                          "levels": [
                           {
                            "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_u_hq.jpeg",
                            "height": 1704,
                            "class": "ImageResourceLevel",
                            "width": 1704
                           },
                           {
                            "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_u.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "bottom": {
                          "levels": [
                           {
                            "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_d_hq.jpeg",
                            "height": 1704,
                            "class": "ImageResourceLevel",
                            "width": 1704
                           },
                           {
                            "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_d.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "left": {
                          "levels": [
                           {
                            "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_l_hq.jpeg",
                            "height": 1704,
                            "class": "ImageResourceLevel",
                            "width": 1704
                           },
                           {
                            "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_l.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "back": {
                          "levels": [
                           {
                            "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_b_hq.jpeg",
                            "height": 1704,
                            "class": "ImageResourceLevel",
                            "width": 1704
                           },
                           {
                            "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_b.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_t.jpg"
                        }
                       ],
                       "pitch": 0
                      },
                      "class": "AdjacentPanorama",
                      "yaw": -75.82,
                      "distance": 1
                     },
                     {
                      "backwardYaw": 19.42,
                      "panorama": {
                       "hfovMin": 60,
                       "hfovMax": 120,
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": 100.77,
                         "panorama": "this.panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54",
                         "class": "AdjacentPanorama",
                         "yaw": 19.42,
                         "distance": 1
                        }
                       ],
                       "label": "R0010042_20200817193208-01",
                       "partial": false,
                       "thumbnailUrl": "media/panorama_BF49A88D_B41A_437E_41D0_382B5D921D47_t.jpg",
                       "vfov": 180,
                       "id": "panorama_BF49A88D_B41A_437E_41D0_382B5D921D47",
                       "class": "Panorama",
                       "hfov": 360,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "id": "overlay_B712AF3E_B86E_46CE_41CF_9591E7603912",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_BF49A88D_B41A_437E_41D0_382B5D921D47_0_HS_0_0_0_map.gif",
                                "height": 57,
                                "class": "ImageResourceLevel",
                                "width": 58
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -10.1,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 19.42,
                             "hfov": 7.65
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_BF49A88D_B41A_437E_41D0_382B5D921D47_0_HS_0_0.png",
                                "height": 115,
                                "class": "ImageResourceLevel",
                                "width": 116
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 7.65,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -10.1,
                             "yaw": 19.42
                            }
                           ],
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54, this.camera_F49BF1DE_FB98_7E4B_41E9_E24B6C7E5778); this.mainPlayList.set('selectedIndex', 2)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ]
                          },
                          {
                           "image": {
                            "levels": [
                             {
                              "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_tcap0.png",
                              "height": 1348,
                              "class": "ImageResourceLevel",
                              "width": 1348
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "id": "panorama_BF49A88D_B41A_437E_41D0_382B5D921D47_tcap0",
                           "class": "TripodCapPanoramaOverlay",
                           "hfov": 45,
                           "angle": 0,
                           "inertia": false,
                           "rotate": false
                          }
                         ],
                         "right": {
                          "levels": [
                           {
                            "url": "media/panorama_BF49A88D_B41A_437E_41D0_382B5D921D47_r_hq.jpeg",
                            "height": 1704,
                            "class": "ImageResourceLevel",
                            "width": 1704
                           },
                           {
                            "url": "media/panorama_BF49A88D_B41A_437E_41D0_382B5D921D47_r.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "front": {
                          "levels": [
                           {
                            "url": "media/panorama_BF49A88D_B41A_437E_41D0_382B5D921D47_f_hq.jpeg",
                            "height": 1704,
                            "class": "ImageResourceLevel",
                            "width": 1704
                           },
                           {
                            "url": "media/panorama_BF49A88D_B41A_437E_41D0_382B5D921D47_f.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "CubicPanoramaFrame",
                         "top": {
                          "levels": [
                           {
                            "url": "media/panorama_BF49A88D_B41A_437E_41D0_382B5D921D47_u_hq.jpeg",
                            "height": 1704,
                            "class": "ImageResourceLevel",
                            "width": 1704
                           },
                           {
                            "url": "media/panorama_BF49A88D_B41A_437E_41D0_382B5D921D47_u.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "bottom": {
                          "levels": [
                           {
                            "url": "media/panorama_BF49A88D_B41A_437E_41D0_382B5D921D47_d_hq.jpeg",
                            "height": 1704,
                            "class": "ImageResourceLevel",
                            "width": 1704
                           },
                           {
                            "url": "media/panorama_BF49A88D_B41A_437E_41D0_382B5D921D47_d.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "left": {
                          "levels": [
                           {
                            "url": "media/panorama_BF49A88D_B41A_437E_41D0_382B5D921D47_l_hq.jpeg",
                            "height": 1704,
                            "class": "ImageResourceLevel",
                            "width": 1704
                           },
                           {
                            "url": "media/panorama_BF49A88D_B41A_437E_41D0_382B5D921D47_l.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "back": {
                          "levels": [
                           {
                            "url": "media/panorama_BF49A88D_B41A_437E_41D0_382B5D921D47_b_hq.jpeg",
                            "height": 1704,
                            "class": "ImageResourceLevel",
                            "width": 1704
                           },
                           {
                            "url": "media/panorama_BF49A88D_B41A_437E_41D0_382B5D921D47_b.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_BF49A88D_B41A_437E_41D0_382B5D921D47_t.jpg"
                        }
                       ],
                       "pitch": 0
                      },
                      "class": "AdjacentPanorama",
                      "yaw": 100.77,
                      "distance": 1
                     },
                     {
                      "backwardYaw": -17.72,
                      "panorama": "this.panorama_BF49991E_B41A_459B_41DB_AFF106155788",
                      "class": "AdjacentPanorama",
                      "yaw": 89.65,
                      "distance": 1
                     },
                     {
                      "backwardYaw": 148.01,
                      "panorama": "this.panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205",
                      "class": "AdjacentPanorama",
                      "yaw": 73.99,
                      "distance": 1
                     },
                     {
                      "backwardYaw": 126.54,
                      "panorama": "this.panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E",
                      "class": "AdjacentPanorama",
                      "yaw": 161.9,
                      "distance": 1
                     }
                    ],
                    "label": "R0010031_20200817192424-01",
                    "partial": false,
                    "thumbnailUrl": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_t.jpg",
                    "vfov": 180,
                    "id": "panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54",
                    "class": "Panorama",
                    "hfov": 360,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "id": "overlay_B58AE3BE_B85E_5DCF_41E1_CFB04FCA9290",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_0_HS_5_0_0_map.gif",
                             "height": 57,
                             "class": "ImageResourceLevel",
                             "width": 58
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -7.32,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -75.82,
                          "hfov": 7.7
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_0_HS_5_0.png",
                             "height": 115,
                             "class": "ImageResourceLevel",
                             "width": 116
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 7.7,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -7.32,
                          "yaw": -75.82
                         }
                        ],
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB, this.camera_F569F137_FB98_7FD9_41B7_A482F2CD8623); this.mainPlayList.set('selectedIndex', 1)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "id": "overlay_B5B2B4D9_B85D_FB52_41E5_A6A6CEE1C995",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_0_HS_4_0_0_map.gif",
                             "height": 57,
                             "class": "ImageResourceLevel",
                             "width": 58
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -11.87,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 73.99,
                          "hfov": 7.6
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_0_HS_4_0.png",
                             "height": 115,
                             "class": "ImageResourceLevel",
                             "width": 116
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 7.6,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -11.87,
                          "yaw": 73.99
                         }
                        ],
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205, this.camera_F560315A_FB98_7E4B_41E7_BF08009E3DEB); this.mainPlayList.set('selectedIndex', 9)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "id": "overlay_B67B3E1E_B852_C6CE_41E3_657CED3BBB5F",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_0_HS_3_0_0_map.gif",
                             "height": 57,
                             "class": "ImageResourceLevel",
                             "width": 58
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -6.82,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 89.65,
                          "hfov": 7.71
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_0_HS_3_0.png",
                             "height": 115,
                             "class": "ImageResourceLevel",
                             "width": 116
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 7.71,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -6.82,
                          "yaw": 89.65
                         }
                        ],
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_BF49991E_B41A_459B_41DB_AFF106155788, this.camera_F563A14E_FB98_7E4B_41D2_330B5A8225AC); this.mainPlayList.set('selectedIndex', 6)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "id": "overlay_B6280FC6_B852_45BE_41E2_16BE9B8B7199",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_0_HS_2_0_0_map.gif",
                             "height": 57,
                             "class": "ImageResourceLevel",
                             "width": 58
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -3.53,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 100.77,
                          "hfov": 7.75
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_0_HS_2_0.png",
                             "height": 115,
                             "class": "ImageResourceLevel",
                             "width": 116
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 7.75,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -3.53,
                          "yaw": 100.77
                         }
                        ],
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_BF49A88D_B41A_437E_41D0_382B5D921D47, this.camera_F56F2142_FB98_7FBB_41BF_F0BCB03CA667); this.mainPlayList.set('selectedIndex', 7)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "id": "overlay_B63B69CE_B852_4D4E_41DD_FB4CF63226A5",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_0_HS_1_0_0_map.gif",
                             "height": 57,
                             "class": "ImageResourceLevel",
                             "width": 58
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -8.59,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 161.9,
                          "hfov": 7.68
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_0_HS_1_0.png",
                             "height": 115,
                             "class": "ImageResourceLevel",
                             "width": 116
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 7.68,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -8.59,
                          "yaw": 161.9
                         }
                        ],
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E, this.camera_F5654166_FB98_7E7B_41EC_49A39F8FDD91); this.mainPlayList.set('selectedIndex', 3)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "id": "overlay_B6EB005D_B856_3B4D_41E6_4B7FF4A01407",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_0_HS_0_0_0_map.gif",
                             "height": 57,
                             "class": "ImageResourceLevel",
                             "width": 58
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": 8.84,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 119.97,
                          "hfov": 7.68
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_0_HS_0_0.png",
                             "height": 115,
                             "class": "ImageResourceLevel",
                             "width": 116
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 7.68,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": 8.84,
                          "yaw": 119.97
                         }
                        ],
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.mainPlayList.set('selectedIndex', 11)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ]
                       },
                       {
                        "image": {
                         "levels": [
                          {
                           "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_tcap0.png",
                           "height": 1348,
                           "class": "ImageResourceLevel",
                           "width": 1348
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "id": "panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_tcap0",
                        "class": "TripodCapPanoramaOverlay",
                        "hfov": 45,
                        "angle": 0,
                        "inertia": false,
                        "rotate": false
                       }
                      ],
                      "right": {
                       "levels": [
                        {
                         "url": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_r_hq.jpeg",
                         "height": 1704,
                         "class": "ImageResourceLevel",
                         "width": 1704
                        },
                        {
                         "url": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_r.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "front": {
                       "levels": [
                        {
                         "url": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_f_hq.jpeg",
                         "height": 1704,
                         "class": "ImageResourceLevel",
                         "width": 1704
                        },
                        {
                         "url": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_f.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "CubicPanoramaFrame",
                      "top": {
                       "levels": [
                        {
                         "url": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_u_hq.jpeg",
                         "height": 1704,
                         "class": "ImageResourceLevel",
                         "width": 1704
                        },
                        {
                         "url": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_u.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "bottom": {
                       "levels": [
                        {
                         "url": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_d_hq.jpeg",
                         "height": 1704,
                         "class": "ImageResourceLevel",
                         "width": 1704
                        },
                        {
                         "url": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_d.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "left": {
                       "levels": [
                        {
                         "url": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_l_hq.jpeg",
                         "height": 1704,
                         "class": "ImageResourceLevel",
                         "width": 1704
                        },
                        {
                         "url": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_l.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "back": {
                       "levels": [
                        {
                         "url": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_b_hq.jpeg",
                         "height": 1704,
                         "class": "ImageResourceLevel",
                         "width": 1704
                        },
                        {
                         "url": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_b.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_t.jpg"
                     }
                    ],
                    "pitch": 0
                   },
                   "class": "AdjacentPanorama",
                   "yaw": 126.54,
                   "distance": 1
                  },
                  {
                   "backwardYaw": -29.59,
                   "panorama": "this.panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7",
                   "class": "AdjacentPanorama",
                   "yaw": -98.81,
                   "distance": 1
                  }
                 ],
                 "label": "R0010033_20200817192522-01",
                 "partial": false,
                 "thumbnailUrl": "media/panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E_t.jpg",
                 "vfov": 180,
                 "id": "panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E",
                 "class": "Panorama",
                 "hfov": 360,
                 "frames": [
                  {
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "id": "overlay_B61CBE6E_B852_C74E_41C8_3C5189F4B677",
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E_0_HS_1_0_0_map.gif",
                          "height": 57,
                          "class": "ImageResourceLevel",
                          "width": 58
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -10.1,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 126.54,
                       "hfov": 7.65
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E_0_HS_1_0.png",
                          "height": 115,
                          "class": "ImageResourceLevel",
                          "width": 116
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 7.65,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -10.1,
                       "yaw": 126.54
                      }
                     ],
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54, this.camera_F45DFFDA_FB98_624B_41E4_1E66F21E0015); this.mainPlayList.set('selectedIndex', 2)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_B6C841F5_B852_3D52_41DF_A64B5599F59A",
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E_0_HS_0_0_0_map.gif",
                          "height": 57,
                          "class": "ImageResourceLevel",
                          "width": 58
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -11.62,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -98.81,
                       "hfov": 7.61
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E_0_HS_0_0.png",
                          "height": 115,
                          "class": "ImageResourceLevel",
                          "width": 116
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 7.61,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -11.62,
                       "yaw": -98.81
                      }
                     ],
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7, this.camera_F4510FF1_FB98_6259_41BB_0B4846F64739); this.mainPlayList.set('selectedIndex', 4)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ]
                    },
                    {
                     "image": {
                      "levels": [
                       {
                        "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_tcap0.png",
                        "height": 1348,
                        "class": "ImageResourceLevel",
                        "width": 1348
                       }
                      ],
                      "class": "ImageResource"
                     },
                     "id": "panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E_tcap0",
                     "class": "TripodCapPanoramaOverlay",
                     "hfov": 45,
                     "angle": 0,
                     "inertia": false,
                     "rotate": false
                    }
                   ],
                   "right": {
                    "levels": [
                     {
                      "url": "media/panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E_r_hq.jpeg",
                      "height": 1704,
                      "class": "ImageResourceLevel",
                      "width": 1704
                     },
                     {
                      "url": "media/panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E_r.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "front": {
                    "levels": [
                     {
                      "url": "media/panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E_f_hq.jpeg",
                      "height": 1704,
                      "class": "ImageResourceLevel",
                      "width": 1704
                     },
                     {
                      "url": "media/panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E_f.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "class": "CubicPanoramaFrame",
                   "top": {
                    "levels": [
                     {
                      "url": "media/panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E_u_hq.jpeg",
                      "height": 1704,
                      "class": "ImageResourceLevel",
                      "width": 1704
                     },
                     {
                      "url": "media/panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E_u.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "bottom": {
                    "levels": [
                     {
                      "url": "media/panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E_d_hq.jpeg",
                      "height": 1704,
                      "class": "ImageResourceLevel",
                      "width": 1704
                     },
                     {
                      "url": "media/panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E_d.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "left": {
                    "levels": [
                     {
                      "url": "media/panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E_l_hq.jpeg",
                      "height": 1704,
                      "class": "ImageResourceLevel",
                      "width": 1704
                     },
                     {
                      "url": "media/panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E_l.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "back": {
                    "levels": [
                     {
                      "url": "media/panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E_b_hq.jpeg",
                      "height": 1704,
                      "class": "ImageResourceLevel",
                      "width": 1704
                     },
                     {
                      "url": "media/panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E_b.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E_t.jpg"
                  }
                 ],
                 "pitch": 0
                },
                "class": "AdjacentPanorama",
                "yaw": -29.59,
                "distance": 1
               },
               {
                "backwardYaw": -148.33,
                "panorama": "this.panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844",
                "class": "AdjacentPanorama",
                "yaw": 102.28,
                "distance": 1
               }
              ],
              "label": "R0010036_20200817192654-01",
              "partial": false,
              "thumbnailUrl": "media/panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7_t.jpg",
              "vfov": 180,
              "id": "panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7",
              "class": "Panorama",
              "hfov": 360,
              "frames": [
               {
                "overlays": [
                 {
                  "useHandCursor": true,
                  "id": "overlay_B621EAD6_B856_4F5E_41DB_2D68E0333A43",
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7_0_HS_2_0_0_map.gif",
                       "height": 57,
                       "class": "ImageResourceLevel",
                       "width": 58
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -12.88,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -29.59,
                    "hfov": 7.57
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7_0_HS_2_0.png",
                       "height": 115,
                       "class": "ImageResourceLevel",
                       "width": 116
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 7.57,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -12.88,
                    "yaw": -29.59
                   }
                  ],
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E, this.camera_F4D65284_FB98_62BF_41C8_49E30C304190); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_B680BC2F_B856_4ACE_41CD_4DACD984D456",
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7_0_HS_1_0_0_map.gif",
                       "height": 57,
                       "class": "ImageResourceLevel",
                       "width": 58
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -11.37,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 102.28,
                    "hfov": 7.62
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7_0_HS_1_0.png",
                       "height": 115,
                       "class": "ImageResourceLevel",
                       "width": 116
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 7.62,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -11.37,
                    "yaw": 102.28
                   }
                  ],
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844, this.camera_F4EED290_FB98_62D7_41EC_ACD60C0C9125); this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_B6BD39CE_B852_4D4E_41CB_519C35E0A59C",
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7_0_HS_0_0_0_map.gif",
                       "height": 57,
                       "class": "ImageResourceLevel",
                       "width": 58
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 7.58,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 19.42,
                    "hfov": 7.7
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7_0_HS_0_0.png",
                       "height": 115,
                       "class": "ImageResourceLevel",
                       "width": 116
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 7.7,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": 7.58,
                    "yaw": 19.42
                   }
                  ],
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 11)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ]
                 },
                 {
                  "image": {
                   "levels": [
                    {
                     "url": "media/panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_tcap0.png",
                     "height": 1348,
                     "class": "ImageResourceLevel",
                     "width": 1348
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "id": "panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7_tcap0",
                  "class": "TripodCapPanoramaOverlay",
                  "hfov": 45,
                  "angle": 0,
                  "inertia": false,
                  "rotate": false
                 }
                ],
                "right": {
                 "levels": [
                  {
                   "url": "media/panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7_r_hq.jpeg",
                   "height": 1704,
                   "class": "ImageResourceLevel",
                   "width": 1704
                  },
                  {
                   "url": "media/panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7_r.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "front": {
                 "levels": [
                  {
                   "url": "media/panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7_f_hq.jpeg",
                   "height": 1704,
                   "class": "ImageResourceLevel",
                   "width": 1704
                  },
                  {
                   "url": "media/panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7_f.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "CubicPanoramaFrame",
                "top": {
                 "levels": [
                  {
                   "url": "media/panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7_u_hq.jpeg",
                   "height": 1704,
                   "class": "ImageResourceLevel",
                   "width": 1704
                  },
                  {
                   "url": "media/panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7_u.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "bottom": {
                 "levels": [
                  {
                   "url": "media/panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7_d_hq.jpeg",
                   "height": 1704,
                   "class": "ImageResourceLevel",
                   "width": 1704
                  },
                  {
                   "url": "media/panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7_d.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "left": {
                 "levels": [
                  {
                   "url": "media/panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7_l_hq.jpeg",
                   "height": 1704,
                   "class": "ImageResourceLevel",
                   "width": 1704
                  },
                  {
                   "url": "media/panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "back": {
                 "levels": [
                  {
                   "url": "media/panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7_b_hq.jpeg",
                   "height": 1704,
                   "class": "ImageResourceLevel",
                   "width": 1704
                  },
                  {
                   "url": "media/panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7_b.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7_t.jpg"
               }
              ],
              "pitch": 0
             },
             "class": "AdjacentPanorama",
             "yaw": -148.33,
             "distance": 1
            },
            {
             "backwardYaw": -26.05,
             "panorama": "this.panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB",
             "class": "AdjacentPanorama",
             "yaw": -2.81,
             "distance": 1
            }
           ],
           "label": "R0010037_20200817192720-01",
           "partial": false,
           "thumbnailUrl": "media/panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_t.jpg",
           "vfov": 180,
           "id": "panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844",
           "class": "Panorama",
           "hfov": 360,
           "frames": [
            {
             "overlays": [
              {
               "useHandCursor": true,
               "id": "overlay_B6ADCE3D_B852_C6D2_41D0_61603774F57F",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_0_HS_1_0_0_map.gif",
                    "height": 57,
                    "class": "ImageResourceLevel",
                    "width": 58
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -10.86,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -148.33,
                 "hfov": 7.63
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_0_HS_1_0.png",
                    "height": 115,
                    "class": "ImageResourceLevel",
                    "width": 116
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 7.63,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -10.86,
                 "yaw": -148.33
                }
               ],
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7, this.camera_F4E7029B_FB98_62C9_41E3_3F9189FE5425); this.mainPlayList.set('selectedIndex', 4)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_B7562EFD_B852_474D_41D8_E0F52025652B",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_0_HS_0_0_0_map.gif",
                    "height": 57,
                    "class": "ImageResourceLevel",
                    "width": 58
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -35.87,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -53.08,
                 "hfov": 6.29
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_0_HS_0_0.png",
                    "height": 115,
                    "class": "ImageResourceLevel",
                    "width": 116
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 6.29,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -35.87,
                 "yaw": -53.08
                }
               ],
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.mainPlayList.set('selectedIndex', 18)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ]
              },
              {
               "image": {
                "levels": [
                 {
                  "url": "media/panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_tcap0.png",
                  "height": 1348,
                  "class": "ImageResourceLevel",
                  "width": 1348
                 }
                ],
                "class": "ImageResource"
               },
               "id": "panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_tcap0",
               "class": "TripodCapPanoramaOverlay",
               "hfov": 45,
               "angle": 0,
               "inertia": false,
               "rotate": false
              },
              {
               "useHandCursor": true,
               "id": "overlay_F068B69E_FB79_A2CB_41EF_6E9A9AB971F2",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_0_HS_2_0_0_map.gif",
                    "height": 57,
                    "class": "ImageResourceLevel",
                    "width": 58
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -30.31,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -2.81,
                 "hfov": 6.71
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_0_HS_2_0.png",
                    "height": 115,
                    "class": "ImageResourceLevel",
                    "width": 116
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 6.71,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -30.31,
                 "yaw": -2.81
                }
               ],
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB, this.camera_F4FEF2A6_FB98_62FB_41D3_6F50DFDF2C26); this.mainPlayList.set('selectedIndex', 26)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ]
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_r_hq.jpeg",
                "height": 1704,
                "class": "ImageResourceLevel",
                "width": 1704
               },
               {
                "url": "media/panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_f_hq.jpeg",
                "height": 1704,
                "class": "ImageResourceLevel",
                "width": 1704
               },
               {
                "url": "media/panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "top": {
              "levels": [
               {
                "url": "media/panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_u_hq.jpeg",
                "height": 1704,
                "class": "ImageResourceLevel",
                "width": 1704
               },
               {
                "url": "media/panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_d_hq.jpeg",
                "height": 1704,
                "class": "ImageResourceLevel",
                "width": 1704
               },
               {
                "url": "media/panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_l_hq.jpeg",
                "height": 1704,
                "class": "ImageResourceLevel",
                "width": 1704
               },
               {
                "url": "media/panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "back": {
              "levels": [
               {
                "url": "media/panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_b_hq.jpeg",
                "height": 1704,
                "class": "ImageResourceLevel",
                "width": 1704
               },
               {
                "url": "media/panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_t.jpg"
            }
           ],
           "pitch": 0
          },
          "class": "AdjacentPanorama",
          "yaw": -26.05,
          "distance": 1
         },
         {
          "backwardYaw": -40.71,
          "panorama": {
           "hfovMin": 60,
           "hfovMax": 120,
           "adjacentPanoramas": [
            {
             "backwardYaw": 41.4,
             "panorama": "this.panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB",
             "class": "AdjacentPanorama",
             "yaw": -40.71,
             "distance": 1
            }
           ],
           "label": "R0010073_20200923191056-01",
           "partial": false,
           "thumbnailUrl": "media/panorama_FC97AEF5_FB78_A259_41E7_7FC7CF63065B_t.jpg",
           "vfov": 180,
           "id": "panorama_FC97AEF5_FB78_A259_41E7_7FC7CF63065B",
           "class": "Panorama",
           "hfov": 360,
           "frames": [
            {
             "overlays": [
              {
               "useHandCursor": true,
               "id": "overlay_F03E6CFC_FB78_E64E_41C6_D168658F3F8C",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_FC97AEF5_FB78_A259_41E7_7FC7CF63065B_0_HS_0_0_0_map.gif",
                    "height": 57,
                    "class": "ImageResourceLevel",
                    "width": 58
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -4.04,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -40.71,
                 "hfov": 7.75
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_FC97AEF5_FB78_A259_41E7_7FC7CF63065B_0_HS_0_0.png",
                    "height": 115,
                    "class": "ImageResourceLevel",
                    "width": 116
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 7.75,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -4.04,
                 "yaw": -40.71
                }
               ],
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB, this.camera_F4CB0256_FB98_625B_41D7_6DB751EA230D); this.mainPlayList.set('selectedIndex', 26)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ]
              },
              {
               "image": {
                "levels": [
                 {
                  "url": "media/panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_tcap0.png",
                  "height": 1348,
                  "class": "ImageResourceLevel",
                  "width": 1348
                 }
                ],
                "class": "ImageResource"
               },
               "id": "panorama_FC97AEF5_FB78_A259_41E7_7FC7CF63065B_tcap0",
               "class": "TripodCapPanoramaOverlay",
               "hfov": 45,
               "angle": 0,
               "inertia": false,
               "rotate": false
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_FC97AEF5_FB78_A259_41E7_7FC7CF63065B_r_hq.jpeg",
                "height": 1704,
                "class": "ImageResourceLevel",
                "width": 1704
               },
               {
                "url": "media/panorama_FC97AEF5_FB78_A259_41E7_7FC7CF63065B_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_FC97AEF5_FB78_A259_41E7_7FC7CF63065B_f_hq.jpeg",
                "height": 1704,
                "class": "ImageResourceLevel",
                "width": 1704
               },
               {
                "url": "media/panorama_FC97AEF5_FB78_A259_41E7_7FC7CF63065B_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "top": {
              "levels": [
               {
                "url": "media/panorama_FC97AEF5_FB78_A259_41E7_7FC7CF63065B_u_hq.jpeg",
                "height": 1704,
                "class": "ImageResourceLevel",
                "width": 1704
               },
               {
                "url": "media/panorama_FC97AEF5_FB78_A259_41E7_7FC7CF63065B_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_FC97AEF5_FB78_A259_41E7_7FC7CF63065B_d_hq.jpeg",
                "height": 1704,
                "class": "ImageResourceLevel",
                "width": 1704
               },
               {
                "url": "media/panorama_FC97AEF5_FB78_A259_41E7_7FC7CF63065B_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_FC97AEF5_FB78_A259_41E7_7FC7CF63065B_l_hq.jpeg",
                "height": 1704,
                "class": "ImageResourceLevel",
                "width": 1704
               },
               {
                "url": "media/panorama_FC97AEF5_FB78_A259_41E7_7FC7CF63065B_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "back": {
              "levels": [
               {
                "url": "media/panorama_FC97AEF5_FB78_A259_41E7_7FC7CF63065B_b_hq.jpeg",
                "height": 1704,
                "class": "ImageResourceLevel",
                "width": 1704
               },
               {
                "url": "media/panorama_FC97AEF5_FB78_A259_41E7_7FC7CF63065B_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_FC97AEF5_FB78_A259_41E7_7FC7CF63065B_t.jpg"
            }
           ],
           "pitch": 0
          },
          "class": "AdjacentPanorama",
          "yaw": 41.4,
          "distance": 1
         }
        ],
        "label": "R0010072_20200923191000-01",
        "partial": false,
        "thumbnailUrl": "media/panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB_t.jpg",
        "vfov": 180,
        "id": "panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB",
        "class": "Panorama",
        "hfov": 360,
        "frames": [
         {
          "overlays": [
           {
            "useHandCursor": true,
            "id": "overlay_F103DA00_FB78_ADB6_41E4_6C2BF20BB837",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB_0_HS_2_0_0_map.gif",
                 "height": 57,
                 "class": "ImageResourceLevel",
                 "width": 58
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -4.55,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -54.35,
              "hfov": 7.74
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB_0_HS_2_0.png",
                 "height": 115,
                 "class": "ImageResourceLevel",
                 "width": 116
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 7.74,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -4.55,
              "yaw": -54.35
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_FC96EF69_FB78_6249_41E0_1DAB35716727, this.camera_F43E5F2A_FB98_63CB_41CB_AB0BB0DC52B0); this.mainPlayList.set('selectedIndex', 25)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_F19F4DE8_FB7B_E677_41E6_4EFC63F1EC1A",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB_0_HS_1_0_0_map.gif",
                 "height": 57,
                 "class": "ImageResourceLevel",
                 "width": 58
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -1.01,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -26.05,
              "hfov": 7.77
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB_0_HS_1_0.png",
                 "height": 115,
                 "class": "ImageResourceLevel",
                 "width": 116
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 7.77,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -1.01,
              "yaw": -26.05
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844, this.camera_F4325F46_FB98_63BB_41E7_93CE7BA854C1); this.mainPlayList.set('selectedIndex', 5)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_F0528E4E_FB78_A24A_41E4_579293646877",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB_0_HS_0_0_0_map.gif",
                 "height": 57,
                 "class": "ImageResourceLevel",
                 "width": 58
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -4.55,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 41.4,
              "hfov": 7.74
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB_0_HS_0_0.png",
                 "height": 115,
                 "class": "ImageResourceLevel",
                 "width": 116
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 7.74,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -4.55,
              "yaw": 41.4
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_FC97AEF5_FB78_A259_41E7_7FC7CF63065B, this.camera_F435DF5D_FB98_6249_41DB_017AA3FF5366); this.mainPlayList.set('selectedIndex', 27)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ]
           },
           {
            "image": {
             "levels": [
              {
               "url": "media/panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_tcap0.png",
               "height": 1348,
               "class": "ImageResourceLevel",
               "width": 1348
              }
             ],
             "class": "ImageResource"
            },
            "id": "panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB_tcap0",
            "class": "TripodCapPanoramaOverlay",
            "hfov": 45,
            "angle": 0,
            "inertia": false,
            "rotate": false
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB_r_hq.jpeg",
             "height": 1704,
             "class": "ImageResourceLevel",
             "width": 1704
            },
            {
             "url": "media/panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB_f_hq.jpeg",
             "height": 1704,
             "class": "ImageResourceLevel",
             "width": 1704
            },
            {
             "url": "media/panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "top": {
           "levels": [
            {
             "url": "media/panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB_u_hq.jpeg",
             "height": 1704,
             "class": "ImageResourceLevel",
             "width": 1704
            },
            {
             "url": "media/panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB_d_hq.jpeg",
             "height": 1704,
             "class": "ImageResourceLevel",
             "width": 1704
            },
            {
             "url": "media/panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB_l_hq.jpeg",
             "height": 1704,
             "class": "ImageResourceLevel",
             "width": 1704
            },
            {
             "url": "media/panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "back": {
           "levels": [
            {
             "url": "media/panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB_b_hq.jpeg",
             "height": 1704,
             "class": "ImageResourceLevel",
             "width": 1704
            },
            {
             "url": "media/panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB_t.jpg"
         }
        ],
        "pitch": 0
       },
       "class": "AdjacentPanorama",
       "yaw": -66.47,
       "distance": 1
      }
     ],
     "label": "R0010071_20200923190838-01",
     "partial": false,
     "thumbnailUrl": "media/panorama_FC96EF69_FB78_6249_41E0_1DAB35716727_t.jpg",
     "vfov": 180,
     "id": "panorama_FC96EF69_FB78_6249_41E0_1DAB35716727",
     "class": "Panorama",
     "hfov": 360,
     "frames": [
      {
       "overlays": [
        {
         "useHandCursor": true,
         "id": "overlay_F175C732_FB78_E3DB_41E3_E13F6D8392EC",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_FC96EF69_FB78_6249_41E0_1DAB35716727_0_HS_2_0_0_map.gif",
              "height": 57,
              "class": "ImageResourceLevel",
              "width": 58
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -3.03,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 159.63,
           "hfov": 7.76
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_FC96EF69_FB78_6249_41E0_1DAB35716727_0_HS_2_0.png",
              "height": 115,
              "class": "ImageResourceLevel",
              "width": 116
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 7.76,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -3.03,
           "yaw": 159.63
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743, this.camera_F4A07225_FB98_7DF9_41DC_C2CC925B2B54); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_F14C2F9F_FB78_A2CA_41BB_067984C554EC",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_FC96EF69_FB78_6249_41E0_1DAB35716727_0_HS_1_0_0_map.gif",
              "height": 57,
              "class": "ImageResourceLevel",
              "width": 58
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -14.9,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 53.27,
           "hfov": 7.51
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_FC96EF69_FB78_6249_41E0_1DAB35716727_0_HS_1_0.png",
              "height": 115,
              "class": "ImageResourceLevel",
              "width": 116
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 7.51,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -14.9,
           "yaw": 53.27
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281, this.camera_F4ADD219_FB98_7DC9_41D1_ECA82C96745A); this.mainPlayList.set('selectedIndex', 28)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_F11E6721_FB79_E3F9_41DE_1C554CC46448",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_FC96EF69_FB78_6249_41E0_1DAB35716727_0_HS_0_0_0_map.gif",
              "height": 57,
              "class": "ImageResourceLevel",
              "width": 58
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -2.52,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -66.47,
           "hfov": 7.76
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_FC96EF69_FB78_6249_41E0_1DAB35716727_0_HS_0_0.png",
              "height": 115,
              "class": "ImageResourceLevel",
              "width": 116
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 7.76,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -2.52,
           "yaw": -66.47
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB, this.camera_F4BB1231_FB98_7DD9_41D3_A5038474FBBA); this.mainPlayList.set('selectedIndex', 26)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ]
        },
        {
         "image": {
          "levels": [
           {
            "url": "media/panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_tcap0.png",
            "height": 1348,
            "class": "ImageResourceLevel",
            "width": 1348
           }
          ],
          "class": "ImageResource"
         },
         "id": "panorama_FC96EF69_FB78_6249_41E0_1DAB35716727_tcap0",
         "class": "TripodCapPanoramaOverlay",
         "hfov": 45,
         "angle": 0,
         "inertia": false,
         "rotate": false
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_FC96EF69_FB78_6249_41E0_1DAB35716727_r_hq.jpeg",
          "height": 1704,
          "class": "ImageResourceLevel",
          "width": 1704
         },
         {
          "url": "media/panorama_FC96EF69_FB78_6249_41E0_1DAB35716727_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_FC96EF69_FB78_6249_41E0_1DAB35716727_f_hq.jpeg",
          "height": 1704,
          "class": "ImageResourceLevel",
          "width": 1704
         },
         {
          "url": "media/panorama_FC96EF69_FB78_6249_41E0_1DAB35716727_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "top": {
        "levels": [
         {
          "url": "media/panorama_FC96EF69_FB78_6249_41E0_1DAB35716727_u_hq.jpeg",
          "height": 1704,
          "class": "ImageResourceLevel",
          "width": 1704
         },
         {
          "url": "media/panorama_FC96EF69_FB78_6249_41E0_1DAB35716727_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_FC96EF69_FB78_6249_41E0_1DAB35716727_d_hq.jpeg",
          "height": 1704,
          "class": "ImageResourceLevel",
          "width": 1704
         },
         {
          "url": "media/panorama_FC96EF69_FB78_6249_41E0_1DAB35716727_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_FC96EF69_FB78_6249_41E0_1DAB35716727_l_hq.jpeg",
          "height": 1704,
          "class": "ImageResourceLevel",
          "width": 1704
         },
         {
          "url": "media/panorama_FC96EF69_FB78_6249_41E0_1DAB35716727_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "back": {
        "levels": [
         {
          "url": "media/panorama_FC96EF69_FB78_6249_41E0_1DAB35716727_b_hq.jpeg",
          "height": 1704,
          "class": "ImageResourceLevel",
          "width": 1704
         },
         {
          "url": "media/panorama_FC96EF69_FB78_6249_41E0_1DAB35716727_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_FC96EF69_FB78_6249_41E0_1DAB35716727_t.jpg"
      }
     ],
     "pitch": 0
    },
    "class": "AdjacentPanorama",
    "yaw": -166.77,
    "distance": 1
   }
  ],
  "label": "R0010070_20200923190742-01",
  "partial": false,
  "thumbnailUrl": "media/panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_t.jpg",
  "vfov": 180,
  "id": "panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743",
  "class": "Panorama",
  "hfov": 360,
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "id": "overlay_F208D8DF_FB78_EE49_41C9_854F333F7C2C",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_0_HS_1_0_0_map.gif",
           "height": 57,
           "class": "ImageResourceLevel",
           "width": 58
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.76,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 154.83,
        "hfov": 7.77
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_0_HS_1_0.png",
           "height": 115,
           "class": "ImageResourceLevel",
           "width": 116
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 7.77,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 0.76,
        "yaw": 154.83
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "useHandCursor": true,
      "id": "overlay_F28EAF55_FB7F_E25E_41CC_E8381E02DEAA",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_0_HS_0_0_0_map.gif",
           "height": 57,
           "class": "ImageResourceLevel",
           "width": 58
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.25,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -166.77,
        "hfov": 7.77
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_0_HS_0_0.png",
           "height": 115,
           "class": "ImageResourceLevel",
           "width": 116
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 7.77,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 0.25,
        "yaw": -166.77
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_FC96EF69_FB78_6249_41E0_1DAB35716727, this.camera_F4BD923D_FB98_7DC9_41D4_35D4054D1AD1); this.mainPlayList.set('selectedIndex', 25)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "image": {
       "levels": [
        {
         "url": "media/panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_tcap0.png",
         "height": 1348,
         "class": "ImageResourceLevel",
         "width": 1348
        }
       ],
       "class": "ImageResource"
      },
      "id": "panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_tcap0",
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45,
      "angle": 0,
      "inertia": false,
      "rotate": false
     }
    ],
    "right": {
     "levels": [
      {
       "url": "media/panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_r_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_f_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "top": {
     "levels": [
      {
       "url": "media/panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_u_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_d_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_l_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "back": {
     "levels": [
      {
       "url": "media/panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_b_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_t.jpg"
   }
  ],
  "pitch": 0
 },
 {
  "viewerArea": "this.MainViewer",
  "gyroscopeEnabled": true,
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonZoomIn": {
   "iconURL": "skin/IconButton_A127F056_B82E_5B5F_41CF_6EBA81BDB87E.png",
   "paddingLeft": 0,
   "minHeight": 0,
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "paddingTop": 0,
   "mode": "push",
   "rollOverIconURL": "skin/IconButton_A127F056_B82E_5B5F_41CF_6EBA81BDB87E_rollover.png",
   "transparencyActive": true,
   "paddingBottom": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingRight": 0,
   "width": 32,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "height": 32,
   "id": "IconButton_A127F056_B82E_5B5F_41CF_6EBA81BDB87E",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_A127F056_B82E_5B5F_41CF_6EBA81BDB87E_pressed.png",
   "minWidth": 0
  },
  "mouseControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "buttonPause": {
   "iconURL": "skin/IconButton_A1274056_B82E_5B5F_41E4_14570CE72552.png",
   "paddingLeft": 0,
   "minHeight": 0,
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "paddingTop": 0,
   "mode": "toggle",
   "transparencyActive": true,
   "paddingBottom": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingRight": 0,
   "width": 40,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "height": 40,
   "id": "IconButton_A1274056_B82E_5B5F_41E4_14570CE72552",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_A1274056_B82E_5B5F_41E4_14570CE72552_pressed.png",
   "minWidth": 0
  },
  "displayPlaybackBar": true,
  "buttonZoomOut": {
   "iconURL": "skin/IconButton_A1273056_B82E_5B5F_41A2_812D9C61E515.png",
   "paddingLeft": 0,
   "minHeight": 0,
   "class": "IconButton",
   "borderSize": 0,
   "verticalAlign": "middle",
   "paddingTop": 0,
   "mode": "push",
   "rollOverIconURL": "skin/IconButton_A1273056_B82E_5B5F_41A2_812D9C61E515_rollover.png",
   "transparencyActive": true,
   "paddingBottom": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingRight": 0,
   "width": 32,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "height": 32,
   "id": "IconButton_A1273056_B82E_5B5F_41A2_812D9C61E515",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_A1273056_B82E_5B5F_41A2_812D9C61E515_pressed.png",
   "minWidth": 0
  },
  "touchControlMode": "drag_rotation"
 },
 {
  "id": "panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 6.17,
   "class": "PanoramaCameraPosition",
   "yaw": 155.23
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB",
 {
  "id": "panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -4.33,
   "class": "PanoramaCameraPosition",
   "yaw": 162.26
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54",
 {
  "id": "panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -8.99,
   "class": "PanoramaCameraPosition",
   "yaw": 124.79
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E",
 {
  "id": "panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -21.53,
   "class": "PanoramaCameraPosition",
   "yaw": 9.02
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7",
 {
  "id": "panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -22.17,
   "class": "PanoramaCameraPosition",
   "yaw": 177.89
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844",
 {
  "id": "panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -40.84,
   "class": "PanoramaCameraPosition",
   "yaw": -36.92
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_BF49991E_B41A_459B_41DB_AFF106155788",
 {
  "id": "panorama_BF49991E_B41A_459B_41DB_AFF106155788_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -19.25,
   "class": "PanoramaCameraPosition",
   "yaw": 172.73
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_BF49A88D_B41A_437E_41D0_382B5D921D47",
 {
  "id": "panorama_BF49A88D_B41A_437E_41D0_382B5D921D47_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -23.42,
   "class": "PanoramaCameraPosition",
   "yaw": -41.46
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_BF499049_B41A_43F9_41C8_D167F91ACF93",
 {
  "id": "panorama_BF499049_B41A_43F9_41C8_D167F91ACF93_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -20.85,
   "class": "PanoramaCameraPosition",
   "yaw": 5.47
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205",
 {
  "id": "panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -12.23,
   "class": "PanoramaCameraPosition",
   "yaw": -147.98
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E",
 {
  "id": "panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -15.15,
   "class": "PanoramaCameraPosition",
   "yaw": 124.21
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A",
 {
  "id": "panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -13.56,
   "class": "PanoramaCameraPosition",
   "yaw": 76.65
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50",
 {
  "id": "panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -24.71,
   "class": "PanoramaCameraPosition",
   "yaw": 61.87
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB",
 {
  "id": "panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -15.52,
   "class": "PanoramaCameraPosition",
   "yaw": 63.54
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0",
 {
  "id": "panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -35.93,
   "class": "PanoramaCameraPosition",
   "yaw": -63.92
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556",
 {
  "id": "panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -22.87,
   "class": "PanoramaCameraPosition",
   "yaw": 148.53
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80",
 {
  "id": "panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -15.97,
   "class": "PanoramaCameraPosition",
   "yaw": -4.12
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1",
 {
  "id": "panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -25.87,
   "class": "PanoramaCameraPosition",
   "yaw": 133.6
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34",
 {
  "id": "panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -20.48,
   "class": "PanoramaCameraPosition",
   "yaw": 34.78
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9",
 {
  "id": "panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -15.81,
   "class": "PanoramaCameraPosition",
   "yaw": -168.96
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E",
 {
  "id": "panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -35.78,
   "class": "PanoramaCameraPosition",
   "yaw": -33.87
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD",
 {
  "id": "panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -11.6,
   "class": "PanoramaCameraPosition",
   "yaw": -94.95
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_BF4EBA82_B41A_476A_41E4_959A620651A3",
 {
  "id": "panorama_BF4EBA82_B41A_476A_41E4_959A620651A3_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -19.17,
   "class": "PanoramaCameraPosition",
   "yaw": -42.95
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B",
 {
  "id": "panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -12.13,
   "class": "PanoramaCameraPosition",
   "yaw": 159.36
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA",
 {
  "id": "panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -15.74,
   "class": "PanoramaCameraPosition",
   "yaw": 111.9
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_FC96EF69_FB78_6249_41E0_1DAB35716727",
 {
  "id": "panorama_FC96EF69_FB78_6249_41E0_1DAB35716727_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -9.87,
   "class": "PanoramaCameraPosition",
   "yaw": 36.14
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB",
 {
  "id": "panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -7.9,
   "class": "PanoramaCameraPosition",
   "yaw": 25.46
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_FC97AEF5_FB78_A259_41E7_7FC7CF63065B",
 {
  "id": "panorama_FC97AEF5_FB78_A259_41E7_7FC7CF63065B_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -14.71,
   "class": "PanoramaCameraPosition",
   "yaw": 140.5
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281",
 {
  "id": "panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -29.56,
   "class": "PanoramaCameraPosition",
   "yaw": -5.8
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "items": [
   {
    "media": "this.panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_F3BB06A1_FB78_62F6_41E3_DC0135681743_camera"
   },
   {
    "media": "this.panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_camera"
   },
   {
    "media": "this.panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_camera"
   },
   {
    "media": "this.panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E_camera"
   },
   {
    "media": "this.panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7_camera"
   },
   {
    "media": "this.panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_camera"
   },
   {
    "media": "this.panorama_BF49991E_B41A_459B_41DB_AFF106155788",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_BF49991E_B41A_459B_41DB_AFF106155788_camera"
   },
   {
    "media": "this.panorama_BF49A88D_B41A_437E_41D0_382B5D921D47",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "camera": "this.panorama_BF49A88D_B41A_437E_41D0_382B5D921D47_camera"
   },
   {
    "media": "this.panorama_BF499049_B41A_43F9_41C8_D167F91ACF93",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "camera": "this.panorama_BF499049_B41A_43F9_41C8_D167F91ACF93_camera"
   },
   {
    "media": "this.panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "camera": "this.panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205_camera"
   },
   {
    "media": "this.panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "camera": "this.panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E_camera"
   },
   {
    "media": "this.panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "camera": "this.panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_camera"
   },
   {
    "media": "this.panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "camera": "this.panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50_camera"
   },
   {
    "media": "this.panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "camera": "this.panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB_camera"
   },
   {
    "media": "this.panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "camera": "this.panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0_camera"
   },
   {
    "media": "this.panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "camera": "this.panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556_camera"
   },
   {
    "media": "this.panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "camera": "this.panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80_camera"
   },
   {
    "media": "this.panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "camera": "this.panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1_camera"
   },
   {
    "media": "this.panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "camera": "this.panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34_camera"
   },
   {
    "media": "this.panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "camera": "this.panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9_camera"
   },
   {
    "media": "this.panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "camera": "this.panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E_camera"
   },
   {
    "media": "this.panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "camera": "this.panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD_camera"
   },
   {
    "media": "this.panorama_BF4EBA82_B41A_476A_41E4_959A620651A3",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
    "camera": "this.panorama_BF4EBA82_B41A_476A_41E4_959A620651A3_camera"
   },
   {
    "media": "this.panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
    "camera": "this.panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_camera"
   },
   {
    "media": "this.panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
    "camera": "this.panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA_camera"
   },
   {
    "media": "this.panorama_FC96EF69_FB78_6249_41E0_1DAB35716727",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
    "camera": "this.panorama_FC96EF69_FB78_6249_41E0_1DAB35716727_camera"
   },
   {
    "media": "this.panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
    "camera": "this.panorama_FC97B738_FB78_A3D6_41EB_33C30BBAC0FB_camera"
   },
   {
    "media": "this.panorama_FC97AEF5_FB78_A259_41E7_7FC7CF63065B",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
    "camera": "this.panorama_FC97AEF5_FB78_A259_41E7_7FC7CF63065B_camera"
   },
   {
    "media": "this.panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 0)",
    "camera": "this.panorama_FC97A695_FB78_A2D9_41E9_43FB809E3281_camera"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "id": "camera_F4232EE6_FB98_627A_41D3_4E162D306C8A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 16.26
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F426EEF2_FB98_6246_41E1_67D0A4356733",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 89.27
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F43A9F13_FB98_63D8_41B1_1CBF916703F0",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -81.25
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F43E5F2A_FB98_63CB_41CB_AB0BB0DC52B0",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 113.53
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F4325F46_FB98_63BB_41E7_93CE7BA854C1",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 177.19
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F435DF5D_FB98_6249_41DB_017AA3FF5366",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 139.29
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F448EF74_FB98_625F_41DD_1DB95E1F8B94",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -90.35
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F44CBF8F_FB98_62C8_41E2_EB055CE23F12",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -61.8
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F4403FA7_FB98_62F9_41E1_A1B5466125E0",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 55.67
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F45B5FBE_FB98_62CB_41DA_C1E0D1532D28",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 50.87
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F45DFFDA_FB98_624B_41E4_1E66F21E0015",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -18.1
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F4510FF1_FB98_6259_41BB_0B4846F64739",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 150.41
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F4541008_FB98_7DB7_41CC_CC8422BD8D5F",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -26.94
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F46EB01F_FB98_7DC9_41E3_5FA369D84438",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -10.26
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F4620037_FB98_7DD9_41D9_EBD8992846D8",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 104.18
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F464D048_FB98_7DB7_41E4_DB236B50BCB0",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -110.81
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F47FC055_FB98_7E59_41D5_B7D221F9D531",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 17.27
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F4728062_FB98_7E7B_41D8_0ED9CBE46953",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 112.52
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F475006F_FB98_7E49_41E2_F88FD3CD5D06",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -134.81
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_EB8F707C_FB98_7E4F_41C9_CC4054147F21",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -153.76
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_EB820088_FB98_7EB7_41EC_2D30881AC37B",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -106.01
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_EB84E095_FB98_7ED9_41B7_63F5FFB81F59",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -88.33
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_EB9D10A1_FB98_7EF9_41E9_218091B0A282",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -55.74
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_EB9550AD_FB98_7EC9_41E3_DC445B9D2ABF",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -149.21
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_EBAD40B9_FB98_7EC9_41D7_CD058E168374",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -151.74
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_EBA530C5_FB98_7EB9_41D8_0C3BF850B50E",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -40.58
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F55DE106_FB98_7FBB_41E4_62C66A64EA2A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -15.57
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F5535113_FB98_7FD9_41DA_F0A780A3E914",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 173.15
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F550511F_FB98_7FC9_41EF_6AD010C3B480",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -93.88
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F555712C_FB98_7FCE_41E0_02B87811FD92",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 34.7
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F569F137_FB98_7FD9_41B7_A482F2CD8623",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -43.36
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F56F2142_FB98_7FBB_41BF_F0BCB03CA667",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -160.58
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F563A14E_FB98_7E4B_41D2_330B5A8225AC",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 162.28
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F560315A_FB98_7E4B_41E7_BF08009E3DEB",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -31.99
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F5654166_FB98_7E7B_41EC_49A39F8FDD91",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -53.46
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F57A0172_FB98_7E5B_41DF_2579FEF9C54B",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -118.9
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F57E917E_FB98_7E4B_41C9_13FA3AE18483",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -26.43
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F573518A_FB98_7ECB_41C7_492A135C14C8",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 27.63
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F5701196_FB98_7EDB_41E6_77E5A7309E57",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -7.48
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F574B1A2_FB98_7EFB_41E5_749CE51101B2",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 85.74
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F48941AE_FB98_7ECB_41E5_86651BE1DFC4",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -30.98
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F48E41BA_FB98_7ECB_41D2_0A1035435ADA",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 51.38
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F482D1C6_FB98_7EBB_41D1_31F021229850",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -10.01
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F48791D2_FB98_7E5B_41CF_BCB35C880F5F",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 19.8
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F49BF1DE_FB98_7E4B_41E9_E24B6C7E5778",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -79.23
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F49841EA_FB98_7E4B_41E9_0E6606F66285",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -74.68
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F49C41F6_FB98_7E5B_4190_C467A406EDB8",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -101.46
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F4978202_FB98_7DBB_41E2_A5D36E9707EC",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -126.73
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F4AB120E_FB98_7DCB_4197_BF5A97D85B5E",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -3.28
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F4ADD219_FB98_7DC9_41D1_ECA82C96745A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -133.8
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F4A07225_FB98_7DF9_41DC_C2CC925B2B54",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 13.23
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F4BB1231_FB98_7DD9_41D3_A5038474FBBA",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 125.65
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F4BD923D_FB98_7DC9_41D4_35D4054D1AD1",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -20.37
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F4B08249_FB98_6249_41CF_6E48EDA90037",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -130.26
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F4CB0256_FB98_625B_41D7_6DB751EA230D",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -138.6
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F4CCC261_FB98_6279_41C7_9768F81FC151",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 92.3
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F4C5526D_FB98_6249_41E1_1E1246B835C7",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -121.67
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F4DDD279_FB98_6249_41EB_D2F93B246881",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -109.04
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F4D65284_FB98_62BF_41C8_49E30C304190",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 81.19
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F4EED290_FB98_62D7_41EC_ACD60C0C9125",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 31.67
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F4E7029B_FB98_62C9_41E3_3F9189FE5425",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -77.72
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_F4FEF2A6_FB98_62FB_41D3_6F50DFDF2C26",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 153.95
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 }
], "children": [
 {
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowBlurRadius": 3,
  "minHeight": 50,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeight": 20,
  "top": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipPaddingRight": 6,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadWidth": 6,
  "playbackBarBorderColor": "#AAAAAA",
  "borderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "progressBorderRadius": 4,
  "paddingTop": 0,
  "toolTipShadowSpread": 0,
  "progressBarBorderRadius": 4,
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowVerticalLength": 0,
  "shadow": false,
  "toolTipFontColor": "#606060",
  "toolTipFontFamily": "Arial",
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBorderRadius": 4,
  "toolTipBorderSize": 1,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipFontStyle": "normal",
  "height": "100%",
  "toolTipPaddingTop": 4,
  "id": "MainViewer",
  "playbackBarHeadBorderRadius": 0,
  "borderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "progressLeft": 10,
  "playbackBarProgressOpacity": 1,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadBorderColor": "#000000",
  "paddingLeft": 0,
  "toolTipPaddingBottom": 4,
  "toolTipFontSize": 12,
  "width": "100%",
  "class": "ViewerArea",
  "playbackBarBorderSize": 2,
  "playbackBarBackgroundOpacity": 1,
  "toolTipOpacity": 1,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipBorderColor": "#767676",
  "toolTipFontWeight": "normal",
  "progressRight": 10,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "progressOpacity": 1,
  "playbackBarHeadShadow": true,
  "progressBackgroundOpacity": 1,
  "toolTipBorderRadius": 3,
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarLeft": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadHeight": 30,
  "paddingBottom": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBottom": 1,
  "left": 0,
  "progressBarOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipTextShadowOpacity": 0,
  "progressBarBorderColor": "#000000",
  "paddingRight": 0,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadOpacity": 1,
  "progressHeight": 20,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBottom": 10,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#AAAAAA",
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBorderSize": 2,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "minWidth": 100
 },
 {
  "layout": "horizontal",
  "children": [
   {
    "height": "100%",
    "layout": "horizontal",
    "children": [
     {
      "height": "100%",
      "layout": "vertical",
      "contentOpaque": false,
      "paddingLeft": 0,
      "minHeight": 20,
      "class": "Container",
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "scrollBarWidth": 10,
      "verticalAlign": "middle",
      "paddingTop": 0,
      "scrollBarMargin": 2,
      "overflow": "hidden",
      "paddingBottom": 0,
      "shadow": false,
      "scrollBarColor": "#000000",
      "paddingRight": 0,
      "gap": 4,
      "width": 40,
      "horizontalAlign": "center",
      "backgroundOpacity": 0,
      "scrollBarOpacity": 0.5,
      "id": "Container_52D2AE7E_5F01_65BC_41AC_A51A5F5534C5",
      "borderRadius": 0,
      "minWidth": 20
     }
    ],
    "paddingLeft": 0,
    "minHeight": 20,
    "contentOpaque": false,
    "class": "Container",
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "scrollBarWidth": 10,
    "verticalAlign": "middle",
    "paddingTop": 0,
    "scrollBarMargin": 2,
    "overflow": "hidden",
    "paddingBottom": 0,
    "shadow": false,
    "scrollBarColor": "#000000",
    "paddingRight": 0,
    "gap": 4,
    "width": 1524,
    "horizontalAlign": "center",
    "backgroundOpacity": 0,
    "scrollBarOpacity": 0.5,
    "id": "Container_52D2AE7F_5F01_65BC_4192_E5EA29912157",
    "borderRadius": 0,
    "minWidth": 392
   },
   {
    "iconURL": "skin/IconButton_F5F6D850_FB9B_EE57_41DB_28F31667E720.png",
    "paddingLeft": 0,
    "minHeight": 1,
    "class": "IconButton",
    "borderSize": 0,
    "verticalAlign": "middle",
    "maxWidth": 53,
    "paddingTop": 0,
    "maxHeight": 52,
    "mode": "push",
    "transparencyActive": true,
    "shadow": false,
    "paddingBottom": 0,
    "cursor": "hand",
    "click": "this.shareFacebook(location.href); var newWindow = window.open(\"http://facebook.com/CKSCDetroit\", \"_blank\"); newWindow.focus()",
    "paddingRight": 0,
    "width": 53,
    "horizontalAlign": "center",
    "backgroundOpacity": 0,
    "height": 52,
    "id": "IconButton_F5F6D850_FB9B_EE57_41DB_28F31667E720",
    "borderRadius": 0,
    "minWidth": 1
   }
  ],
  "paddingLeft": 0,
  "minHeight": 1,
  "contentOpaque": false,
  "width": "100%",
  "bottom": "0%",
  "scrollBarVisible": "rollOver",
  "class": "Container",
  "scrollBarWidth": 10,
  "borderSize": 0,
  "verticalAlign": "middle",
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "overflow": "scroll",
  "paddingBottom": 0,
  "shadow": false,
  "left": "0%",
  "paddingRight": 0,
  "gap": 10,
  "horizontalAlign": "center",
  "backgroundOpacity": 0,
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "height": 142,
  "minWidth": 1
 },
 {
  "layout": "horizontal",
  "children": [
   "this.IconButton_A1273056_B82E_5B5F_41A2_812D9C61E515",
   {
    "height": "100%",
    "layout": "vertical",
    "children": [
     "this.IconButton_A1274056_B82E_5B5F_41E4_14570CE72552"
    ],
    "paddingLeft": 0,
    "minHeight": 20,
    "contentOpaque": false,
    "class": "Container",
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "scrollBarWidth": 10,
    "verticalAlign": "middle",
    "paddingTop": 0,
    "scrollBarMargin": 2,
    "overflow": "hidden",
    "paddingBottom": 0,
    "shadow": false,
    "scrollBarColor": "#000000",
    "paddingRight": 0,
    "gap": 4,
    "width": 40,
    "horizontalAlign": "center",
    "backgroundOpacity": 0,
    "scrollBarOpacity": 0.5,
    "id": "Container_A1276056_B82E_5B5F_41D8_075B62C3D868",
    "borderRadius": 0,
    "minWidth": 20
   },
   "this.IconButton_A127F056_B82E_5B5F_41CF_6EBA81BDB87E"
  ],
  "paddingLeft": 0,
  "minHeight": 20,
  "contentOpaque": false,
  "width": "29.333%",
  "bottom": "0.22%",
  "scrollBarVisible": "rollOver",
  "class": "Container",
  "borderSize": 0,
  "top": "84.21%",
  "scrollBarWidth": 10,
  "verticalAlign": "middle",
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "overflow": "hidden",
  "shadow": false,
  "paddingBottom": 0,
  "left": "35.15%",
  "paddingRight": 0,
  "gap": 4,
  "horizontalAlign": "center",
  "backgroundOpacity": 0,
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "id": "Container_A127E057_B82E_5B5D_41CF_DFB485B174DB",
  "borderRadius": 0,
  "minWidth": 20
 },
 {
  "iconURL": "skin/IconButton_A20F4271_B832_3F52_41E3_DE4918B3EC31.png",
  "paddingLeft": 0,
  "minHeight": 1,
  "class": "IconButton",
  "top": "2.52%",
  "borderSize": 0,
  "verticalAlign": "middle",
  "maxWidth": 128,
  "paddingTop": 0,
  "maxHeight": 128,
  "mode": "toggle",
  "transparencyActive": true,
  "shadow": false,
  "paddingBottom": 0,
  "cursor": "hand",
  "paddingRight": 0,
  "right": "1.79%",
  "width": 60.45,
  "horizontalAlign": "center",
  "backgroundOpacity": 0,
  "height": 48,
  "id": "IconButton_A20F4271_B832_3F52_41E3_DE4918B3EC31",
  "borderRadius": 0,
  "minWidth": 1
 }
], 
 "height": "100%",
 "layout": "absolute",
 "contentOpaque": false,
 "paddingLeft": 0,
 "minHeight": 20,
 "start": "this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_A20F4271_B832_3F52_41E3_DE4918B3EC31].forEach(function(component) { component.set('visible', false); }) }",
 "width": "100%",
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "buttonToggleFullscreen": "this.IconButton_A20F4271_B832_3F52_41E3_DE4918B3EC31",
 "overflow": "visible",
 "backgroundPreloadEnabled": true,
 "shadow": false,
 "paddingBottom": 0,
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "rootPlayer",
 "borderRadius": 0,
 "minWidth": 20,
 "scripts": {
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "registerKey": function(key, value){    window[key] = value; },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "existsKey": function(key){    return key in window; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "getKey": function(key){    return window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "unregisterKey": function(key){    delete window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); }
 }
})