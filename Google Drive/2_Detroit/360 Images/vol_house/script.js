TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMin": 60,
  "hfovMax": 120,
  "adjacentPanoramas": [
   {
    "backwardYaw": 169.74,
    "panorama": {
     "hfovMin": 60,
     "hfovMax": 120,
     "adjacentPanoramas": [
      {
       "backwardYaw": -145.3,
       "panorama": {
        "hfovMin": 60,
        "hfovMax": 120,
        "adjacentPanoramas": [
         {
          "backwardYaw": 26.24,
          "panorama": "this.panorama_BF499049_B41A_43F9_41C8_D167F91ACF93",
          "class": "AdjacentPanorama",
          "yaw": -145.3,
          "distance": 1
         },
         {
          "backwardYaw": 45.19,
          "panorama": {
           "hfovMin": 60,
           "hfovMax": 120,
           "adjacentPanoramas": [
            {
             "backwardYaw": 118.2,
             "panorama": "this.panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205",
             "class": "AdjacentPanorama",
             "yaw": 45.19,
             "distance": 1
            },
            {
             "backwardYaw": 89.65,
             "panorama": {
              "hfovMin": 60,
              "hfovMax": 120,
              "adjacentPanoramas": [
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
                       "click": "this.startPanoramaWithCamera(this.panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54, this.camera_A4B4045D_B832_DB52_41C7_59C5BF050D23); this.mainPlayList.set('selectedIndex', 1)",
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
                "backwardYaw": 126.54,
                "panorama": {
                 "hfovMin": 60,
                 "hfovMax": 120,
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": -29.59,
                   "panorama": {
                    "hfovMin": 60,
                    "hfovMax": 120,
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": -98.81,
                      "panorama": "this.panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E",
                      "class": "AdjacentPanorama",
                      "yaw": -29.59,
                      "distance": 1
                     },
                     {
                      "backwardYaw": -148.33,
                      "panorama": {
                       "hfovMin": 60,
                       "hfovMax": 120,
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": 102.28,
                         "panorama": "this.panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7",
                         "class": "AdjacentPanorama",
                         "yaw": -148.33,
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
                             "click": "this.startPanoramaWithCamera(this.panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7, this.camera_A5763523_B832_DAF6_41E3_79F874845550); this.mainPlayList.set('selectedIndex', 3)",
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
                             "click": "this.mainPlayList.set('selectedIndex', 17)",
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
                           "id": "panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_tcap0",
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
                          "click": "this.startPanoramaWithCamera(this.panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E, this.camera_A48484F1_B832_DB52_41D8_9DBE9A5A5BDB); this.mainPlayList.set('selectedIndex', 2)",
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
                          "click": "this.startPanoramaWithCamera(this.panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844, this.camera_A57B34FE_B832_DB4E_41D8_45CBB2FFA0C4); this.mainPlayList.set('selectedIndex', 4)",
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
                          "click": "this.mainPlayList.set('selectedIndex', 10)",
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
                   "yaw": -98.81,
                   "distance": 1
                  },
                  {
                   "backwardYaw": 161.9,
                   "panorama": "this.panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54",
                   "class": "AdjacentPanorama",
                   "yaw": 126.54,
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
                       "click": "this.startPanoramaWithCamera(this.panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54, this.camera_A53375C2_B832_C5B7_41C6_8339035C9AAB); this.mainPlayList.set('selectedIndex', 1)",
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
                       "click": "this.startPanoramaWithCamera(this.panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7, this.camera_A53B35A0_B832_C5F3_41DD_31890897839F); this.mainPlayList.set('selectedIndex', 3)",
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
                "yaw": 161.9,
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
                "backwardYaw": 136.64,
                "panorama": "this.panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB",
                "class": "AdjacentPanorama",
                "yaw": -75.82,
                "distance": 1
               },
               {
                "backwardYaw": 148.01,
                "panorama": "this.panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205",
                "class": "AdjacentPanorama",
                "yaw": 73.99,
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
                    "click": "this.startPanoramaWithCamera(this.panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB, this.camera_A5AC47D8_B832_C552_41C0_FE7E0BD88A0A); this.mainPlayList.set('selectedIndex', 0)",
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
                    "click": "this.startPanoramaWithCamera(this.panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205, this.camera_A5A4F7F6_B832_C55E_41B0_4E485CA398A7); this.mainPlayList.set('selectedIndex', 8)",
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
                    "click": "this.startPanoramaWithCamera(this.panorama_BF49991E_B41A_459B_41DB_AFF106155788, this.camera_A5B437B8_B832_C5D2_41E6_AB45A692E26A); this.mainPlayList.set('selectedIndex', 5)",
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
                    "click": "this.startPanoramaWithCamera(this.panorama_BF49A88D_B41A_437E_41D0_382B5D921D47, this.camera_A5C4A780_B832_C5B2_41D0_832BF0BB1164); this.mainPlayList.set('selectedIndex', 6)",
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
                    "click": "this.startPanoramaWithCamera(this.panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E, this.camera_A5BCF79F_B832_C5CE_41C7_32C643F0A294); this.mainPlayList.set('selectedIndex', 2)",
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
                    "click": "this.mainPlayList.set('selectedIndex', 10)",
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
             "yaw": -17.72,
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
                 "click": "this.startPanoramaWithCamera(this.panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205, this.camera_A52815DB_B832_C556_41D3_375C438265EF); this.mainPlayList.set('selectedIndex', 8)",
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
                 "click": "this.startPanoramaWithCamera(this.panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54, this.camera_A52125FA_B832_C556_41CB_3BF830744F86); this.mainPlayList.set('selectedIndex', 1)",
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
              "click": "this.startPanoramaWithCamera(this.panorama_BF499049_B41A_43F9_41C8_D167F91ACF93, this.camera_A5DF4723_B832_C6F5_4190_AD9BFF1DD388); this.mainPlayList.set('selectedIndex', 7)",
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
              "click": "this.startPanoramaWithCamera(this.panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54, this.camera_A5CCC761_B832_C575_41DE_8E47F7BAAF96); this.mainPlayList.set('selectedIndex', 1)",
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
              "click": "this.startPanoramaWithCamera(this.panorama_BF49991E_B41A_459B_41DB_AFF106155788, this.camera_A5D4B742_B832_C6B7_41A5_8CC72463A0D0); this.mainPlayList.set('selectedIndex', 5)",
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
      },
      {
       "backwardYaw": 86.12,
       "panorama": "this.panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB",
       "class": "AdjacentPanorama",
       "yaw": 169.74,
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
           "click": "this.startPanoramaWithCamera(this.panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB, this.camera_A5739516_B832_DADE_41C3_4D4C555898CA); this.mainPlayList.set('selectedIndex', 0)",
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
           "click": "this.startPanoramaWithCamera(this.panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205, this.camera_A57F350A_B832_DAB6_41E3_47967C488BAA); this.mainPlayList.set('selectedIndex', 8)",
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
           "click": "this.mainPlayList.set('selectedIndex', 5)",
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
          "backwardYaw": -94.26,
          "panorama": {
           "hfovMin": 60,
           "hfovMax": 120,
           "adjacentPanoramas": [
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
                    "click": "this.startPanoramaWithCamera(this.panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB, this.camera_A554857A_B832_C557_41BE_A9369CF5840A); this.mainPlayList.set('selectedIndex', 12)",
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
                    "click": "this.startPanoramaWithCamera(this.panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB, this.camera_A4B33451_B832_DB55_41DA_F933660011CC); this.mainPlayList.set('selectedIndex', 12)",
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
                 "click": "this.startPanoramaWithCamera(this.panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0, this.camera_A559E555_B832_C552_41D0_13D5006E7953); this.mainPlayList.set('selectedIndex', 13)",
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
                 "click": "this.startPanoramaWithCamera(this.panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556, this.camera_A55C2562_B832_C576_41E4_4EC69FF19D80); this.mainPlayList.set('selectedIndex', 14)",
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
                 "click": "this.startPanoramaWithCamera(this.panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A, this.camera_A550256D_B832_C54D_41E4_E94C1DDF4E98); this.mainPlayList.set('selectedIndex', 10)",
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
                 "click": "this.startPanoramaWithCamera(this.panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A, this.camera_A5EF46EC_B832_C772_41C3_567D1B63DBC5); this.mainPlayList.set('selectedIndex', 10)",
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
                 "click": "this.startPanoramaWithCamera(this.panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A, this.camera_A5E4970A_B832_C6B7_41D4_8B500D4C06A5); this.mainPlayList.set('selectedIndex', 10)",
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
                 "click": "this.mainPlayList.set('selectedIndex', 17)",
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
                 "click": "this.startPanoramaWithCamera(this.panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A, this.camera_A5178656_B832_C75E_41E7_02138233C9D1); this.mainPlayList.set('selectedIndex', 10)",
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
              "click": "this.startPanoramaWithCamera(this.panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50, this.camera_A49104B3_B832_DBD6_41D3_A7CE85C8570A); this.mainPlayList.set('selectedIndex', 11)",
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
              "click": "this.startPanoramaWithCamera(this.panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB, this.camera_A4AE4481_B832_DBB2_41C6_24F0B2E0C0BA); this.mainPlayList.set('selectedIndex', 12)",
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
              "click": "this.startPanoramaWithCamera(this.panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80, this.camera_A4A2E48D_B832_DBB2_41CB_BD8C1A4476C7); this.mainPlayList.set('selectedIndex', 15)",
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
              "click": "this.startPanoramaWithCamera(this.panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1, this.camera_A4A6B49A_B832_DBD6_41AB_91F6508C9C53); this.mainPlayList.set('selectedIndex', 16)",
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
              "click": "this.startPanoramaWithCamera(this.panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E, this.camera_A49D64A6_B832_DBFE_41D8_88039B477B6E); this.mainPlayList.set('selectedIndex', 9)",
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
           "click": "this.startPanoramaWithCamera(this.panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB, this.camera_A4AD6475_B832_DB52_41E3_7F599FD8258A); this.mainPlayList.set('selectedIndex', 0)",
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
           "click": "this.startPanoramaWithCamera(this.panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A, this.camera_A4A9C469_B832_DB72_41B8_4590DD8570DA); this.mainPlayList.set('selectedIndex', 10)",
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
   },
   {
    "backwardYaw": -75.82,
    "panorama": "this.panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54",
    "class": "AdjacentPanorama",
    "yaw": 136.64,
    "distance": 1
   },
   {
    "backwardYaw": 153.06,
    "panorama": {
     "hfovMin": 60,
     "hfovMax": 120,
     "adjacentPanoramas": [
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
                "backwardYaw": -152.37,
                "panorama": "this.panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B",
                "class": "AdjacentPanorama",
                "yaw": 58.33,
                "distance": 1
               },
               {
                "backwardYaw": 153.57,
                "panorama": "this.panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD",
                "class": "AdjacentPanorama",
                "yaw": 139.42,
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
                    "click": "this.startPanoramaWithCamera(this.panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B, this.camera_A54AF587_B832_C5BD_41C9_BDF6606BDA5B); this.mainPlayList.set('selectedIndex', 22)",
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
                    "click": "this.startPanoramaWithCamera(this.panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD, this.camera_A5425593_B832_C5D5_41CC_EA7670C3891C); this.mainPlayList.set('selectedIndex', 20)",
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
                       "click": "this.startPanoramaWithCamera(this.panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34, this.camera_A50FD670_B832_C752_41DC_31CB4EF8C038); this.mainPlayList.set('selectedIndex', 17)",
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
                       "click": "this.startPanoramaWithCamera(this.panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34, this.camera_A59CA815_B832_CAD2_41CB_2B9A2C8D9D86); this.mainPlayList.set('selectedIndex', 17)",
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
                    "click": "this.startPanoramaWithCamera(this.panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E, this.camera_A56AD52F_B832_DACE_41E2_78868528C672); this.mainPlayList.set('selectedIndex', 19)",
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
                    "click": "this.startPanoramaWithCamera(this.panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9, this.camera_A5652548_B832_DAB2_41D2_47BEC58A3FAB); this.mainPlayList.set('selectedIndex', 18)",
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
                    "click": "this.startPanoramaWithCamera(this.panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD, this.camera_A561553C_B832_DAD2_41D8_406C24F8648F); this.mainPlayList.set('selectedIndex', 20)",
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
                 "click": "this.startPanoramaWithCamera(this.panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B, this.camera_A5FFC6AE_B832_C7CE_41D0_2336748A0049); this.mainPlayList.set('selectedIndex', 22)",
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
                 "click": "this.startPanoramaWithCamera(this.panorama_BF4EBA82_B41A_476A_41E4_959A620651A3, this.camera_A507E68F_B832_C7CE_41C0_5B9C938F7932); this.mainPlayList.set('selectedIndex', 21)",
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
                 "click": "this.startPanoramaWithCamera(this.panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34, this.camera_A5F736CD_B832_C7B2_41D0_5A16B3C2864D); this.mainPlayList.set('selectedIndex', 17)",
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
              "click": "this.startPanoramaWithCamera(this.panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA, this.camera_A4BFA445_B832_DABD_41E1_F327A1C42E25); this.mainPlayList.set('selectedIndex', 23)",
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
              "click": "this.startPanoramaWithCamera(this.panorama_BF4EBA82_B41A_476A_41E4_959A620651A3, this.camera_A4BA9439_B832_DAD5_41C2_8A16305163EF); this.mainPlayList.set('selectedIndex', 21)",
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
              "click": "this.startPanoramaWithCamera(this.panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD, this.camera_A4B9C42C_B832_DAF3_41D9_7E0FBB8A7ED8); this.mainPlayList.set('selectedIndex', 20)",
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
      },
      {
       "backwardYaw": -162.73,
       "panorama": "this.panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB",
       "class": "AdjacentPanorama",
       "yaw": 153.06,
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
           "click": "this.startPanoramaWithCamera(this.panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB, this.camera_A51E4638_B832_C6D2_41D0_75E84BD34398); this.mainPlayList.set('selectedIndex', 0)",
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
           "click": "this.startPanoramaWithCamera(this.panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B, this.camera_A526B619_B832_C6D2_41E4_38D502B87561); this.mainPlayList.set('selectedIndex', 22)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_BF499049_B41A_43F9_41C8_D167F91ACF93, this.camera_A495D4BF_B832_DBCE_41C2_7608D6917B10); this.mainPlayList.set('selectedIndex', 7)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54, this.camera_A48C54D8_B832_DB52_41D0_DF473786F2C6); this.mainPlayList.set('selectedIndex', 1)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E, this.camera_A48844CB_B832_DBB6_41E1_8BD485E6A2D2); this.mainPlayList.set('selectedIndex', 9)",
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
        "click": "this.startPanoramaWithCamera(this.panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA, this.camera_A480E4E4_B832_DB72_41D3_4F92B8894904); this.mainPlayList.set('selectedIndex', 23)",
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
 {
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonZoomIn": {
   "iconURL": "skin/IconButton_A127F056_B82E_5B5F_41CF_6EBA81BDB87E.png",
   "paddingLeft": 0,
   "minHeight": 0,
   "class": "IconButton",
   "minWidth": 0,
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
   "pressedIconURL": "skin/IconButton_A127F056_B82E_5B5F_41CF_6EBA81BDB87E_pressed.png"
  },
  "touchControlMode": "drag_acceleration",
  "mouseControlMode": "drag_acceleration",
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "buttonPause": {
   "iconURL": "skin/IconButton_A1274056_B82E_5B5F_41E4_14570CE72552.png",
   "paddingLeft": 0,
   "minHeight": 0,
   "class": "IconButton",
   "minWidth": 0,
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
   "pressedIconURL": "skin/IconButton_A1274056_B82E_5B5F_41E4_14570CE72552_pressed.png"
  },
  "displayPlaybackBar": true,
  "buttonZoomOut": {
   "iconURL": "skin/IconButton_A1273056_B82E_5B5F_41A2_812D9C61E515.png",
   "paddingLeft": 0,
   "minHeight": 0,
   "class": "IconButton",
   "minWidth": 0,
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
   "pressedIconURL": "skin/IconButton_A1273056_B82E_5B5F_41A2_812D9C61E515_pressed.png"
  }
 },
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
    "media": "this.panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_BAC71A46_B41A_47EA_41C8_9A9B49E888CB_camera"
   },
   {
    "media": "this.panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_BA7164A6_B41A_CCAA_41DD_AF9C2AD43E54_camera"
   },
   {
    "media": "this.panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_BF4AB40E_B419_C37A_41E2_2D05BE64381E_camera"
   },
   {
    "media": "this.panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_BF4A7A5C_B419_C79E_41C7_984676CD96C7_camera"
   },
   {
    "media": "this.panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_BF4A7237_B419_C7A9_41CC_B483C78F6844_camera"
   },
   {
    "media": "this.panorama_BF49991E_B41A_459B_41DB_AFF106155788",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_BF49991E_B41A_459B_41DB_AFF106155788_camera"
   },
   {
    "media": "this.panorama_BF49A88D_B41A_437E_41D0_382B5D921D47",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_BF49A88D_B41A_437E_41D0_382B5D921D47_camera"
   },
   {
    "media": "this.panorama_BF499049_B41A_43F9_41C8_D167F91ACF93",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "camera": "this.panorama_BF499049_B41A_43F9_41C8_D167F91ACF93_camera"
   },
   {
    "media": "this.panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "camera": "this.panorama_BF49FF28_B41A_BDA6_41DA_F1DEA5D61205_camera"
   },
   {
    "media": "this.panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "camera": "this.panorama_BF49A6D2_B41A_CCEA_41DC_2CF2BD8DAF5E_camera"
   },
   {
    "media": "this.panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "camera": "this.panorama_BF49AE70_B41A_DFA6_41E2_8F61A428EA6A_camera"
   },
   {
    "media": "this.panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "camera": "this.panorama_BF49A632_B41A_CFAA_41D7_96E120E76B50_camera"
   },
   {
    "media": "this.panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "camera": "this.panorama_BF49BDE1_B41A_FCA6_41CA_198FD3ABC9DB_camera"
   },
   {
    "media": "this.panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "camera": "this.panorama_BF49956B_B41A_CDB9_41CA_E575331EFED0_camera"
   },
   {
    "media": "this.panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "camera": "this.panorama_BF498D0F_B41A_DD7A_41D0_A2A35C01D556_camera"
   },
   {
    "media": "this.panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "camera": "this.panorama_BF4984AC_B41A_CCBE_41B2_11B9263F4D80_camera"
   },
   {
    "media": "this.panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "camera": "this.panorama_BF499C3A_B41A_C39A_41D4_96CF7A4EC7D1_camera"
   },
   {
    "media": "this.panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "camera": "this.panorama_BF497BD6_B41A_44EA_41DA_89D13FCC7A34_camera"
   },
   {
    "media": "this.panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "camera": "this.panorama_BF4E9375_B41A_45AE_41E5_9BE4FE34EBC9_camera"
   },
   {
    "media": "this.panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "camera": "this.panorama_BF496B3F_B41A_4599_41E0_61988C20AF8E_camera"
   },
   {
    "media": "this.panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "camera": "this.panorama_BF4EA2E1_B41A_44A6_41D0_A937A13E3BBD_camera"
   },
   {
    "media": "this.panorama_BF4EBA82_B41A_476A_41E4_959A620651A3",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "camera": "this.panorama_BF4EBA82_B41A_476A_41E4_959A620651A3_camera"
   },
   {
    "media": "this.panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
    "camera": "this.panorama_BF4EF173_B41B_C5AA_41C9_DC94B673104B_camera"
   },
   {
    "media": "this.panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 0)",
    "camera": "this.panorama_BF4ED911_B41B_C566_41CD_81BBDCDA9DFA_camera"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "id": "camera_A4B9C42C_B832_DAF3_41D9_7E0FBB8A7ED8",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 92.3
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A4BA9439_B832_DAD5_41C2_8A16305163EF",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -121.67
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A4BFA445_B832_DABD_41E1_F327A1C42E25",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -109.04
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A4B33451_B832_DB55_41DA_F933660011CC",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -151.74
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A4B4045D_B832_DB52_41C7_59C5BF050D23",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -79.23
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A4A9C469_B832_DB72_41B8_4590DD8570DA",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 55.67
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A4AD6475_B832_DB52_41E3_7F599FD8258A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 50.87
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A4AE4481_B832_DBB2_41C6_24F0B2E0C0BA",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 85.74
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A4A2E48D_B832_DBB2_41CB_BD8C1A4476C7",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -7.48
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A4A6B49A_B832_DBD6_41AB_91F6508C9C53",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -10.01
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A49D64A6_B832_DBFE_41D8_88039B477B6E",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -30.98
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A49104B3_B832_DBD6_41D3_A7CE85C8570A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 51.38
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A495D4BF_B832_DBCE_41C2_7608D6917B10",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -10.26
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A48844CB_B832_DBB6_41E1_8BD485E6A2D2",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -110.81
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A48C54D8_B832_DB52_41D0_DF473786F2C6",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 104.18
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A480E4E4_B832_DB72_41D3_4F92B8894904",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -26.94
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A48484F1_B832_DB52_41D8_9DBE9A5A5BDB",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 81.19
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A57B34FE_B832_DB4E_41D8_45CBB2FFA0C4",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 31.67
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A57F350A_B832_DAB6_41E3_47967C488BAA",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 34.7
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A5739516_B832_DADE_41C3_4D4C555898CA",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -93.88
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A5763523_B832_DAF6_41E3_79F874845550",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -77.72
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A56AD52F_B832_DACE_41E2_78868528C672",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -88.33
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A561553C_B832_DAD2_41D8_406C24F8648F",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -55.74
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A5652548_B832_DAB2_41D2_47BEC58A3FAB",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -149.21
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A559E555_B832_C552_41D0_13D5006E7953",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 89.27
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A55C2562_B832_C576_41E4_4EC69FF19D80",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 16.26
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A550256D_B832_C54D_41E4_E94C1DDF4E98",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -81.25
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A554857A_B832_C557_41BE_A9369CF5840A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -74.68
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A54AF587_B832_C5BD_41C9_BDF6606BDA5B",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 27.63
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A5425593_B832_C5D5_41CC_EA7670C3891C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -26.43
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A53B35A0_B832_C5F3_41DD_31890897839F",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 150.41
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A53375C2_B832_C5B7_41C6_8339035C9AAB",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -18.1
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A52815DB_B832_C556_41D3_375C438265EF",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -61.8
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A52125FA_B832_C556_41CB_3BF830744F86",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -90.35
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A526B619_B832_C6D2_41E4_38D502B87561",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 112.52
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A51E4638_B832_C6D2_41D0_75E84BD34398",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 17.27
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A5178656_B832_C75E_41E7_02138233C9D1",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 19.8
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A50FD670_B832_C752_41DC_31CB4EF8C038",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -3.28
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A507E68F_B832_C7CE_41C0_5B9C938F7932",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -40.58
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A5FFC6AE_B832_C7CE_41D0_2336748A0049",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -15.57
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A5F736CD_B832_C7B2_41D0_5A16B3C2864D",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 173.15
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A5EF46EC_B832_C772_41C3_567D1B63DBC5",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -130.26
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A5E4970A_B832_C6B7_41D4_8B500D4C06A5",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -118.9
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A5DF4723_B832_C6F5_4190_AD9BFF1DD388",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -153.76
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A5D4B742_B832_C6B7_41A5_8CC72463A0D0",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -134.81
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A5CCC761_B832_C575_41DE_8E47F7BAAF96",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -106.01
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A5C4A780_B832_C5B2_41D0_832BF0BB1164",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -160.58
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A5BCF79F_B832_C5CE_41C7_32C643F0A294",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -53.46
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A5B437B8_B832_C5D2_41E6_AB45A692E26A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 162.28
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A5AC47D8_B832_C552_41C0_FE7E0BD88A0A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -43.36
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A5A4F7F6_B832_C55E_41B0_4E485CA398A7",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -31.99
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "id": "camera_A59CA815_B832_CAD2_41CB_2B9A2C8D9D86",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -101.46
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
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
  "playbackBarHeight": 20,
  "top": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipPaddingRight": 6,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadWidth": 6,
  "minWidth": 100,
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
  "toolTipShadowVerticalLength": 0,
  "shadow": false,
  "toolTipFontColor": "#606060",
  "toolTipFontFamily": "Arial",
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBorderRadius": 4,
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "toolTipFontStyle": "normal",
  "height": "100%",
  "playbackBarProgressBorderColor": "#000000",
  "id": "MainViewer",
  "playbackBarHeadBorderRadius": 0,
  "borderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "progressLeft": 10,
  "playbackBarProgressOpacity": 1,
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
  "toolTipShadowHorizontalLength": 0,
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
  ]
 },
 {
  "layout": "horizontal",
  "children": [
   {
    "layout": "horizontal",
    "height": "100%",
    "children": [
     {
      "layout": "vertical",
      "height": "100%",
      "contentOpaque": false,
      "paddingLeft": 0,
      "minHeight": 20,
      "class": "Container",
      "minWidth": 20,
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
      "borderRadius": 0
     }
    ],
    "paddingLeft": 0,
    "contentOpaque": false,
    "minHeight": 20,
    "class": "Container",
    "minWidth": 392,
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
    "borderRadius": 0
   }
  ],
  "paddingLeft": 0,
  "contentOpaque": false,
  "minHeight": 1,
  "width": "100%",
  "class": "Container",
  "bottom": "0%",
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "scrollBarWidth": 10,
  "verticalAlign": "middle",
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "overflow": "scroll",
  "paddingBottom": 0,
  "shadow": false,
  "left": "0%",
  "scrollBarColor": "#000000",
  "paddingRight": 0,
  "gap": 10,
  "horizontalAlign": "center",
  "backgroundOpacity": 0,
  "scrollBarOpacity": 0.5,
  "borderRadius": 0,
  "height": 142
 },
 {
  "layout": "horizontal",
  "children": [
   "this.IconButton_A1273056_B82E_5B5F_41A2_812D9C61E515",
   {
    "layout": "vertical",
    "height": "100%",
    "children": [
     "this.IconButton_A1274056_B82E_5B5F_41E4_14570CE72552"
    ],
    "paddingLeft": 0,
    "contentOpaque": false,
    "minHeight": 20,
    "class": "Container",
    "minWidth": 20,
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
    "borderRadius": 0
   },
   "this.IconButton_A127F056_B82E_5B5F_41CF_6EBA81BDB87E"
  ],
  "paddingLeft": 0,
  "contentOpaque": false,
  "minHeight": 20,
  "width": "29.333%",
  "class": "Container",
  "bottom": "0.22%",
  "minWidth": 20,
  "scrollBarVisible": "rollOver",
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
  "scrollBarColor": "#000000",
  "paddingRight": 0,
  "gap": 4,
  "horizontalAlign": "center",
  "backgroundOpacity": 0,
  "scrollBarOpacity": 0.5,
  "id": "Container_A127E057_B82E_5B5D_41CF_DFB485B174DB",
  "borderRadius": 0
 },
 {
  "iconURL": "skin/IconButton_A20F4271_B832_3F52_41E3_DE4918B3EC31.png",
  "paddingLeft": 0,
  "minHeight": 1,
  "class": "IconButton",
  "top": "2.52%",
  "minWidth": 1,
  "borderSize": 0,
  "verticalAlign": "middle",
  "paddingTop": 0,
  "mode": "toggle",
  "transparencyActive": true,
  "shadow": false,
  "paddingBottom": 0,
  "maxHeight": 128,
  "maxWidth": 128,
  "cursor": "hand",
  "paddingRight": 0,
  "right": "1.79%",
  "width": 60.45,
  "horizontalAlign": "center",
  "backgroundOpacity": 0,
  "height": 48,
  "id": "IconButton_A20F4271_B832_3F52_41E3_DE4918B3EC31",
  "borderRadius": 0
 }
], 
 "layout": "absolute",
 "height": "100%",
 "contentOpaque": false,
 "paddingLeft": 0,
 "minHeight": 20,
 "class": "Player",
 "start": "this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_A20F4271_B832_3F52_41E3_DE4918B3EC31].forEach(function(component) { component.set('visible', false); }) }",
 "width": "100%",
 "minWidth": 20,
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
 "scripts": {
  "unregisterKey": function(key){    delete window[key]; },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "existsKey": function(key){    return key in window; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "registerKey": function(key, value){    window[key] = value; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "getKey": function(key){    return window[key]; },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } }
 }
})