TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMin": 60,
  "hfovMax": 120,
  "adjacentPanoramas": [
   {
    "backwardYaw": 152.5,
    "panorama": {
     "hfovMin": 60,
     "hfovMax": 120,
     "adjacentPanoramas": [
      {
       "backwardYaw": -167.33,
       "panorama": "this.panorama_6562E38C_6D09_4096_41B1_734A673DC584",
       "class": "AdjacentPanorama",
       "yaw": 152.5,
       "distance": 1
      },
      {
       "backwardYaw": -51.38,
       "panorama": {
        "hfovMin": 60,
        "hfovMax": 120,
        "adjacentPanoramas": [
         {
          "backwardYaw": -60.6,
          "panorama": "this.panorama_6562E025_6D09_5F96_41D9_5293F1924661",
          "class": "AdjacentPanorama",
          "yaw": -51.38,
          "distance": 1
         },
         {
          "backwardYaw": -34.95,
          "panorama": {
           "hfovMin": 60,
           "hfovMax": 120,
           "adjacentPanoramas": [
            {
             "backwardYaw": 35.15,
             "panorama": "this.panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD",
             "class": "AdjacentPanorama",
             "yaw": -34.95,
             "distance": 1
            }
           ],
           "label": "Backyard",
           "partial": false,
           "thumbnailUrl": "media/panorama_65629885_6D08_C096_41D4_EE4D43ECED1E_t.jpg",
           "vfov": 180,
           "id": "panorama_65629885_6D08_C096_41D4_EE4D43ECED1E",
           "class": "Panorama",
           "hfov": 360,
           "frames": [
            {
             "overlays": [
              {
               "useHandCursor": true,
               "id": "overlay_2FC071E5_3ADE_1D81_41AD_64614EF10535",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_65629885_6D08_C096_41D4_EE4D43ECED1E_0_HS_0_0_0_map.gif",
                    "height": 59,
                    "class": "ImageResourceLevel",
                    "width": 59
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -5.69,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -34.95,
                 "hfov": 7.86
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_65629885_6D08_C096_41D4_EE4D43ECED1E_0_HS_0_0.png",
                    "height": 119,
                    "class": "ImageResourceLevel",
                    "width": 118
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 7.86,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -5.69,
                 "yaw": -34.95
                }
               ],
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD, this.camera_5A152CD9_4805_7918_41CF_4E528347FC29); this.mainPlayList.set('selectedIndex', 22)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ]
              },
              {
               "image": {
                "levels": [
                 {
                  "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
                  "height": 1348,
                  "class": "ImageResourceLevel",
                  "width": 1348
                 }
                ],
                "class": "ImageResource"
               },
               "id": "panorama_65629885_6D08_C096_41D4_EE4D43ECED1E_tcap0",
               "class": "TripodCapPanoramaOverlay",
               "hfov": 34.8,
               "angle": 0,
               "inertia": false,
               "rotate": false
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_65629885_6D08_C096_41D4_EE4D43ECED1E_r_hq.jpeg",
                "height": 1704,
                "class": "ImageResourceLevel",
                "width": 1704
               },
               {
                "url": "media/panorama_65629885_6D08_C096_41D4_EE4D43ECED1E_r.jpeg",
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
                "url": "media/panorama_65629885_6D08_C096_41D4_EE4D43ECED1E_f_hq.jpeg",
                "height": 1704,
                "class": "ImageResourceLevel",
                "width": 1704
               },
               {
                "url": "media/panorama_65629885_6D08_C096_41D4_EE4D43ECED1E_f.jpeg",
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
                "url": "media/panorama_65629885_6D08_C096_41D4_EE4D43ECED1E_u_hq.jpeg",
                "height": 1704,
                "class": "ImageResourceLevel",
                "width": 1704
               },
               {
                "url": "media/panorama_65629885_6D08_C096_41D4_EE4D43ECED1E_u.jpeg",
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
                "url": "media/panorama_65629885_6D08_C096_41D4_EE4D43ECED1E_d_hq.jpeg",
                "height": 1704,
                "class": "ImageResourceLevel",
                "width": 1704
               },
               {
                "url": "media/panorama_65629885_6D08_C096_41D4_EE4D43ECED1E_d.jpeg",
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
                "url": "media/panorama_65629885_6D08_C096_41D4_EE4D43ECED1E_l_hq.jpeg",
                "height": 1704,
                "class": "ImageResourceLevel",
                "width": 1704
               },
               {
                "url": "media/panorama_65629885_6D08_C096_41D4_EE4D43ECED1E_l.jpeg",
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
                "url": "media/panorama_65629885_6D08_C096_41D4_EE4D43ECED1E_b_hq.jpeg",
                "height": 1704,
                "class": "ImageResourceLevel",
                "width": 1704
               },
               {
                "url": "media/panorama_65629885_6D08_C096_41D4_EE4D43ECED1E_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_65629885_6D08_C096_41D4_EE4D43ECED1E_t.jpg"
            }
           ],
           "pitch": 0
          },
          "class": "AdjacentPanorama",
          "yaw": 35.15,
          "distance": 1
         },
         {
          "backwardYaw": 9.89,
          "panorama": {
           "hfovMin": 60,
           "hfovMax": 120,
           "adjacentPanoramas": [
            {
             "backwardYaw": -25.86,
             "panorama": "this.panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD",
             "class": "AdjacentPanorama",
             "yaw": 9.89,
             "distance": 1
            },
            {
             "backwardYaw": 101.97,
             "panorama": {
              "hfovMin": 60,
              "hfovMax": 120,
              "adjacentPanoramas": [
               {
                "backwardYaw": -97.48,
                "panorama": {
                 "hfovMin": 60,
                 "hfovMax": 120,
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": -27,
                   "panorama": "this.panorama_65615695_6D08_C0B6_4184_34CBC0A759BA",
                   "class": "AdjacentPanorama",
                   "yaw": -97.48,
                   "distance": 1
                  },
                  {
                   "backwardYaw": -150.79,
                   "panorama": {
                    "hfovMin": 60,
                    "hfovMax": 120,
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": 75.77,
                      "panorama": {
                       "hfovMin": 60,
                       "hfovMax": 120,
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": 61.8,
                         "panorama": {
                          "hfovMin": 60,
                          "hfovMax": 120,
                          "adjacentPanoramas": [
                           {
                            "backwardYaw": 171.82,
                            "panorama": {
                             "hfovMin": 60,
                             "hfovMax": 120,
                             "adjacentPanoramas": [
                              {
                               "backwardYaw": 47.91,
                               "panorama": "this.panorama_656250A8_6D0B_409F_41A9_53EF98C75F40",
                               "class": "AdjacentPanorama",
                               "yaw": 171.82,
                               "distance": 1
                              }
                             ],
                             "label": "Bedroom 3",
                             "partial": false,
                             "thumbnailUrl": "media/panorama_65620760_6D08_C18E_41D1_0E722A330522_t.jpg",
                             "vfov": 180,
                             "id": "panorama_65620760_6D08_C18E_41D1_0E722A330522",
                             "class": "Panorama",
                             "hfov": 360,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_2B4E2D6D_3AE2_0A81_4177_5DD1C2043E9E",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_65620760_6D08_C18E_41D1_0E722A330522_0_HS_0_0_0_map.gif",
                                      "height": 59,
                                      "class": "ImageResourceLevel",
                                      "width": 59
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -10.49,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 171.82,
                                   "hfov": 7.77
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_65620760_6D08_C18E_41D1_0E722A330522_0_HS_0_0.png",
                                      "height": 119,
                                      "class": "ImageResourceLevel",
                                      "width": 118
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.77,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -10.49,
                                   "yaw": 171.82
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_656250A8_6D0B_409F_41A9_53EF98C75F40, this.camera_5A0BCD38_4805_7B18_41AE_171F762C359D); this.mainPlayList.set('selectedIndex', 9)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ]
                                },
                                {
                                 "image": {
                                  "levels": [
                                   {
                                    "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
                                    "height": 1348,
                                    "class": "ImageResourceLevel",
                                    "width": 1348
                                   }
                                  ],
                                  "class": "ImageResource"
                                 },
                                 "id": "panorama_65620760_6D08_C18E_41D1_0E722A330522_tcap0",
                                 "class": "TripodCapPanoramaOverlay",
                                 "hfov": 34.8,
                                 "angle": 0,
                                 "inertia": false,
                                 "rotate": false
                                }
                               ],
                               "right": {
                                "levels": [
                                 {
                                  "url": "media/panorama_65620760_6D08_C18E_41D1_0E722A330522_r_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_65620760_6D08_C18E_41D1_0E722A330522_r.jpeg",
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
                                  "url": "media/panorama_65620760_6D08_C18E_41D1_0E722A330522_f_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_65620760_6D08_C18E_41D1_0E722A330522_f.jpeg",
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
                                  "url": "media/panorama_65620760_6D08_C18E_41D1_0E722A330522_u_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_65620760_6D08_C18E_41D1_0E722A330522_u.jpeg",
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
                                  "url": "media/panorama_65620760_6D08_C18E_41D1_0E722A330522_d_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_65620760_6D08_C18E_41D1_0E722A330522_d.jpeg",
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
                                  "url": "media/panorama_65620760_6D08_C18E_41D1_0E722A330522_l_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_65620760_6D08_C18E_41D1_0E722A330522_l.jpeg",
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
                                  "url": "media/panorama_65620760_6D08_C18E_41D1_0E722A330522_b_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_65620760_6D08_C18E_41D1_0E722A330522_b.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "thumbnailUrl": "media/panorama_65620760_6D08_C18E_41D1_0E722A330522_t.jpg"
                              }
                             ],
                             "pitch": 0
                            },
                            "class": "AdjacentPanorama",
                            "yaw": 47.91,
                            "distance": 1
                           },
                           {
                            "backwardYaw": -36.6,
                            "panorama": "this.panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40",
                            "class": "AdjacentPanorama",
                            "yaw": 61.8,
                            "distance": 1
                           },
                           {
                            "backwardYaw": -127.92,
                            "panorama": {
                             "hfovMin": 60,
                             "hfovMax": 120,
                             "adjacentPanoramas": [
                              {
                               "backwardYaw": -123.88,
                               "panorama": "this.panorama_656250A8_6D0B_409F_41A9_53EF98C75F40",
                               "class": "AdjacentPanorama",
                               "yaw": -127.92,
                               "distance": 1
                              },
                              {
                               "backwardYaw": -41.02,
                               "panorama": "this.panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF",
                               "class": "AdjacentPanorama",
                               "yaw": 137.59,
                               "distance": 1
                              },
                              {
                               "backwardYaw": 155.78,
                               "panorama": "this.panorama_6562E38C_6D09_4096_41B1_734A673DC584",
                               "class": "AdjacentPanorama",
                               "yaw": -24.47,
                               "distance": 1
                              },
                              {
                               "backwardYaw": -104.81,
                               "panorama": {
                                "hfovMin": 60,
                                "hfovMax": 120,
                                "adjacentPanoramas": [
                                 {
                                  "backwardYaw": 87.57,
                                  "panorama": "this.panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2",
                                  "class": "AdjacentPanorama",
                                  "yaw": -104.81,
                                  "distance": 1
                                 },
                                 {
                                  "backwardYaw": 50.31,
                                  "panorama": {
                                   "hfovMin": 60,
                                   "hfovMax": 120,
                                   "adjacentPanoramas": [
                                    {
                                     "backwardYaw": 133.68,
                                     "panorama": "this.panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09",
                                     "class": "AdjacentPanorama",
                                     "yaw": 50.31,
                                     "distance": 1
                                    },
                                    {
                                     "backwardYaw": 176.05,
                                     "panorama": "this.panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40",
                                     "class": "AdjacentPanorama",
                                     "yaw": -21.44,
                                     "distance": 1
                                    }
                                   ],
                                   "label": "The Study",
                                   "partial": false,
                                   "thumbnailUrl": "media/panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15_t.jpg",
                                   "vfov": 180,
                                   "id": "panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15",
                                   "class": "Panorama",
                                   "hfov": 360,
                                   "frames": [
                                    {
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "id": "overlay_37151184_3AE2_1D87_41A4_96B37465A6B3",
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15_0_HS_1_0_0_map.gif",
                                            "height": 59,
                                            "class": "ImageResourceLevel",
                                            "width": 59
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -18.57,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -21.44,
                                         "hfov": 7.49
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15_0_HS_1_0.png",
                                            "height": 119,
                                            "class": "ImageResourceLevel",
                                            "width": 118
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 7.49,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -18.57,
                                         "yaw": -21.44
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40, this.camera_59E02B89_4805_7FF8_41AE_D31D3DE890BF); this.mainPlayList.set('selectedIndex', 6)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "id": "overlay_34AC048A_3AE2_7B83_41C8_A1A72586D5EF",
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15_0_HS_0_0_0_map.gif",
                                            "height": 59,
                                            "class": "ImageResourceLevel",
                                            "width": 59
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -11.37,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 50.31,
                                         "hfov": 7.75
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15_0_HS_0_0.png",
                                            "height": 119,
                                            "class": "ImageResourceLevel",
                                            "width": 118
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 7.75,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -11.37,
                                         "yaw": 50.31
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09, this.camera_59E44B6C_4805_7F38_41D1_A27CAFCB810B); this.mainPlayList.set('selectedIndex', 8)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ]
                                      },
                                      {
                                       "image": {
                                        "levels": [
                                         {
                                          "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
                                          "height": 1348,
                                          "class": "ImageResourceLevel",
                                          "width": 1348
                                         }
                                        ],
                                        "class": "ImageResource"
                                       },
                                       "id": "panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15_tcap0",
                                       "class": "TripodCapPanoramaOverlay",
                                       "hfov": 34.8,
                                       "angle": 0,
                                       "inertia": false,
                                       "rotate": false
                                      }
                                     ],
                                     "right": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15_r_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15_r.jpeg",
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
                                        "url": "media/panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15_f_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15_f.jpeg",
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
                                        "url": "media/panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15_u_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15_u.jpeg",
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
                                        "url": "media/panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15_d_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15_d.jpeg",
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
                                        "url": "media/panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15_l_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15_l.jpeg",
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
                                        "url": "media/panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15_b_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15_b.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "thumbnailUrl": "media/panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15_t.jpg"
                                    }
                                   ],
                                   "pitch": 0
                                  },
                                  "class": "AdjacentPanorama",
                                  "yaw": 133.68,
                                  "distance": 1
                                 }
                                ],
                                "label": "Living Room",
                                "partial": false,
                                "thumbnailUrl": "media/panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09_t.jpg",
                                "vfov": 180,
                                "id": "panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09",
                                "class": "Panorama",
                                "hfov": 360,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_34C26B44_3AE2_0E87_41C1_63D2449FA3DD",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09_0_HS_2_0_0_map.gif",
                                         "height": 59,
                                         "class": "ImageResourceLevel",
                                         "width": 59
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -6.83,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -104.81,
                                      "hfov": 7.85
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09_0_HS_2_0.png",
                                         "height": 119,
                                         "class": "ImageResourceLevel",
                                         "width": 118
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 7.85,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -6.83,
                                      "yaw": -104.81
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2, this.camera_59628860_4805_7928_41BF_BD18E9C75E95); this.mainPlayList.set('selectedIndex', 1)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_3499BF2A_3AE2_0683_41B5_109174CB0796",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09_0_HS_1_0_0_map.gif",
                                         "height": 59,
                                         "class": "ImageResourceLevel",
                                         "width": 59
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -4.81,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 133.68,
                                      "hfov": 7.87
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09_0_HS_1_0.png",
                                         "height": 119,
                                         "class": "ImageResourceLevel",
                                         "width": 118
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 7.87,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -4.81,
                                      "yaw": 133.68
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15, this.camera_596F2871_4805_7928_41AD_E7D66B357FD2); this.mainPlayList.set('selectedIndex', 7)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_3467F762_3AE2_0683_41BB_17D69EE93D98",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09_0_HS_0_0_0_map.gif",
                                         "height": 59,
                                         "class": "ImageResourceLevel",
                                         "width": 59
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -6.45,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 159.7,
                                      "hfov": 7.85
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09_0_HS_0_0.png",
                                         "height": 119,
                                         "class": "ImageResourceLevel",
                                         "width": 118
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 7.85,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -6.45,
                                      "yaw": 159.7
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
                                       "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
                                       "height": 1348,
                                       "class": "ImageResourceLevel",
                                       "width": 1348
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "id": "panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09_tcap0",
                                    "class": "TripodCapPanoramaOverlay",
                                    "hfov": 34.8,
                                    "angle": 0,
                                    "inertia": false,
                                    "rotate": false
                                   }
                                  ],
                                  "right": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09_r_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09_r.jpeg",
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
                                     "url": "media/panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09_f_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09_f.jpeg",
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
                                     "url": "media/panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09_u_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09_u.jpeg",
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
                                     "url": "media/panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09_d_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09_d.jpeg",
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
                                     "url": "media/panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09_l_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09_l.jpeg",
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
                                     "url": "media/panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09_b_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09_b.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "thumbnailUrl": "media/panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09_t.jpg"
                                 }
                                ],
                                "pitch": 0
                               },
                               "class": "AdjacentPanorama",
                               "yaw": 87.57,
                               "distance": 1
                              },
                              {
                               "backwardYaw": 150.98,
                               "panorama": {
                                "hfovMin": 60,
                                "hfovMax": 120,
                                "adjacentPanoramas": [
                                 {
                                  "backwardYaw": -67.16,
                                  "panorama": {
                                   "hfovMin": 60,
                                   "hfovMax": 120,
                                   "adjacentPanoramas": [
                                    {
                                     "backwardYaw": 59.91,
                                     "panorama": {
                                      "hfovMin": 60,
                                      "hfovMax": 120,
                                      "adjacentPanoramas": [
                                       {
                                        "backwardYaw": 154.39,
                                        "panorama": {
                                         "hfovMin": 60,
                                         "hfovMax": 120,
                                         "adjacentPanoramas": [
                                          {
                                           "backwardYaw": 163.49,
                                           "panorama": "this.panorama_6562AC21_6D09_478E_41D9_C94548C51BE3",
                                           "class": "AdjacentPanorama",
                                           "yaw": -79.29,
                                           "distance": 1
                                          },
                                          {
                                           "backwardYaw": 138.48,
                                           "panorama": "this.panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30",
                                           "class": "AdjacentPanorama",
                                           "yaw": 154.39,
                                           "distance": 1
                                          },
                                          {
                                           "backwardYaw": -7.29,
                                           "panorama": {
                                            "hfovMin": 60,
                                            "hfovMax": 120,
                                            "adjacentPanoramas": [
                                             {
                                              "backwardYaw": 29.85,
                                              "panorama": {
                                               "hfovMin": 60,
                                               "hfovMax": 120,
                                               "adjacentPanoramas": [
                                                {
                                                 "backwardYaw": 79.49,
                                                 "panorama": "this.panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7",
                                                 "class": "AdjacentPanorama",
                                                 "yaw": 29.85,
                                                 "distance": 1
                                                }
                                               ],
                                               "label": "Laundry Room",
                                               "partial": false,
                                               "thumbnailUrl": "media/panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29_t.jpg",
                                               "vfov": 180,
                                               "id": "panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29",
                                               "class": "Panorama",
                                               "hfov": 360,
                                               "frames": [
                                                {
                                                 "overlays": [
                                                  {
                                                   "useHandCursor": true,
                                                   "id": "overlay_28DC4F40_3AEE_06FF_41B6_F4B7F8EB18F2",
                                                   "class": "HotspotPanoramaOverlay",
                                                   "rollOverDisplay": false,
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "url": "media/panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29_0_HS_0_0_0_map.gif",
                                                        "height": 59,
                                                        "class": "ImageResourceLevel",
                                                        "width": 59
                                                       }
                                                      ],
                                                      "class": "ImageResource"
                                                     },
                                                     "pitch": -12.51,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": 29.85,
                                                     "hfov": 7.71
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "url": "media/panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29_0_HS_0_0.png",
                                                        "height": 119,
                                                        "class": "ImageResourceLevel",
                                                        "width": 118
                                                       }
                                                      ],
                                                      "class": "ImageResource"
                                                     },
                                                     "hfov": 7.71,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "pitch": -12.51,
                                                     "yaw": 29.85
                                                    }
                                                   ],
                                                   "enabledInCardboard": true,
                                                   "areas": [
                                                    {
                                                     "mapColor": "#FF0000",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7, this.camera_5961D84C_4805_7978_41D0_3680B941BBCF); this.mainPlayList.set('selectedIndex', 15)",
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "image": {
                                                    "levels": [
                                                     {
                                                      "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
                                                      "height": 1348,
                                                      "class": "ImageResourceLevel",
                                                      "width": 1348
                                                     }
                                                    ],
                                                    "class": "ImageResource"
                                                   },
                                                   "id": "panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29_tcap0",
                                                   "class": "TripodCapPanoramaOverlay",
                                                   "hfov": 34.8,
                                                   "angle": 0,
                                                   "inertia": false,
                                                   "rotate": false
                                                  }
                                                 ],
                                                 "right": {
                                                  "levels": [
                                                   {
                                                    "url": "media/panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29_r_hq.jpeg",
                                                    "height": 1704,
                                                    "class": "ImageResourceLevel",
                                                    "width": 1704
                                                   },
                                                   {
                                                    "url": "media/panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29_r.jpeg",
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
                                                    "url": "media/panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29_f_hq.jpeg",
                                                    "height": 1704,
                                                    "class": "ImageResourceLevel",
                                                    "width": 1704
                                                   },
                                                   {
                                                    "url": "media/panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29_f.jpeg",
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
                                                    "url": "media/panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29_u_hq.jpeg",
                                                    "height": 1704,
                                                    "class": "ImageResourceLevel",
                                                    "width": 1704
                                                   },
                                                   {
                                                    "url": "media/panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29_u.jpeg",
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
                                                    "url": "media/panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29_d_hq.jpeg",
                                                    "height": 1704,
                                                    "class": "ImageResourceLevel",
                                                    "width": 1704
                                                   },
                                                   {
                                                    "url": "media/panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29_d.jpeg",
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
                                                    "url": "media/panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29_l_hq.jpeg",
                                                    "height": 1704,
                                                    "class": "ImageResourceLevel",
                                                    "width": 1704
                                                   },
                                                   {
                                                    "url": "media/panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29_l.jpeg",
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
                                                    "url": "media/panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29_b_hq.jpeg",
                                                    "height": 1704,
                                                    "class": "ImageResourceLevel",
                                                    "width": 1704
                                                   },
                                                   {
                                                    "url": "media/panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29_b.jpeg",
                                                    "height": 1024,
                                                    "class": "ImageResourceLevel",
                                                    "width": 1024
                                                   }
                                                  ],
                                                  "class": "ImageResource"
                                                 },
                                                 "thumbnailUrl": "media/panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29_t.jpg"
                                                }
                                               ],
                                               "pitch": 0
                                              },
                                              "class": "AdjacentPanorama",
                                              "yaw": 79.49,
                                              "distance": 1
                                             },
                                             {
                                              "backwardYaw": 126.35,
                                              "panorama": "this.panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6",
                                              "class": "AdjacentPanorama",
                                              "yaw": -7.29,
                                              "distance": 1
                                             },
                                             {
                                              "backwardYaw": -166.83,
                                              "panorama": "this.panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C",
                                              "class": "AdjacentPanorama",
                                              "yaw": -114.66,
                                              "distance": 1
                                             }
                                            ],
                                            "label": "Basement Hallway",
                                            "partial": false,
                                            "thumbnailUrl": "media/panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7_t.jpg",
                                            "vfov": 180,
                                            "id": "panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7",
                                            "class": "Panorama",
                                            "hfov": 360,
                                            "frames": [
                                             {
                                              "overlays": [
                                               {
                                                "useHandCursor": true,
                                                "id": "overlay_2B3A5A0C_3AE2_0E87_41C8_FF1A034DCEF6",
                                                "class": "HotspotPanoramaOverlay",
                                                "rollOverDisplay": false,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7_0_HS_2_0_0_map.gif",
                                                     "height": 59,
                                                     "class": "ImageResourceLevel",
                                                     "width": 59
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "pitch": 1.26,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -114.66,
                                                  "hfov": 7.9
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7_0_HS_2_0.png",
                                                     "height": 119,
                                                     "class": "ImageResourceLevel",
                                                     "width": 118
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "hfov": 7.9,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": 1.26,
                                                  "yaw": -114.66
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C, this.camera_5A301C55_4805_7968_41C3_09306ED9F7C2); this.mainPlayList.set('selectedIndex', 5)",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ]
                                               },
                                               {
                                                "useHandCursor": true,
                                                "id": "overlay_28E1588B_3AE2_0B81_41B9_D7BEE591B870",
                                                "class": "HotspotPanoramaOverlay",
                                                "rollOverDisplay": false,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7_0_HS_1_0_0_map.gif",
                                                     "height": 59,
                                                     "class": "ImageResourceLevel",
                                                     "width": 59
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "pitch": -11.75,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": 79.49,
                                                  "hfov": 7.74
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7_0_HS_1_0.png",
                                                     "height": 119,
                                                     "class": "ImageResourceLevel",
                                                     "width": 118
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "hfov": 7.74,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": -11.75,
                                                  "yaw": 79.49
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29, this.camera_59CCAC28_4805_7938_41C7_A336185BBB4A); this.mainPlayList.set('selectedIndex', 16)",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ]
                                               },
                                               {
                                                "useHandCursor": true,
                                                "id": "overlay_28B47FE9_3AEE_0581_41BE_A908EA601671",
                                                "class": "HotspotPanoramaOverlay",
                                                "rollOverDisplay": false,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7_0_HS_0_0_0_map.gif",
                                                     "height": 59,
                                                     "class": "ImageResourceLevel",
                                                     "width": 59
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "pitch": -12.38,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -7.29,
                                                  "hfov": 7.72
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7_0_HS_0_0.png",
                                                     "height": 119,
                                                     "class": "ImageResourceLevel",
                                                     "width": 118
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "hfov": 7.72,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": -12.38,
                                                  "yaw": -7.29
                                                 }
                                                ],
                                                "enabledInCardboard": true,
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6, this.camera_59CACC40_4805_7968_4181_0D36C549FE94); this.mainPlayList.set('selectedIndex', 17)",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ]
                                               },
                                               {
                                                "image": {
                                                 "levels": [
                                                  {
                                                   "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
                                                   "height": 1348,
                                                   "class": "ImageResourceLevel",
                                                   "width": 1348
                                                  }
                                                 ],
                                                 "class": "ImageResource"
                                                },
                                                "id": "panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7_tcap0",
                                                "class": "TripodCapPanoramaOverlay",
                                                "hfov": 34.8,
                                                "angle": 0,
                                                "inertia": false,
                                                "rotate": false
                                               }
                                              ],
                                              "right": {
                                               "levels": [
                                                {
                                                 "url": "media/panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7_r_hq.jpeg",
                                                 "height": 1704,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1704
                                                },
                                                {
                                                 "url": "media/panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7_r.jpeg",
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
                                                 "url": "media/panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7_f_hq.jpeg",
                                                 "height": 1704,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1704
                                                },
                                                {
                                                 "url": "media/panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7_f.jpeg",
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
                                                 "url": "media/panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7_u_hq.jpeg",
                                                 "height": 1704,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1704
                                                },
                                                {
                                                 "url": "media/panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7_u.jpeg",
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
                                                 "url": "media/panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7_d_hq.jpeg",
                                                 "height": 1704,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1704
                                                },
                                                {
                                                 "url": "media/panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7_d.jpeg",
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
                                                 "url": "media/panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7_l_hq.jpeg",
                                                 "height": 1704,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1704
                                                },
                                                {
                                                 "url": "media/panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7_l.jpeg",
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
                                                 "url": "media/panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7_b_hq.jpeg",
                                                 "height": 1704,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1704
                                                },
                                                {
                                                 "url": "media/panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7_b.jpeg",
                                                 "height": 1024,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1024
                                                }
                                               ],
                                               "class": "ImageResource"
                                              },
                                              "thumbnailUrl": "media/panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7_t.jpg"
                                             }
                                            ],
                                            "pitch": 0
                                           },
                                           "class": "AdjacentPanorama",
                                           "yaw": 126.35,
                                           "distance": 1
                                          }
                                         ],
                                         "label": "Basement Hallway 2",
                                         "partial": false,
                                         "thumbnailUrl": "media/panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6_t.jpg",
                                         "vfov": 180,
                                         "id": "panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6",
                                         "class": "Panorama",
                                         "hfov": 360,
                                         "frames": [
                                          {
                                           "overlays": [
                                            {
                                             "useHandCursor": true,
                                             "id": "overlay_28BD92C5_3AEE_1F81_41B4_124CD553C120",
                                             "class": "HotspotPanoramaOverlay",
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6_0_HS_2_0_0_map.gif",
                                                  "height": 59,
                                                  "class": "ImageResourceLevel",
                                                  "width": 59
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "pitch": -14.91,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -79.29,
                                               "hfov": 7.64
                                              }
                                             ],
                                             "items": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6_0_HS_2_0.png",
                                                  "height": 119,
                                                  "class": "ImageResourceLevel",
                                                  "width": 118
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "hfov": 7.64,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -14.91,
                                               "yaw": -79.29
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_6562AC21_6D09_478E_41D9_C94548C51BE3, this.camera_59F17B13_4805_78E8_4176_171033D80FE0); this.mainPlayList.set('selectedIndex', 19)",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ]
                                            },
                                            {
                                             "useHandCursor": true,
                                             "id": "overlay_28778AFD_3AEE_0F81_41CC_78B99F88C14B",
                                             "class": "HotspotPanoramaOverlay",
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6_0_HS_1_0_0_map.gif",
                                                  "height": 59,
                                                  "class": "ImageResourceLevel",
                                                  "width": 59
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "pitch": -8.22,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 126.35,
                                               "hfov": 7.82
                                              }
                                             ],
                                             "items": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6_0_HS_1_0.png",
                                                  "height": 119,
                                                  "class": "ImageResourceLevel",
                                                  "width": 118
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "hfov": 7.82,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -8.22,
                                               "yaw": 126.35
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7, this.camera_59F8BB4A_4805_7F78_41C4_DDC231CE8453); this.mainPlayList.set('selectedIndex', 15)",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ]
                                            },
                                            {
                                             "useHandCursor": true,
                                             "id": "overlay_2845F50F_3AE2_FA81_41C9_084A7BC02B89",
                                             "class": "HotspotPanoramaOverlay",
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6_0_HS_0_0_0_map.gif",
                                                  "height": 59,
                                                  "class": "ImageResourceLevel",
                                                  "width": 59
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "pitch": -12.64,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 154.39,
                                               "hfov": 7.71
                                              }
                                             ],
                                             "items": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6_0_HS_0_0.png",
                                                  "height": 119,
                                                  "class": "ImageResourceLevel",
                                                  "width": 118
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "hfov": 7.71,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -12.64,
                                               "yaw": 154.39
                                              }
                                             ],
                                             "enabledInCardboard": true,
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30, this.camera_59FD3B32_4805_7F29_4192_13F55417F9A8); this.mainPlayList.set('selectedIndex', 18)",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ]
                                            },
                                            {
                                             "image": {
                                              "levels": [
                                               {
                                                "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
                                                "height": 1348,
                                                "class": "ImageResourceLevel",
                                                "width": 1348
                                               }
                                              ],
                                              "class": "ImageResource"
                                             },
                                             "id": "panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6_tcap0",
                                             "class": "TripodCapPanoramaOverlay",
                                             "hfov": 34.8,
                                             "angle": 0,
                                             "inertia": false,
                                             "rotate": false
                                            }
                                           ],
                                           "right": {
                                            "levels": [
                                             {
                                              "url": "media/panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6_r_hq.jpeg",
                                              "height": 1704,
                                              "class": "ImageResourceLevel",
                                              "width": 1704
                                             },
                                             {
                                              "url": "media/panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6_r.jpeg",
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
                                              "url": "media/panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6_f_hq.jpeg",
                                              "height": 1704,
                                              "class": "ImageResourceLevel",
                                              "width": 1704
                                             },
                                             {
                                              "url": "media/panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6_f.jpeg",
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
                                              "url": "media/panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6_u_hq.jpeg",
                                              "height": 1704,
                                              "class": "ImageResourceLevel",
                                              "width": 1704
                                             },
                                             {
                                              "url": "media/panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6_u.jpeg",
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
                                              "url": "media/panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6_d_hq.jpeg",
                                              "height": 1704,
                                              "class": "ImageResourceLevel",
                                              "width": 1704
                                             },
                                             {
                                              "url": "media/panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6_d.jpeg",
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
                                              "url": "media/panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6_l_hq.jpeg",
                                              "height": 1704,
                                              "class": "ImageResourceLevel",
                                              "width": 1704
                                             },
                                             {
                                              "url": "media/panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6_l.jpeg",
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
                                              "url": "media/panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6_b_hq.jpeg",
                                              "height": 1704,
                                              "class": "ImageResourceLevel",
                                              "width": 1704
                                             },
                                             {
                                              "url": "media/panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6_b.jpeg",
                                              "height": 1024,
                                              "class": "ImageResourceLevel",
                                              "width": 1024
                                             }
                                            ],
                                            "class": "ImageResource"
                                           },
                                           "thumbnailUrl": "media/panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6_t.jpg"
                                          }
                                         ],
                                         "pitch": 0
                                        },
                                        "class": "AdjacentPanorama",
                                        "yaw": 138.48,
                                        "distance": 1
                                       },
                                       {
                                        "backwardYaw": -152.3,
                                        "panorama": "this.panorama_6562AC21_6D09_478E_41D9_C94548C51BE3",
                                        "class": "AdjacentPanorama",
                                        "yaw": 59.91,
                                        "distance": 1
                                       }
                                      ],
                                      "label": "Workout Room",
                                      "partial": false,
                                      "thumbnailUrl": "media/panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30_t.jpg",
                                      "vfov": 180,
                                      "id": "panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30",
                                      "class": "Panorama",
                                      "hfov": 360,
                                      "frames": [
                                       {
                                        "overlays": [
                                         {
                                          "useHandCursor": true,
                                          "id": "overlay_2865E07D_3AE1_FA81_41C3_2CE3613CF272",
                                          "class": "HotspotPanoramaOverlay",
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30_0_HS_1_0_0_map.gif",
                                               "height": 59,
                                               "class": "ImageResourceLevel",
                                               "width": 59
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -14.66,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 59.91,
                                            "hfov": 7.64
                                           }
                                          ],
                                          "items": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30_0_HS_1_0.png",
                                               "height": 119,
                                               "class": "ImageResourceLevel",
                                               "width": 118
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "hfov": 7.64,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -14.66,
                                            "yaw": 59.91
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_6562AC21_6D09_478E_41D9_C94548C51BE3, this.camera_59EAABB5_4805_7F28_41C4_9EB37F1742EA); this.mainPlayList.set('selectedIndex', 19)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ]
                                         },
                                         {
                                          "useHandCursor": true,
                                          "id": "overlay_29C4220E_3AE2_3E83_41B6_D94AF75EFB6E",
                                          "class": "HotspotPanoramaOverlay",
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30_0_HS_0_0_0_map.gif",
                                               "height": 59,
                                               "class": "ImageResourceLevel",
                                               "width": 59
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -13.27,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 138.48,
                                            "hfov": 7.69
                                           }
                                          ],
                                          "items": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30_0_HS_0_0.png",
                                               "height": 119,
                                               "class": "ImageResourceLevel",
                                               "width": 118
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "hfov": 7.69,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -13.27,
                                            "yaw": 138.48
                                           }
                                          ],
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6, this.camera_59EFDBA0_4805_7F28_41BF_4F0421434698); this.mainPlayList.set('selectedIndex', 17)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ]
                                         },
                                         {
                                          "image": {
                                           "levels": [
                                            {
                                             "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
                                             "height": 1348,
                                             "class": "ImageResourceLevel",
                                             "width": 1348
                                            }
                                           ],
                                           "class": "ImageResource"
                                          },
                                          "id": "panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30_tcap0",
                                          "class": "TripodCapPanoramaOverlay",
                                          "hfov": 34.8,
                                          "angle": 0,
                                          "inertia": false,
                                          "rotate": false
                                         }
                                        ],
                                        "right": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30_r_hq.jpeg",
                                           "height": 1704,
                                           "class": "ImageResourceLevel",
                                           "width": 1704
                                          },
                                          {
                                           "url": "media/panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30_r.jpeg",
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
                                           "url": "media/panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30_f_hq.jpeg",
                                           "height": 1704,
                                           "class": "ImageResourceLevel",
                                           "width": 1704
                                          },
                                          {
                                           "url": "media/panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30_f.jpeg",
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
                                           "url": "media/panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30_u_hq.jpeg",
                                           "height": 1704,
                                           "class": "ImageResourceLevel",
                                           "width": 1704
                                          },
                                          {
                                           "url": "media/panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30_u.jpeg",
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
                                           "url": "media/panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30_d_hq.jpeg",
                                           "height": 1704,
                                           "class": "ImageResourceLevel",
                                           "width": 1704
                                          },
                                          {
                                           "url": "media/panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30_d.jpeg",
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
                                           "url": "media/panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30_l_hq.jpeg",
                                           "height": 1704,
                                           "class": "ImageResourceLevel",
                                           "width": 1704
                                          },
                                          {
                                           "url": "media/panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30_l.jpeg",
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
                                           "url": "media/panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30_b_hq.jpeg",
                                           "height": 1704,
                                           "class": "ImageResourceLevel",
                                           "width": 1704
                                          },
                                          {
                                           "url": "media/panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30_b.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "thumbnailUrl": "media/panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30_t.jpg"
                                       }
                                      ],
                                      "pitch": 0
                                     },
                                     "class": "AdjacentPanorama",
                                     "yaw": -152.3,
                                     "distance": 1
                                    },
                                    {
                                     "backwardYaw": -79.29,
                                     "panorama": "this.panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6",
                                     "class": "AdjacentPanorama",
                                     "yaw": 163.49,
                                     "distance": 1
                                    },
                                    {
                                     "backwardYaw": 69.38,
                                     "panorama": "this.panorama_6562D802_6D09_4F93_41B4_E5E3A306C515",
                                     "class": "AdjacentPanorama",
                                     "yaw": -67.16,
                                     "distance": 1
                                    }
                                   ],
                                   "label": "The Basement",
                                   "partial": false,
                                   "thumbnailUrl": "media/panorama_6562AC21_6D09_478E_41D9_C94548C51BE3_t.jpg",
                                   "vfov": 180,
                                   "id": "panorama_6562AC21_6D09_478E_41D9_C94548C51BE3",
                                   "class": "Panorama",
                                   "hfov": 360,
                                   "frames": [
                                    {
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "id": "overlay_29E1068B_3AE2_0781_41C5_8AF35978CEC7",
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_6562AC21_6D09_478E_41D9_C94548C51BE3_0_HS_2_0_0_map.gif",
                                            "height": 59,
                                            "class": "ImageResourceLevel",
                                            "width": 59
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": 3.66,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -67.16,
                                         "hfov": 7.89
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_6562AC21_6D09_478E_41D9_C94548C51BE3_0_HS_2_0.png",
                                            "height": 119,
                                            "class": "ImageResourceLevel",
                                            "width": 118
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 7.89,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": 3.66,
                                         "yaw": -67.16
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "toolTip": "Back upstairs",
                                         "click": "this.startPanoramaWithCamera(this.panorama_6562D802_6D09_4F93_41B4_E5E3A306C515, this.camera_5982DAA8_4805_7938_41C4_DCDFB6B50F53); this.mainPlayList.set('selectedIndex', 20)",
                                         "displayTooltipInTouchScreens": true
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "id": "overlay_2975FB07_3AE2_0E81_41AC_C13B59215BD4",
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_6562AC21_6D09_478E_41D9_C94548C51BE3_0_HS_1_0_0_map.gif",
                                            "height": 59,
                                            "class": "ImageResourceLevel",
                                            "width": 59
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -6.32,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -152.3,
                                         "hfov": 7.85
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_6562AC21_6D09_478E_41D9_C94548C51BE3_0_HS_1_0.png",
                                            "height": 119,
                                            "class": "ImageResourceLevel",
                                            "width": 118
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 7.85,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -6.32,
                                         "yaw": -152.3
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30, this.camera_599BBA6B_4805_7938_41C5_EB759108C474); this.mainPlayList.set('selectedIndex', 18)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "id": "overlay_2953FDFD_3AE6_0581_41C3_D9B291F22D6B",
                                       "class": "HotspotPanoramaOverlay",
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_6562AC21_6D09_478E_41D9_C94548C51BE3_0_HS_0_0_0_map.gif",
                                            "height": 59,
                                            "class": "ImageResourceLevel",
                                            "width": 59
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -8.97,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 163.49,
                                         "hfov": 7.81
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_6562AC21_6D09_478E_41D9_C94548C51BE3_0_HS_0_0.png",
                                            "height": 119,
                                            "class": "ImageResourceLevel",
                                            "width": 118
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "hfov": 7.81,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -8.97,
                                         "yaw": 163.49
                                        }
                                       ],
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6, this.camera_59871A8A_4805_79F8_41CF_9E3A49047FE0); this.mainPlayList.set('selectedIndex', 17)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ]
                                      },
                                      {
                                       "image": {
                                        "levels": [
                                         {
                                          "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
                                          "height": 1348,
                                          "class": "ImageResourceLevel",
                                          "width": 1348
                                         }
                                        ],
                                        "class": "ImageResource"
                                       },
                                       "id": "panorama_6562AC21_6D09_478E_41D9_C94548C51BE3_tcap0",
                                       "class": "TripodCapPanoramaOverlay",
                                       "hfov": 34.8,
                                       "angle": 0,
                                       "inertia": false,
                                       "rotate": false
                                      }
                                     ],
                                     "right": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_6562AC21_6D09_478E_41D9_C94548C51BE3_r_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_6562AC21_6D09_478E_41D9_C94548C51BE3_r.jpeg",
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
                                        "url": "media/panorama_6562AC21_6D09_478E_41D9_C94548C51BE3_f_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_6562AC21_6D09_478E_41D9_C94548C51BE3_f.jpeg",
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
                                        "url": "media/panorama_6562AC21_6D09_478E_41D9_C94548C51BE3_u_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_6562AC21_6D09_478E_41D9_C94548C51BE3_u.jpeg",
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
                                        "url": "media/panorama_6562AC21_6D09_478E_41D9_C94548C51BE3_d_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_6562AC21_6D09_478E_41D9_C94548C51BE3_d.jpeg",
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
                                        "url": "media/panorama_6562AC21_6D09_478E_41D9_C94548C51BE3_l_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_6562AC21_6D09_478E_41D9_C94548C51BE3_l.jpeg",
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
                                        "url": "media/panorama_6562AC21_6D09_478E_41D9_C94548C51BE3_b_hq.jpeg",
                                        "height": 1704,
                                        "class": "ImageResourceLevel",
                                        "width": 1704
                                       },
                                       {
                                        "url": "media/panorama_6562AC21_6D09_478E_41D9_C94548C51BE3_b.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "thumbnailUrl": "media/panorama_6562AC21_6D09_478E_41D9_C94548C51BE3_t.jpg"
                                    }
                                   ],
                                   "pitch": 0
                                  },
                                  "class": "AdjacentPanorama",
                                  "yaw": 69.38,
                                  "distance": 1
                                 },
                                 {
                                  "backwardYaw": -162.91,
                                  "panorama": "this.panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2",
                                  "class": "AdjacentPanorama",
                                  "yaw": 150.98,
                                  "distance": 1
                                 }
                                ],
                                "label": "Basement Stairs",
                                "partial": false,
                                "thumbnailUrl": "media/panorama_6562D802_6D09_4F93_41B4_E5E3A306C515_t.jpg",
                                "vfov": 180,
                                "id": "panorama_6562D802_6D09_4F93_41B4_E5E3A306C515",
                                "class": "Panorama",
                                "hfov": 360,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_29460EC0_3AE6_07FF_41C6_467BFA9473BE",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_6562D802_6D09_4F93_41B4_E5E3A306C515_0_HS_1_0_0_map.gif",
                                         "height": 59,
                                         "class": "ImageResourceLevel",
                                         "width": 59
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -42.57,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 69.38,
                                      "hfov": 5.82
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_6562D802_6D09_4F93_41B4_E5E3A306C515_0_HS_1_0.png",
                                         "height": 119,
                                         "class": "ImageResourceLevel",
                                         "width": 118
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 5.82,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -42.57,
                                      "yaw": 69.38
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_6562AC21_6D09_478E_41D9_C94548C51BE3, this.camera_5A6EAD93_4805_7BE8_4195_78EC19B853C7); this.mainPlayList.set('selectedIndex', 19)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_290E1827_3AE6_0A81_41B4_4307B134CEA3",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_6562D802_6D09_4F93_41B4_E5E3A306C515_0_HS_0_0_0_map.gif",
                                         "height": 59,
                                         "class": "ImageResourceLevel",
                                         "width": 59
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": 14.65,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 150.98,
                                      "hfov": 7.64
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_6562D802_6D09_4F93_41B4_E5E3A306C515_0_HS_0_0.png",
                                         "height": 119,
                                         "class": "ImageResourceLevel",
                                         "width": 118
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 7.64,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": 14.65,
                                      "yaw": 150.98
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2, this.camera_5A574DB6_4805_7B28_41B1_2E838D640E64); this.mainPlayList.set('selectedIndex', 1)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ]
                                   },
                                   {
                                    "image": {
                                     "levels": [
                                      {
                                       "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
                                       "height": 1348,
                                       "class": "ImageResourceLevel",
                                       "width": 1348
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "id": "panorama_6562D802_6D09_4F93_41B4_E5E3A306C515_tcap0",
                                    "class": "TripodCapPanoramaOverlay",
                                    "hfov": 34.8,
                                    "angle": 0,
                                    "inertia": false,
                                    "rotate": false
                                   }
                                  ],
                                  "right": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_6562D802_6D09_4F93_41B4_E5E3A306C515_r_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_6562D802_6D09_4F93_41B4_E5E3A306C515_r.jpeg",
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
                                     "url": "media/panorama_6562D802_6D09_4F93_41B4_E5E3A306C515_f_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_6562D802_6D09_4F93_41B4_E5E3A306C515_f.jpeg",
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
                                     "url": "media/panorama_6562D802_6D09_4F93_41B4_E5E3A306C515_u_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_6562D802_6D09_4F93_41B4_E5E3A306C515_u.jpeg",
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
                                     "url": "media/panorama_6562D802_6D09_4F93_41B4_E5E3A306C515_d_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_6562D802_6D09_4F93_41B4_E5E3A306C515_d.jpeg",
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
                                     "url": "media/panorama_6562D802_6D09_4F93_41B4_E5E3A306C515_l_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_6562D802_6D09_4F93_41B4_E5E3A306C515_l.jpeg",
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
                                     "url": "media/panorama_6562D802_6D09_4F93_41B4_E5E3A306C515_b_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_6562D802_6D09_4F93_41B4_E5E3A306C515_b.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "thumbnailUrl": "media/panorama_6562D802_6D09_4F93_41B4_E5E3A306C515_t.jpg"
                                 }
                                ],
                                "pitch": 0
                               },
                               "class": "AdjacentPanorama",
                               "yaw": -162.91,
                               "distance": 1
                              }
                             ],
                             "label": "House Entrance",
                             "partial": false,
                             "thumbnailUrl": "media/panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_t.jpg",
                             "vfov": 180,
                             "id": "panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2",
                             "class": "Panorama",
                             "hfov": 360,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_335F9860_3AE2_0ABF_41CC_C96DD0EA8B87",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_0_HS_4_0_0_map.gif",
                                      "height": 59,
                                      "class": "ImageResourceLevel",
                                      "width": 59
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": 0.88,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -24.47,
                                   "hfov": 7.9
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_0_HS_4_0.png",
                                      "height": 119,
                                      "class": "ImageResourceLevel",
                                      "width": 118
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.9,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": 0.88,
                                   "yaw": -24.47
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "toolTip": "Back to the front",
                                   "click": "this.startPanoramaWithCamera(this.panorama_6562E38C_6D09_4096_41B1_734A673DC584, this.camera_59A919F7_4805_7B28_41A0_28F454035E2F); this.mainPlayList.set('selectedIndex', 0)",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_30D15241_3AE6_1E81_41C1_F65ABB7CFD68",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_0_HS_3_0_0_map.gif",
                                      "height": 59,
                                      "class": "ImageResourceLevel",
                                      "width": 59
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -10.24,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -162.91,
                                   "hfov": 7.78
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_0_HS_3_0.png",
                                      "height": 119,
                                      "class": "ImageResourceLevel",
                                      "width": 118
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.78,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -10.24,
                                   "yaw": -162.91
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "toolTip": "The Basement",
                                   "click": "this.startPanoramaWithCamera(this.panorama_6562D802_6D09_4F93_41B4_E5E3A306C515, this.camera_59909A35_4805_7928_41CB_9224BD984128); this.mainPlayList.set('selectedIndex', 20)",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_30724768_3AE6_068F_41C6_D0F41C2EC9C8",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_0_HS_2_0_0_map.gif",
                                      "height": 59,
                                      "class": "ImageResourceLevel",
                                      "width": 59
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": 1.13,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -127.92,
                                   "hfov": 7.9
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_0_HS_2_0.png",
                                      "height": 119,
                                      "class": "ImageResourceLevel",
                                      "width": 118
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.9,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": 1.13,
                                   "yaw": -127.92
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "toolTip": "Upstairs Bedrooms",
                                   "click": "this.startPanoramaWithCamera(this.panorama_656250A8_6D0B_409F_41A9_53EF98C75F40, this.camera_59A619CF_4805_7B78_41A3_CC17940FF005); this.mainPlayList.set('selectedIndex', 9)",
                                   "displayTooltipInTouchScreens": true
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_302102D9_3AE2_1F81_41B4_7882DC0B74A8",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_0_HS_1_0_0_map.gif",
                                      "height": 59,
                                      "class": "ImageResourceLevel",
                                      "width": 59
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -11.5,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 87.57,
                                   "hfov": 7.74
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_0_HS_1_0.png",
                                      "height": 119,
                                      "class": "ImageResourceLevel",
                                      "width": 118
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.74,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -11.5,
                                   "yaw": 87.57
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09, this.camera_5994EA15_4805_78E8_41A6_E00F05141E98); this.mainPlayList.set('selectedIndex', 8)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_303C721A_3AE2_1E83_41BB_881E9269A81C",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_0_HS_0_0_0_map.gif",
                                      "height": 59,
                                      "class": "ImageResourceLevel",
                                      "width": 59
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -6.45,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 137.59,
                                   "hfov": 7.85
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_0_HS_0_0.png",
                                      "height": 119,
                                      "class": "ImageResourceLevel",
                                      "width": 118
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.85,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -6.45,
                                   "yaw": 137.59
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF, this.camera_59ADA9E7_4805_7B28_41CB_E470001AE984); this.mainPlayList.set('selectedIndex', 2)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ]
                                },
                                {
                                 "image": {
                                  "levels": [
                                   {
                                    "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
                                    "height": 1348,
                                    "class": "ImageResourceLevel",
                                    "width": 1348
                                   }
                                  ],
                                  "class": "ImageResource"
                                 },
                                 "id": "panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_tcap0",
                                 "class": "TripodCapPanoramaOverlay",
                                 "hfov": 34.8,
                                 "angle": 0,
                                 "inertia": false,
                                 "rotate": false
                                }
                               ],
                               "right": {
                                "levels": [
                                 {
                                  "url": "media/panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_r_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_r.jpeg",
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
                                  "url": "media/panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_f_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_f.jpeg",
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
                                  "url": "media/panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_u_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_u.jpeg",
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
                                  "url": "media/panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_d_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_d.jpeg",
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
                                  "url": "media/panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_l_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_l.jpeg",
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
                                  "url": "media/panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_b_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_b.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "thumbnailUrl": "media/panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_t.jpg"
                              }
                             ],
                             "pitch": 0
                            },
                            "class": "AdjacentPanorama",
                            "yaw": -123.88,
                            "distance": 1
                           },
                           {
                            "backwardYaw": -127.29,
                            "panorama": {
                             "hfovMin": 60,
                             "hfovMax": 120,
                             "adjacentPanoramas": [
                              {
                               "backwardYaw": -158.11,
                               "panorama": "this.panorama_656250A8_6D0B_409F_41A9_53EF98C75F40",
                               "class": "AdjacentPanorama",
                               "yaw": -127.29,
                               "distance": 1
                              }
                             ],
                             "label": "Bedroom",
                             "partial": false,
                             "thumbnailUrl": "media/panorama_65624F53_6D0B_41B1_41D7_A67528B4B074_t.jpg",
                             "vfov": 180,
                             "id": "panorama_65624F53_6D0B_41B1_41D7_A67528B4B074",
                             "class": "Panorama",
                             "hfov": 360,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_35E7BC5B_3AE2_0A81_41B0_E7746B65E1D9",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_65624F53_6D0B_41B1_41D7_A67528B4B074_0_HS_0_0_0_map.gif",
                                      "height": 59,
                                      "class": "ImageResourceLevel",
                                      "width": 59
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -5.94,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -127.29,
                                   "hfov": 7.86
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_65624F53_6D0B_41B1_41D7_A67528B4B074_0_HS_0_0.png",
                                      "height": 119,
                                      "class": "ImageResourceLevel",
                                      "width": 118
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.86,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -5.94,
                                   "yaw": -127.29
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_656250A8_6D0B_409F_41A9_53EF98C75F40, this.camera_59C76C11_4805_78E8_41D1_2937866BEF57); this.mainPlayList.set('selectedIndex', 9)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ]
                                },
                                {
                                 "image": {
                                  "levels": [
                                   {
                                    "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
                                    "height": 1348,
                                    "class": "ImageResourceLevel",
                                    "width": 1348
                                   }
                                  ],
                                  "class": "ImageResource"
                                 },
                                 "id": "panorama_65624F53_6D0B_41B1_41D7_A67528B4B074_tcap0",
                                 "class": "TripodCapPanoramaOverlay",
                                 "hfov": 34.8,
                                 "angle": 0,
                                 "inertia": false,
                                 "rotate": false
                                }
                               ],
                               "right": {
                                "levels": [
                                 {
                                  "url": "media/panorama_65624F53_6D0B_41B1_41D7_A67528B4B074_r_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_65624F53_6D0B_41B1_41D7_A67528B4B074_r.jpeg",
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
                                  "url": "media/panorama_65624F53_6D0B_41B1_41D7_A67528B4B074_f_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_65624F53_6D0B_41B1_41D7_A67528B4B074_f.jpeg",
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
                                  "url": "media/panorama_65624F53_6D0B_41B1_41D7_A67528B4B074_u_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_65624F53_6D0B_41B1_41D7_A67528B4B074_u.jpeg",
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
                                  "url": "media/panorama_65624F53_6D0B_41B1_41D7_A67528B4B074_d_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_65624F53_6D0B_41B1_41D7_A67528B4B074_d.jpeg",
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
                                  "url": "media/panorama_65624F53_6D0B_41B1_41D7_A67528B4B074_l_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_65624F53_6D0B_41B1_41D7_A67528B4B074_l.jpeg",
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
                                  "url": "media/panorama_65624F53_6D0B_41B1_41D7_A67528B4B074_b_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_65624F53_6D0B_41B1_41D7_A67528B4B074_b.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "thumbnailUrl": "media/panorama_65624F53_6D0B_41B1_41D7_A67528B4B074_t.jpg"
                              }
                             ],
                             "pitch": 0
                            },
                            "class": "AdjacentPanorama",
                            "yaw": -158.11,
                            "distance": 1
                           },
                           {
                            "backwardYaw": -93.82,
                            "panorama": {
                             "hfovMin": 60,
                             "hfovMax": 120,
                             "adjacentPanoramas": [
                              {
                               "backwardYaw": -89.52,
                               "panorama": {
                                "hfovMin": 60,
                                "hfovMax": 120,
                                "adjacentPanoramas": [
                                 {
                                  "backwardYaw": 106.65,
                                  "panorama": "this.panorama_65622DBC_6D08_C0F6_41D3_F146DA631282",
                                  "class": "AdjacentPanorama",
                                  "yaw": -89.52,
                                  "distance": 1
                                 }
                                ],
                                "label": "2nd Floor Bathroom",
                                "partial": false,
                                "thumbnailUrl": "media/panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB_t.jpg",
                                "vfov": 180,
                                "id": "panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB",
                                "class": "Panorama",
                                "hfov": 360,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_2B9DFCD9_3AE6_0B80_4198_2C80E2EB1553",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB_0_HS_0_0_0_map.gif",
                                         "height": 59,
                                         "class": "ImageResourceLevel",
                                         "width": 59
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -16.55,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -89.52,
                                      "hfov": 7.57
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB_0_HS_0_0.png",
                                         "height": 119,
                                         "class": "ImageResourceLevel",
                                         "width": 118
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 7.57,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -16.55,
                                      "yaw": -89.52
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_65622DBC_6D08_C0F6_41D3_F146DA631282, this.camera_5A1DFCF2_4805_7929_41A8_385B17C8CB82); this.mainPlayList.set('selectedIndex', 11)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ]
                                   },
                                   {
                                    "image": {
                                     "levels": [
                                      {
                                       "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
                                       "height": 1348,
                                       "class": "ImageResourceLevel",
                                       "width": 1348
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "id": "panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB_tcap0",
                                    "class": "TripodCapPanoramaOverlay",
                                    "hfov": 34.8,
                                    "angle": 0,
                                    "inertia": false,
                                    "rotate": false
                                   }
                                  ],
                                  "right": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB_r_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB_r.jpeg",
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
                                     "url": "media/panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB_f_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB_f.jpeg",
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
                                     "url": "media/panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB_u_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB_u.jpeg",
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
                                     "url": "media/panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB_d_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB_d.jpeg",
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
                                     "url": "media/panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB_l_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB_l.jpeg",
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
                                     "url": "media/panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB_b_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB_b.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "thumbnailUrl": "media/panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB_t.jpg"
                                 }
                                ],
                                "pitch": 0
                               },
                               "class": "AdjacentPanorama",
                               "yaw": 106.65,
                               "distance": 1
                              },
                              {
                               "backwardYaw": 99.57,
                               "panorama": "this.panorama_656250A8_6D0B_409F_41A9_53EF98C75F40",
                               "class": "AdjacentPanorama",
                               "yaw": -93.82,
                               "distance": 1
                              },
                              {
                               "backwardYaw": -162.79,
                               "panorama": {
                                "hfovMin": 60,
                                "hfovMax": 120,
                                "adjacentPanoramas": [
                                 {
                                  "backwardYaw": 26.94,
                                  "panorama": "this.panorama_65622DBC_6D08_C0F6_41D3_F146DA631282",
                                  "class": "AdjacentPanorama",
                                  "yaw": -162.79,
                                  "distance": 1
                                 }
                                ],
                                "label": "Bedroom 2",
                                "partial": false,
                                "thumbnailUrl": "media/panorama_65621A24_6D08_C397_41C1_D09D0DC22043_t.jpg",
                                "vfov": 180,
                                "id": "panorama_65621A24_6D08_C397_41C1_D09D0DC22043",
                                "class": "Panorama",
                                "hfov": 360,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "id": "overlay_2B646F5D_3AE6_0681_41CB_A0DBB4F7A3D7",
                                    "class": "HotspotPanoramaOverlay",
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_65621A24_6D08_C397_41C1_D09D0DC22043_0_HS_0_0_0_map.gif",
                                         "height": 59,
                                         "class": "ImageResourceLevel",
                                         "width": 59
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -10.49,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -162.79,
                                      "hfov": 7.77
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_65621A24_6D08_C397_41C1_D09D0DC22043_0_HS_0_0.png",
                                         "height": 119,
                                         "class": "ImageResourceLevel",
                                         "width": 118
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 7.77,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -10.49,
                                      "yaw": -162.79
                                     }
                                    ],
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_65622DBC_6D08_C0F6_41D3_F146DA631282, this.camera_599C1A4E_4805_7978_41C9_9F67E38A236B); this.mainPlayList.set('selectedIndex', 11)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ]
                                   },
                                   {
                                    "image": {
                                     "levels": [
                                      {
                                       "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
                                       "height": 1348,
                                       "class": "ImageResourceLevel",
                                       "width": 1348
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "id": "panorama_65621A24_6D08_C397_41C1_D09D0DC22043_tcap0",
                                    "class": "TripodCapPanoramaOverlay",
                                    "hfov": 34.8,
                                    "angle": 0,
                                    "inertia": false,
                                    "rotate": false
                                   }
                                  ],
                                  "right": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_65621A24_6D08_C397_41C1_D09D0DC22043_r_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_65621A24_6D08_C397_41C1_D09D0DC22043_r.jpeg",
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
                                     "url": "media/panorama_65621A24_6D08_C397_41C1_D09D0DC22043_f_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_65621A24_6D08_C397_41C1_D09D0DC22043_f.jpeg",
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
                                     "url": "media/panorama_65621A24_6D08_C397_41C1_D09D0DC22043_u_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_65621A24_6D08_C397_41C1_D09D0DC22043_u.jpeg",
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
                                     "url": "media/panorama_65621A24_6D08_C397_41C1_D09D0DC22043_d_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_65621A24_6D08_C397_41C1_D09D0DC22043_d.jpeg",
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
                                     "url": "media/panorama_65621A24_6D08_C397_41C1_D09D0DC22043_l_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_65621A24_6D08_C397_41C1_D09D0DC22043_l.jpeg",
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
                                     "url": "media/panorama_65621A24_6D08_C397_41C1_D09D0DC22043_b_hq.jpeg",
                                     "height": 1704,
                                     "class": "ImageResourceLevel",
                                     "width": 1704
                                    },
                                    {
                                     "url": "media/panorama_65621A24_6D08_C397_41C1_D09D0DC22043_b.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "thumbnailUrl": "media/panorama_65621A24_6D08_C397_41C1_D09D0DC22043_t.jpg"
                                 }
                                ],
                                "pitch": 0
                               },
                               "class": "AdjacentPanorama",
                               "yaw": 26.94,
                               "distance": 1
                              }
                             ],
                             "label": "2nd Floor Bedroom Hallway",
                             "partial": false,
                             "thumbnailUrl": "media/panorama_65622DBC_6D08_C0F6_41D3_F146DA631282_t.jpg",
                             "vfov": 180,
                             "id": "panorama_65622DBC_6D08_C0F6_41D3_F146DA631282",
                             "class": "Panorama",
                             "hfov": 360,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_2BE94D65_3AE6_0A81_41C6_B312E7513757",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_65622DBC_6D08_C0F6_41D3_F146DA631282_0_HS_2_0_0_map.gif",
                                      "height": 59,
                                      "class": "ImageResourceLevel",
                                      "width": 59
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -14.28,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -93.82,
                                   "hfov": 7.66
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_65622DBC_6D08_C0F6_41D3_F146DA631282_0_HS_2_0.png",
                                      "height": 119,
                                      "class": "ImageResourceLevel",
                                      "width": 118
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.66,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -14.28,
                                   "yaw": -93.82
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_656250A8_6D0B_409F_41A9_53EF98C75F40, this.camera_595ED8D4_4805_7968_41CD_84F61C630055); this.mainPlayList.set('selectedIndex', 9)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_2B95E796_3AE6_0583_41AF_CF6B2C246DB8",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_65622DBC_6D08_C0F6_41D3_F146DA631282_0_HS_1_0_0_map.gif",
                                      "height": 59,
                                      "class": "ImageResourceLevel",
                                      "width": 59
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -14.03,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 26.94,
                                   "hfov": 7.67
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_65622DBC_6D08_C0F6_41D3_F146DA631282_0_HS_1_0.png",
                                      "height": 119,
                                      "class": "ImageResourceLevel",
                                      "width": 118
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.67,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -14.03,
                                   "yaw": 26.94
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_65621A24_6D08_C397_41C1_D09D0DC22043, this.camera_595B48EA_4805_7938_41C4_46BAD5A7C2CF); this.mainPlayList.set('selectedIndex', 13)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "id": "overlay_2B75CCF3_3AE6_0B81_41C0_4E44F1B65C30",
                                 "class": "HotspotPanoramaOverlay",
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_65622DBC_6D08_C0F6_41D3_F146DA631282_0_HS_0_0_0_map.gif",
                                      "height": 59,
                                      "class": "ImageResourceLevel",
                                      "width": 59
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -16.55,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 106.65,
                                   "hfov": 7.57
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_65622DBC_6D08_C0F6_41D3_F146DA631282_0_HS_0_0.png",
                                      "height": 119,
                                      "class": "ImageResourceLevel",
                                      "width": 118
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 7.57,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -16.55,
                                   "yaw": 106.65
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB, this.camera_595248C3_4805_7968_41BE_E524B2C4E9F2); this.mainPlayList.set('selectedIndex', 12)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ]
                                },
                                {
                                 "image": {
                                  "levels": [
                                   {
                                    "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
                                    "height": 1348,
                                    "class": "ImageResourceLevel",
                                    "width": 1348
                                   }
                                  ],
                                  "class": "ImageResource"
                                 },
                                 "id": "panorama_65622DBC_6D08_C0F6_41D3_F146DA631282_tcap0",
                                 "class": "TripodCapPanoramaOverlay",
                                 "hfov": 34.8,
                                 "angle": 0,
                                 "inertia": false,
                                 "rotate": false
                                }
                               ],
                               "right": {
                                "levels": [
                                 {
                                  "url": "media/panorama_65622DBC_6D08_C0F6_41D3_F146DA631282_r_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_65622DBC_6D08_C0F6_41D3_F146DA631282_r.jpeg",
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
                                  "url": "media/panorama_65622DBC_6D08_C0F6_41D3_F146DA631282_f_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_65622DBC_6D08_C0F6_41D3_F146DA631282_f.jpeg",
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
                                  "url": "media/panorama_65622DBC_6D08_C0F6_41D3_F146DA631282_u_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_65622DBC_6D08_C0F6_41D3_F146DA631282_u.jpeg",
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
                                  "url": "media/panorama_65622DBC_6D08_C0F6_41D3_F146DA631282_d_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_65622DBC_6D08_C0F6_41D3_F146DA631282_d.jpeg",
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
                                  "url": "media/panorama_65622DBC_6D08_C0F6_41D3_F146DA631282_l_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_65622DBC_6D08_C0F6_41D3_F146DA631282_l.jpeg",
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
                                  "url": "media/panorama_65622DBC_6D08_C0F6_41D3_F146DA631282_b_hq.jpeg",
                                  "height": 1704,
                                  "class": "ImageResourceLevel",
                                  "width": 1704
                                 },
                                 {
                                  "url": "media/panorama_65622DBC_6D08_C0F6_41D3_F146DA631282_b.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "thumbnailUrl": "media/panorama_65622DBC_6D08_C0F6_41D3_F146DA631282_t.jpg"
                              }
                             ],
                             "pitch": 0
                            },
                            "class": "AdjacentPanorama",
                            "yaw": 99.57,
                            "distance": 1
                           }
                          ],
                          "label": "2nd Floor Hallway",
                          "partial": false,
                          "thumbnailUrl": "media/panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_t.jpg",
                          "vfov": 180,
                          "id": "panorama_656250A8_6D0B_409F_41A9_53EF98C75F40",
                          "class": "Panorama",
                          "hfov": 360,
                          "frames": [
                           {
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "id": "overlay_345CD999_3AFE_0D81_41C2_EF4E9C608D79",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_0_HS_4_0_0_map.gif",
                                   "height": 59,
                                   "class": "ImageResourceLevel",
                                   "width": 59
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -8.97,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 61.8,
                                "hfov": 7.81
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_0_HS_4_0.png",
                                   "height": 119,
                                   "class": "ImageResourceLevel",
                                   "width": 118
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 7.81,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -8.97,
                                "yaw": 61.8
                               }
                              ],
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40, this.camera_59400916_4805_78E8_41A3_629C6736EC74); this.mainPlayList.set('selectedIndex', 6)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "id": "overlay_34188AC5_3AFE_0F81_41BB_8C2837FCE7DC",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_0_HS_3_0_0_map.gif",
                                   "height": 59,
                                   "class": "ImageResourceLevel",
                                   "width": 59
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -2.66,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -123.88,
                                "hfov": 7.89
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_0_HS_3_0.png",
                                   "height": 119,
                                   "class": "ImageResourceLevel",
                                   "width": 118
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 7.89,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -2.66,
                                "yaw": -123.88
                               }
                              ],
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2, this.camera_594C2932_4805_7B28_41C6_2127CEA9BA25); this.mainPlayList.set('selectedIndex', 1)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "id": "overlay_35F61C38_3AE2_0A8F_41CB_E65E6F81F864",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_0_HS_2_0_0_map.gif",
                                   "height": 59,
                                   "class": "ImageResourceLevel",
                                   "width": 59
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -13.9,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -158.11,
                                "hfov": 7.67
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_0_HS_2_0.png",
                                   "height": 119,
                                   "class": "ImageResourceLevel",
                                   "width": 118
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 7.67,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -13.9,
                                "yaw": -158.11
                               }
                              ],
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_65624F53_6D0B_41B1_41D7_A67528B4B074, this.camera_594BE945_4805_7B6B_41A1_48F583E401F0); this.mainPlayList.set('selectedIndex', 10)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "id": "overlay_35CF6092_3AE2_1B83_41C9_971247B7089C",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_0_HS_1_0_0_map.gif",
                                   "height": 59,
                                   "class": "ImageResourceLevel",
                                   "width": 59
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -16.17,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 99.57,
                                "hfov": 7.59
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_0_HS_1_0.png",
                                   "height": 119,
                                   "class": "ImageResourceLevel",
                                   "width": 118
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 7.59,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -16.17,
                                "yaw": 99.57
                               }
                              ],
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_65622DBC_6D08_C0F6_41D3_F146DA631282, this.camera_59B76964_4805_7B29_41C7_172C666BF12C); this.mainPlayList.set('selectedIndex', 11)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "id": "overlay_35CC3D29_3AE2_0A81_4178_D4C99F669333",
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_0_HS_0_0_0_map.gif",
                                   "height": 59,
                                   "class": "ImageResourceLevel",
                                   "width": 59
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -13.77,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 47.91,
                                "hfov": 7.67
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_0_HS_0_0.png",
                                   "height": 119,
                                   "class": "ImageResourceLevel",
                                   "width": 118
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 7.67,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -13.77,
                                "yaw": 47.91
                               }
                              ],
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_65620760_6D08_C18E_41D1_0E722A330522, this.camera_59478905_4805_78E8_41CB_BD9558CC71CB); this.mainPlayList.set('selectedIndex', 14)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ]
                             },
                             {
                              "image": {
                               "levels": [
                                {
                                 "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
                                 "height": 1348,
                                 "class": "ImageResourceLevel",
                                 "width": 1348
                                }
                               ],
                               "class": "ImageResource"
                              },
                              "id": "panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_tcap0",
                              "class": "TripodCapPanoramaOverlay",
                              "hfov": 34.8,
                              "angle": 0,
                              "inertia": false,
                              "rotate": false
                             }
                            ],
                            "right": {
                             "levels": [
                              {
                               "url": "media/panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_r_hq.jpeg",
                               "height": 1704,
                               "class": "ImageResourceLevel",
                               "width": 1704
                              },
                              {
                               "url": "media/panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_r.jpeg",
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
                               "url": "media/panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_f_hq.jpeg",
                               "height": 1704,
                               "class": "ImageResourceLevel",
                               "width": 1704
                              },
                              {
                               "url": "media/panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_f.jpeg",
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
                               "url": "media/panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_u_hq.jpeg",
                               "height": 1704,
                               "class": "ImageResourceLevel",
                               "width": 1704
                              },
                              {
                               "url": "media/panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_u.jpeg",
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
                               "url": "media/panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_d_hq.jpeg",
                               "height": 1704,
                               "class": "ImageResourceLevel",
                               "width": 1704
                              },
                              {
                               "url": "media/panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_d.jpeg",
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
                               "url": "media/panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_l_hq.jpeg",
                               "height": 1704,
                               "class": "ImageResourceLevel",
                               "width": 1704
                              },
                              {
                               "url": "media/panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_l.jpeg",
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
                               "url": "media/panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_b_hq.jpeg",
                               "height": 1704,
                               "class": "ImageResourceLevel",
                               "width": 1704
                              },
                              {
                               "url": "media/panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_b.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "thumbnailUrl": "media/panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_t.jpg"
                           }
                          ],
                          "pitch": 0
                         },
                         "class": "AdjacentPanorama",
                         "yaw": -36.6,
                         "distance": 1
                        },
                        {
                         "backwardYaw": 138.22,
                         "panorama": "this.panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF",
                         "class": "AdjacentPanorama",
                         "yaw": 75.77,
                         "distance": 1
                        },
                        {
                         "backwardYaw": -21.44,
                         "panorama": "this.panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15",
                         "class": "AdjacentPanorama",
                         "yaw": 176.05,
                         "distance": 1
                        }
                       ],
                       "label": "1st Floor Hallway 2",
                       "partial": false,
                       "thumbnailUrl": "media/panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_t.jpg",
                       "vfov": 180,
                       "id": "panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40",
                       "class": "Panorama",
                       "hfov": 360,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "id": "overlay_3735F42A_3AE7_FA83_41AF_1BBE2F5F3B28",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_0_HS_3_0_0_map.gif",
                                "height": 59,
                                "class": "ImageResourceLevel",
                                "width": 58
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -13.56,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 176.05,
                             "hfov": 7.68
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_0_HS_3_0.png",
                                "height": 118,
                                "class": "ImageResourceLevel",
                                "width": 117
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 7.68,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -13.56,
                             "yaw": 176.05
                            }
                           ],
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15, this.camera_5A2F9CC2_4805_7968_41C7_53EA5E61A521); this.mainPlayList.set('selectedIndex', 7)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_34E5865E_3AE6_0683_41C0_99C4F9295046",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_0_HS_2_0_0_map.gif",
                                "height": 59,
                                "class": "ImageResourceLevel",
                                "width": 59
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -9.31,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -20.03,
                             "hfov": 7.8
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_0_HS_2_0.png",
                                "height": 119,
                                "class": "ImageResourceLevel",
                                "width": 118
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 7.8,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -9.31,
                             "yaw": -20.03
                            }
                           ],
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.mainPlayList.set('selectedIndex', 4)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_34FE7CCA_3AE6_0B83_418E_48BF666D9F8F",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_0_HS_1_0_0_map.gif",
                                "height": 59,
                                "class": "ImageResourceLevel",
                                "width": 59
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -12.3,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 75.77,
                             "hfov": 7.72
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_0_HS_1_0.png",
                                "height": 119,
                                "class": "ImageResourceLevel",
                                "width": 118
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 7.72,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -12.3,
                             "yaw": 75.77
                            }
                           ],
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF, this.camera_5A272CA9_4805_7938_41A0_1F630069F3AF); this.mainPlayList.set('selectedIndex', 2)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_34846AD4_3AFE_0F87_416E_86C2E826DDF7",
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_0_HS_0_0_0_map.gif",
                                "height": 59,
                                "class": "ImageResourceLevel",
                                "width": 59
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": 4.29,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -36.6,
                             "hfov": 7.88
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_0_HS_0_0.png",
                                "height": 119,
                                "class": "ImageResourceLevel",
                                "width": 118
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 7.88,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": 4.29,
                             "yaw": -36.6
                            }
                           ],
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "toolTip": "Uptstairs bedrooms",
                             "click": "this.startPanoramaWithCamera(this.panorama_656250A8_6D0B_409F_41A9_53EF98C75F40, this.camera_5A39BC75_4805_7928_41A3_D82DC12938BC); this.mainPlayList.set('selectedIndex', 9)",
                             "displayTooltipInTouchScreens": true
                            }
                           ]
                          },
                          {
                           "image": {
                            "levels": [
                             {
                              "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
                              "height": 1348,
                              "class": "ImageResourceLevel",
                              "width": 1348
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "id": "panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_tcap0",
                           "class": "TripodCapPanoramaOverlay",
                           "hfov": 34.8,
                           "angle": 0,
                           "inertia": false,
                           "rotate": false
                          }
                         ],
                         "right": {
                          "levels": [
                           {
                            "url": "media/panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_r_hq.jpeg",
                            "height": 1704,
                            "class": "ImageResourceLevel",
                            "width": 1704
                           },
                           {
                            "url": "media/panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_r.jpeg",
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
                            "url": "media/panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_f_hq.jpeg",
                            "height": 1704,
                            "class": "ImageResourceLevel",
                            "width": 1704
                           },
                           {
                            "url": "media/panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_f.jpeg",
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
                            "url": "media/panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_u_hq.jpeg",
                            "height": 1704,
                            "class": "ImageResourceLevel",
                            "width": 1704
                           },
                           {
                            "url": "media/panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_u.jpeg",
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
                            "url": "media/panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_d_hq.jpeg",
                            "height": 1704,
                            "class": "ImageResourceLevel",
                            "width": 1704
                           },
                           {
                            "url": "media/panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_d.jpeg",
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
                            "url": "media/panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_l_hq.jpeg",
                            "height": 1704,
                            "class": "ImageResourceLevel",
                            "width": 1704
                           },
                           {
                            "url": "media/panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_l.jpeg",
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
                            "url": "media/panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_b_hq.jpeg",
                            "height": 1704,
                            "class": "ImageResourceLevel",
                            "width": 1704
                           },
                           {
                            "url": "media/panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_b.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_t.jpg"
                        }
                       ],
                       "pitch": 0
                      },
                      "class": "AdjacentPanorama",
                      "yaw": 138.22,
                      "distance": 1
                     },
                     {
                      "backwardYaw": 137.59,
                      "panorama": "this.panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2",
                      "class": "AdjacentPanorama",
                      "yaw": -41.02,
                      "distance": 1
                     },
                     {
                      "backwardYaw": 123.19,
                      "panorama": "this.panorama_65616442_6D08_C792_41BA_077C59B68580",
                      "class": "AdjacentPanorama",
                      "yaw": -150.79,
                      "distance": 1
                     }
                    ],
                    "label": "1st Floor Hallway",
                    "partial": false,
                    "thumbnailUrl": "media/panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF_t.jpg",
                    "vfov": 180,
                    "id": "panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF",
                    "class": "Panorama",
                    "hfov": 360,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "id": "overlay_302415FC_3AEE_0587_41A3_27747608FA1E",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF_0_HS_2_0_0_map.gif",
                             "height": 59,
                             "class": "ImageResourceLevel",
                             "width": 59
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -8.72,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -41.02,
                          "hfov": 7.81
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF_0_HS_2_0.png",
                             "height": 119,
                             "class": "ImageResourceLevel",
                             "width": 118
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 7.81,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -8.72,
                          "yaw": -41.02
                         }
                        ],
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2, this.camera_597E980A_4805_78F9_41C2_29C1F1BDB4CF); this.mainPlayList.set('selectedIndex', 1)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "id": "overlay_301AC13C_3AEE_1A87_41C7_DA4E093BD1A7",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF_0_HS_1_0_0_map.gif",
                             "height": 59,
                             "class": "ImageResourceLevel",
                             "width": 59
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -15.29,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -150.79,
                          "hfov": 7.62
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF_0_HS_1_0.png",
                             "height": 119,
                             "class": "ImageResourceLevel",
                             "width": 118
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 7.62,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -15.29,
                          "yaw": -150.79
                         }
                        ],
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_65616442_6D08_C792_41BA_077C59B68580, this.camera_597BE81A_4805_7918_41BC_E40E5EB77F01); this.mainPlayList.set('selectedIndex', 3)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "id": "overlay_31F741AC_3AEE_1D87_41B4_01B3CCA11E8A",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF_0_HS_0_0_0_map.gif",
                             "height": 59,
                             "class": "ImageResourceLevel",
                             "width": 59
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -17.94,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 138.22,
                          "hfov": 7.52
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF_0_HS_0_0.png",
                             "height": 119,
                             "class": "ImageResourceLevel",
                             "width": 118
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 7.52,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -17.94,
                          "yaw": 138.22
                         }
                        ],
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40, this.camera_597D07F9_4805_771B_41CE_9AA29F15FF49); this.mainPlayList.set('selectedIndex', 6)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ]
                       },
                       {
                        "image": {
                         "levels": [
                          {
                           "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
                           "height": 1348,
                           "class": "ImageResourceLevel",
                           "width": 1348
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "id": "panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF_tcap0",
                        "class": "TripodCapPanoramaOverlay",
                        "hfov": 34.8,
                        "angle": 0,
                        "inertia": false,
                        "rotate": false
                       }
                      ],
                      "right": {
                       "levels": [
                        {
                         "url": "media/panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF_r_hq.jpeg",
                         "height": 1704,
                         "class": "ImageResourceLevel",
                         "width": 1704
                        },
                        {
                         "url": "media/panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF_r.jpeg",
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
                         "url": "media/panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF_f_hq.jpeg",
                         "height": 1704,
                         "class": "ImageResourceLevel",
                         "width": 1704
                        },
                        {
                         "url": "media/panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF_f.jpeg",
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
                         "url": "media/panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF_u_hq.jpeg",
                         "height": 1704,
                         "class": "ImageResourceLevel",
                         "width": 1704
                        },
                        {
                         "url": "media/panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF_u.jpeg",
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
                         "url": "media/panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF_d_hq.jpeg",
                         "height": 1704,
                         "class": "ImageResourceLevel",
                         "width": 1704
                        },
                        {
                         "url": "media/panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF_d.jpeg",
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
                         "url": "media/panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF_l_hq.jpeg",
                         "height": 1704,
                         "class": "ImageResourceLevel",
                         "width": 1704
                        },
                        {
                         "url": "media/panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF_l.jpeg",
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
                         "url": "media/panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF_b_hq.jpeg",
                         "height": 1704,
                         "class": "ImageResourceLevel",
                         "width": 1704
                        },
                        {
                         "url": "media/panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF_b.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF_t.jpg"
                     }
                    ],
                    "pitch": 0
                   },
                   "class": "AdjacentPanorama",
                   "yaw": 123.19,
                   "distance": 1
                  }
                 ],
                 "label": "Dining Room",
                 "partial": false,
                 "thumbnailUrl": "media/panorama_65616442_6D08_C792_41BA_077C59B68580_t.jpg",
                 "vfov": 180,
                 "id": "panorama_65616442_6D08_C792_41BA_077C59B68580",
                 "class": "Panorama",
                 "hfov": 360,
                 "frames": [
                  {
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "id": "overlay_3017C8F8_3AEE_0B8F_41BC_DF44A8479BF4",
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_65616442_6D08_C792_41BA_077C59B68580_0_HS_1_0_0_map.gif",
                          "height": 59,
                          "class": "ImageResourceLevel",
                          "width": 59
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -14.28,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 123.19,
                       "hfov": 7.66
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_65616442_6D08_C792_41BA_077C59B68580_0_HS_1_0.png",
                          "height": 119,
                          "class": "ImageResourceLevel",
                          "width": 118
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 7.66,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -14.28,
                       "yaw": 123.19
                      }
                     ],
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF, this.camera_59D9ABEF_4805_7F38_4198_A96D7129CD8B); this.mainPlayList.set('selectedIndex', 2)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_31D7FEF8_3AEE_078F_41C4_521696EDBF54",
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_65616442_6D08_C792_41BA_077C59B68580_0_HS_0_0_0_map.gif",
                          "height": 59,
                          "class": "ImageResourceLevel",
                          "width": 59
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -10.99,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -97.48,
                       "hfov": 7.76
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_65616442_6D08_C792_41BA_077C59B68580_0_HS_0_0.png",
                          "height": 119,
                          "class": "ImageResourceLevel",
                          "width": 118
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 7.76,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -10.99,
                       "yaw": -97.48
                      }
                     ],
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_65615695_6D08_C0B6_4184_34CBC0A759BA, this.camera_59D03BD2_4805_7F68_41B9_DEF88D2557D9); this.mainPlayList.set('selectedIndex', 4)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ]
                    },
                    {
                     "image": {
                      "levels": [
                       {
                        "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
                        "height": 1348,
                        "class": "ImageResourceLevel",
                        "width": 1348
                       }
                      ],
                      "class": "ImageResource"
                     },
                     "id": "panorama_65616442_6D08_C792_41BA_077C59B68580_tcap0",
                     "class": "TripodCapPanoramaOverlay",
                     "hfov": 34.8,
                     "angle": 0,
                     "inertia": false,
                     "rotate": false
                    }
                   ],
                   "right": {
                    "levels": [
                     {
                      "url": "media/panorama_65616442_6D08_C792_41BA_077C59B68580_r_hq.jpeg",
                      "height": 1704,
                      "class": "ImageResourceLevel",
                      "width": 1704
                     },
                     {
                      "url": "media/panorama_65616442_6D08_C792_41BA_077C59B68580_r.jpeg",
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
                      "url": "media/panorama_65616442_6D08_C792_41BA_077C59B68580_f_hq.jpeg",
                      "height": 1704,
                      "class": "ImageResourceLevel",
                      "width": 1704
                     },
                     {
                      "url": "media/panorama_65616442_6D08_C792_41BA_077C59B68580_f.jpeg",
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
                      "url": "media/panorama_65616442_6D08_C792_41BA_077C59B68580_u_hq.jpeg",
                      "height": 1704,
                      "class": "ImageResourceLevel",
                      "width": 1704
                     },
                     {
                      "url": "media/panorama_65616442_6D08_C792_41BA_077C59B68580_u.jpeg",
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
                      "url": "media/panorama_65616442_6D08_C792_41BA_077C59B68580_d_hq.jpeg",
                      "height": 1704,
                      "class": "ImageResourceLevel",
                      "width": 1704
                     },
                     {
                      "url": "media/panorama_65616442_6D08_C792_41BA_077C59B68580_d.jpeg",
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
                      "url": "media/panorama_65616442_6D08_C792_41BA_077C59B68580_l_hq.jpeg",
                      "height": 1704,
                      "class": "ImageResourceLevel",
                      "width": 1704
                     },
                     {
                      "url": "media/panorama_65616442_6D08_C792_41BA_077C59B68580_l.jpeg",
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
                      "url": "media/panorama_65616442_6D08_C792_41BA_077C59B68580_b_hq.jpeg",
                      "height": 1704,
                      "class": "ImageResourceLevel",
                      "width": 1704
                     },
                     {
                      "url": "media/panorama_65616442_6D08_C792_41BA_077C59B68580_b.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_65616442_6D08_C792_41BA_077C59B68580_t.jpg"
                  }
                 ],
                 "pitch": 0
                },
                "class": "AdjacentPanorama",
                "yaw": -27,
                "distance": 1
               },
               {
                "backwardYaw": 120.04,
                "panorama": "this.panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C",
                "class": "AdjacentPanorama",
                "yaw": 101.97,
                "distance": 1
               }
              ],
              "label": "Kitchen",
              "partial": false,
              "thumbnailUrl": "media/panorama_65615695_6D08_C0B6_4184_34CBC0A759BA_t.jpg",
              "vfov": 180,
              "id": "panorama_65615695_6D08_C0B6_4184_34CBC0A759BA",
              "class": "Panorama",
              "hfov": 360,
              "frames": [
               {
                "overlays": [
                 {
                  "useHandCursor": true,
                  "id": "overlay_37C71664_3AE2_0687_41B2_20BD6E14BF9A",
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_65615695_6D08_C0B6_4184_34CBC0A759BA_0_HS_1_0_0_map.gif",
                       "height": 59,
                       "class": "ImageResourceLevel",
                       "width": 59
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -13.27,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -27,
                    "hfov": 7.69
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_65615695_6D08_C0B6_4184_34CBC0A759BA_0_HS_1_0.png",
                       "height": 119,
                       "class": "ImageResourceLevel",
                       "width": 118
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 7.69,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -13.27,
                    "yaw": -27
                   }
                  ],
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_65616442_6D08_C792_41BA_077C59B68580, this.camera_5A1A9D0B_4805_78FF_41BF_96CD307AD067); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_37861248_3AE2_7E8F_41C2_D0FA65BB8FDF",
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_65615695_6D08_C0B6_4184_34CBC0A759BA_0_HS_0_0_0_map.gif",
                       "height": 59,
                       "class": "ImageResourceLevel",
                       "width": 59
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -11.37,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 101.97,
                    "hfov": 7.75
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_65615695_6D08_C0B6_4184_34CBC0A759BA_0_HS_0_0.png",
                       "height": 119,
                       "class": "ImageResourceLevel",
                       "width": 118
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 7.75,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -11.37,
                    "yaw": 101.97
                   }
                  ],
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C, this.camera_5A032D27_4805_7B37_41A4_DABFA308AA12); this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ]
                 },
                 {
                  "image": {
                   "levels": [
                    {
                     "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
                     "height": 1348,
                     "class": "ImageResourceLevel",
                     "width": 1348
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "id": "panorama_65615695_6D08_C0B6_4184_34CBC0A759BA_tcap0",
                  "class": "TripodCapPanoramaOverlay",
                  "hfov": 34.8,
                  "angle": 0,
                  "inertia": false,
                  "rotate": false
                 }
                ],
                "right": {
                 "levels": [
                  {
                   "url": "media/panorama_65615695_6D08_C0B6_4184_34CBC0A759BA_r_hq.jpeg",
                   "height": 1704,
                   "class": "ImageResourceLevel",
                   "width": 1704
                  },
                  {
                   "url": "media/panorama_65615695_6D08_C0B6_4184_34CBC0A759BA_r.jpeg",
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
                   "url": "media/panorama_65615695_6D08_C0B6_4184_34CBC0A759BA_f_hq.jpeg",
                   "height": 1704,
                   "class": "ImageResourceLevel",
                   "width": 1704
                  },
                  {
                   "url": "media/panorama_65615695_6D08_C0B6_4184_34CBC0A759BA_f.jpeg",
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
                   "url": "media/panorama_65615695_6D08_C0B6_4184_34CBC0A759BA_u_hq.jpeg",
                   "height": 1704,
                   "class": "ImageResourceLevel",
                   "width": 1704
                  },
                  {
                   "url": "media/panorama_65615695_6D08_C0B6_4184_34CBC0A759BA_u.jpeg",
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
                   "url": "media/panorama_65615695_6D08_C0B6_4184_34CBC0A759BA_d_hq.jpeg",
                   "height": 1704,
                   "class": "ImageResourceLevel",
                   "width": 1704
                  },
                  {
                   "url": "media/panorama_65615695_6D08_C0B6_4184_34CBC0A759BA_d.jpeg",
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
                   "url": "media/panorama_65615695_6D08_C0B6_4184_34CBC0A759BA_l_hq.jpeg",
                   "height": 1704,
                   "class": "ImageResourceLevel",
                   "width": 1704
                  },
                  {
                   "url": "media/panorama_65615695_6D08_C0B6_4184_34CBC0A759BA_l.jpeg",
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
                   "url": "media/panorama_65615695_6D08_C0B6_4184_34CBC0A759BA_b_hq.jpeg",
                   "height": 1704,
                   "class": "ImageResourceLevel",
                   "width": 1704
                  },
                  {
                   "url": "media/panorama_65615695_6D08_C0B6_4184_34CBC0A759BA_b.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_65615695_6D08_C0B6_4184_34CBC0A759BA_t.jpg"
               }
              ],
              "pitch": 0
             },
             "class": "AdjacentPanorama",
             "yaw": 120.04,
             "distance": 1
            },
            {
             "backwardYaw": -114.66,
             "panorama": "this.panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7",
             "class": "AdjacentPanorama",
             "yaw": -166.83,
             "distance": 1
            }
           ],
           "label": "Back Door",
           "partial": false,
           "thumbnailUrl": "media/panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C_t.jpg",
           "vfov": 180,
           "id": "panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C",
           "class": "Panorama",
           "hfov": 360,
           "frames": [
            {
             "overlays": [
              {
               "useHandCursor": true,
               "id": "overlay_37BB2BE0_3AE2_0DBF_41BC_4587CFDF69D7",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C_0_HS_2_0_0_map.gif",
                    "height": 59,
                    "class": "ImageResourceLevel",
                    "width": 59
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -15.42,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 9.89,
                 "hfov": 7.62
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C_0_HS_2_0.png",
                    "height": 119,
                    "class": "ImageResourceLevel",
                    "width": 118
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 7.62,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -15.42,
                 "yaw": 9.89
                }
               ],
               "enabledInCardboard": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "toolTip": "Check out the backyard!",
                 "click": "this.startPanoramaWithCamera(this.panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD, this.camera_59683882_4805_79E8_41C3_30E31FA3F692); this.mainPlayList.set('selectedIndex', 22)",
                 "displayTooltipInTouchScreens": true
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_37683157_3AE2_1A81_41B0_397DFEEA1478",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C_0_HS_1_0_0_map.gif",
                    "height": 59,
                    "class": "ImageResourceLevel",
                    "width": 59
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -4.3,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 120.04,
                 "hfov": 7.88
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C_0_HS_1_0.png",
                    "height": 119,
                    "class": "ImageResourceLevel",
                    "width": 118
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 7.88,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -4.3,
                 "yaw": 120.04
                }
               ],
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_65615695_6D08_C0B6_4184_34CBC0A759BA, this.camera_5954D895_4805_79E8_4183_139F74DDE0C5); this.mainPlayList.set('selectedIndex', 4)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_37578D5C_3AE2_0A87_41A7_0720B29CE3CC",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C_0_HS_0_0_0_map.gif",
                    "height": 59,
                    "class": "ImageResourceLevel",
                    "width": 59
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -39.04,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -166.83,
                 "hfov": 6.14
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C_0_HS_0_0.png",
                    "height": 119,
                    "class": "ImageResourceLevel",
                    "width": 118
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 6.14,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -39.04,
                 "yaw": -166.83
                }
               ],
               "enabledInCardboard": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "toolTip": "This way to the basement",
                 "click": "this.startPanoramaWithCamera(this.panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7, this.camera_5951E8A9_4805_7938_41C6_054F9F31C37D); this.mainPlayList.set('selectedIndex', 15)",
                 "displayTooltipInTouchScreens": true
                }
               ]
              },
              {
               "image": {
                "levels": [
                 {
                  "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
                  "height": 1348,
                  "class": "ImageResourceLevel",
                  "width": 1348
                 }
                ],
                "class": "ImageResource"
               },
               "id": "panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C_tcap0",
               "class": "TripodCapPanoramaOverlay",
               "hfov": 34.8,
               "angle": 0,
               "inertia": false,
               "rotate": false
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C_r_hq.jpeg",
                "height": 1704,
                "class": "ImageResourceLevel",
                "width": 1704
               },
               {
                "url": "media/panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C_r.jpeg",
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
                "url": "media/panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C_f_hq.jpeg",
                "height": 1704,
                "class": "ImageResourceLevel",
                "width": 1704
               },
               {
                "url": "media/panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C_f.jpeg",
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
                "url": "media/panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C_u_hq.jpeg",
                "height": 1704,
                "class": "ImageResourceLevel",
                "width": 1704
               },
               {
                "url": "media/panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C_u.jpeg",
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
                "url": "media/panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C_d_hq.jpeg",
                "height": 1704,
                "class": "ImageResourceLevel",
                "width": 1704
               },
               {
                "url": "media/panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C_d.jpeg",
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
                "url": "media/panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C_l_hq.jpeg",
                "height": 1704,
                "class": "ImageResourceLevel",
                "width": 1704
               },
               {
                "url": "media/panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C_l.jpeg",
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
                "url": "media/panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C_b_hq.jpeg",
                "height": 1704,
                "class": "ImageResourceLevel",
                "width": 1704
               },
               {
                "url": "media/panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C_t.jpg"
            }
           ],
           "pitch": 0
          },
          "class": "AdjacentPanorama",
          "yaw": -25.86,
          "distance": 1
         }
        ],
        "label": "Rear of House",
        "partial": false,
        "thumbnailUrl": "media/panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD_t.jpg",
        "vfov": 180,
        "id": "panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD",
        "class": "Panorama",
        "hfov": 360,
        "frames": [
         {
          "overlays": [
           {
            "useHandCursor": true,
            "id": "overlay_2E53468B_3AE2_0781_41A1_9D07E449FBFB",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD_0_HS_2_0_0_map.gif",
                 "height": 59,
                 "class": "ImageResourceLevel",
                 "width": 59
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -6.07,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -51.38,
              "hfov": 7.86
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD_0_HS_2_0.png",
                 "height": 119,
                 "class": "ImageResourceLevel",
                 "width": 118
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 7.86,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -6.07,
              "yaw": -51.38
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_6562E025_6D09_5F96_41D9_5293F1924661, this.camera_59B33978_4805_7B19_41CE_009FBC61572F); this.mainPlayList.set('selectedIndex', 21)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_2FF17CFD_3AE2_0B81_41B4_29AE476209F0",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD_0_HS_1_0_0_map.gif",
                 "height": 59,
                 "class": "ImageResourceLevel",
                 "width": 59
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -2.28,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 35.15,
              "hfov": 7.9
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD_0_HS_1_0.png",
                 "height": 119,
                 "class": "ImageResourceLevel",
                 "width": 118
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 7.9,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -2.28,
              "yaw": 35.15
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_65629885_6D08_C096_41D4_EE4D43ECED1E, this.camera_59BEB98E_4805_7BF6_41D0_BB0CB0A2379C); this.mainPlayList.set('selectedIndex', 23)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_2FD3B6C1_3AE2_0781_41BF_EE99614ADC61",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD_0_HS_0_0_0_map.gif",
                 "height": 59,
                 "class": "ImageResourceLevel",
                 "width": 59
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -1.52,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -25.86,
              "hfov": 7.9
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD_0_HS_0_0.png",
                 "height": 119,
                 "class": "ImageResourceLevel",
                 "width": 118
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 7.9,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -1.52,
              "yaw": -25.86
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C, this.camera_59A5D9AE_4805_7B38_41BB_32BD5B471F54); this.mainPlayList.set('selectedIndex', 5)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ]
           },
           {
            "image": {
             "levels": [
              {
               "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
               "height": 1348,
               "class": "ImageResourceLevel",
               "width": 1348
              }
             ],
             "class": "ImageResource"
            },
            "id": "panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD_tcap0",
            "class": "TripodCapPanoramaOverlay",
            "hfov": 34.8,
            "angle": 0,
            "inertia": false,
            "rotate": false
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD_r_hq.jpeg",
             "height": 1704,
             "class": "ImageResourceLevel",
             "width": 1704
            },
            {
             "url": "media/panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD_r.jpeg",
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
             "url": "media/panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD_f_hq.jpeg",
             "height": 1704,
             "class": "ImageResourceLevel",
             "width": 1704
            },
            {
             "url": "media/panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD_f.jpeg",
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
             "url": "media/panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD_u_hq.jpeg",
             "height": 1704,
             "class": "ImageResourceLevel",
             "width": 1704
            },
            {
             "url": "media/panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD_u.jpeg",
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
             "url": "media/panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD_d_hq.jpeg",
             "height": 1704,
             "class": "ImageResourceLevel",
             "width": 1704
            },
            {
             "url": "media/panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD_d.jpeg",
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
             "url": "media/panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD_l_hq.jpeg",
             "height": 1704,
             "class": "ImageResourceLevel",
             "width": 1704
            },
            {
             "url": "media/panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD_l.jpeg",
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
             "url": "media/panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD_b_hq.jpeg",
             "height": 1704,
             "class": "ImageResourceLevel",
             "width": 1704
            },
            {
             "url": "media/panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD_t.jpg"
         }
        ],
        "pitch": 0
       },
       "class": "AdjacentPanorama",
       "yaw": -60.6,
       "distance": 1
      },
      {
       "backwardYaw": 51.95,
       "panorama": {
        "hfovMin": 60,
        "hfovMax": 120,
        "adjacentPanoramas": [
         {
          "backwardYaw": 24.29,
          "panorama": "this.panorama_6562E025_6D09_5F96_41D9_5293F1924661",
          "class": "AdjacentPanorama",
          "yaw": 51.95,
          "distance": 1
         }
        ],
        "label": "The Garden",
        "partial": false,
        "thumbnailUrl": "media/panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547_t.jpg",
        "vfov": 180,
        "id": "panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547",
        "class": "Panorama",
        "hfov": 360,
        "frames": [
         {
          "overlays": [
           {
            "useHandCursor": true,
            "id": "overlay_2F9EE0E7_3ADE_1B81_41AF_C4C139C1F4EE",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547_0_HS_1_0_0_map.gif",
                 "height": 59,
                 "class": "ImageResourceLevel",
                 "width": 59
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -6.19,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 51.95,
              "hfov": 7.86
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547_0_HS_1_0.png",
                 "height": 119,
                 "class": "ImageResourceLevel",
                 "width": 118
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 7.86,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -6.19,
              "yaw": 51.95
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_6562E025_6D09_5F96_41D9_5293F1924661, this.camera_5964F833_4805_7928_41CE_353A73C41CF9); this.mainPlayList.set('selectedIndex', 21)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_2F45D58A_3ADE_0583_4197_8F298297B893",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547_0_HS_0_0_0_map.gif",
                 "height": 59,
                 "class": "ImageResourceLevel",
                 "width": 59
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -4.81,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 120.29,
              "hfov": 7.87
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547_0_HS_0_0.png",
                 "height": 119,
                 "class": "ImageResourceLevel",
                 "width": 118
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 7.87,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -4.81,
              "yaw": 120.29
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 22)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ]
           },
           {
            "image": {
             "levels": [
              {
               "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
               "height": 1348,
               "class": "ImageResourceLevel",
               "width": 1348
              }
             ],
             "class": "ImageResource"
            },
            "id": "panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547_tcap0",
            "class": "TripodCapPanoramaOverlay",
            "hfov": 34.8,
            "angle": 0,
            "inertia": false,
            "rotate": false
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547_r_hq.jpeg",
             "height": 1704,
             "class": "ImageResourceLevel",
             "width": 1704
            },
            {
             "url": "media/panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547_r.jpeg",
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
             "url": "media/panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547_f_hq.jpeg",
             "height": 1704,
             "class": "ImageResourceLevel",
             "width": 1704
            },
            {
             "url": "media/panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547_f.jpeg",
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
             "url": "media/panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547_u_hq.jpeg",
             "height": 1704,
             "class": "ImageResourceLevel",
             "width": 1704
            },
            {
             "url": "media/panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547_u.jpeg",
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
             "url": "media/panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547_d_hq.jpeg",
             "height": 1704,
             "class": "ImageResourceLevel",
             "width": 1704
            },
            {
             "url": "media/panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547_d.jpeg",
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
             "url": "media/panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547_l_hq.jpeg",
             "height": 1704,
             "class": "ImageResourceLevel",
             "width": 1704
            },
            {
             "url": "media/panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547_l.jpeg",
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
             "url": "media/panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547_b_hq.jpeg",
             "height": 1704,
             "class": "ImageResourceLevel",
             "width": 1704
            },
            {
             "url": "media/panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547_t.jpg"
         }
        ],
        "pitch": 0
       },
       "class": "AdjacentPanorama",
       "yaw": 24.29,
       "distance": 1
      }
     ],
     "label": "Side Yard",
     "partial": false,
     "thumbnailUrl": "media/panorama_6562E025_6D09_5F96_41D9_5293F1924661_t.jpg",
     "vfov": 180,
     "id": "panorama_6562E025_6D09_5F96_41D9_5293F1924661",
     "class": "Panorama",
     "hfov": 360,
     "frames": [
      {
       "overlays": [
        {
         "useHandCursor": true,
         "id": "overlay_2EDA6F8F_3AE2_0581_41B9_5F2D44E2DEEC",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_6562E025_6D09_5F96_41D9_5293F1924661_0_HS_2_0_0_map.gif",
              "height": 59,
              "class": "ImageResourceLevel",
              "width": 59
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -4.05,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 152.5,
           "hfov": 7.88
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_6562E025_6D09_5F96_41D9_5293F1924661_0_HS_2_0.png",
              "height": 119,
              "class": "ImageResourceLevel",
              "width": 118
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 7.88,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -4.05,
           "yaw": 152.5
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_6562E38C_6D09_4096_41B1_734A673DC584, this.camera_5A709D4D_4805_7B78_41D0_9AA4CCB46B12); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_2E714D6B_3AE2_0A81_4182_ED22C7A376AB",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_6562E025_6D09_5F96_41D9_5293F1924661_0_HS_1_0_0_map.gif",
              "height": 59,
              "class": "ImageResourceLevel",
              "width": 59
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -15.16,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 24.29,
           "hfov": 7.63
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_6562E025_6D09_5F96_41D9_5293F1924661_0_HS_1_0.png",
              "height": 119,
              "class": "ImageResourceLevel",
              "width": 118
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 7.63,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -15.16,
           "yaw": 24.29
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547, this.camera_5A666D7B_4805_7B18_41A6_FAC9B336F0CC); this.mainPlayList.set('selectedIndex', 24)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_2E81EAFD_3AE2_0F81_41C5_075E4D71275C",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_6562E025_6D09_5F96_41D9_5293F1924661_0_HS_0_0_0_map.gif",
              "height": 59,
              "class": "ImageResourceLevel",
              "width": 59
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -7.08,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -60.6,
           "hfov": 7.84
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_6562E025_6D09_5F96_41D9_5293F1924661_0_HS_0_0.png",
              "height": 119,
              "class": "ImageResourceLevel",
              "width": 118
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 7.84,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -7.08,
           "yaw": -60.6
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD, this.camera_5A792D63_4805_7B28_41D0_7530054E0882); this.mainPlayList.set('selectedIndex', 22)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ]
        },
        {
         "image": {
          "levels": [
           {
            "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
            "height": 1348,
            "class": "ImageResourceLevel",
            "width": 1348
           }
          ],
          "class": "ImageResource"
         },
         "id": "panorama_6562E025_6D09_5F96_41D9_5293F1924661_tcap0",
         "class": "TripodCapPanoramaOverlay",
         "hfov": 34.8,
         "angle": 0,
         "inertia": false,
         "rotate": false
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_6562E025_6D09_5F96_41D9_5293F1924661_r_hq.jpeg",
          "height": 1704,
          "class": "ImageResourceLevel",
          "width": 1704
         },
         {
          "url": "media/panorama_6562E025_6D09_5F96_41D9_5293F1924661_r.jpeg",
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
          "url": "media/panorama_6562E025_6D09_5F96_41D9_5293F1924661_f_hq.jpeg",
          "height": 1704,
          "class": "ImageResourceLevel",
          "width": 1704
         },
         {
          "url": "media/panorama_6562E025_6D09_5F96_41D9_5293F1924661_f.jpeg",
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
          "url": "media/panorama_6562E025_6D09_5F96_41D9_5293F1924661_u_hq.jpeg",
          "height": 1704,
          "class": "ImageResourceLevel",
          "width": 1704
         },
         {
          "url": "media/panorama_6562E025_6D09_5F96_41D9_5293F1924661_u.jpeg",
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
          "url": "media/panorama_6562E025_6D09_5F96_41D9_5293F1924661_d_hq.jpeg",
          "height": 1704,
          "class": "ImageResourceLevel",
          "width": 1704
         },
         {
          "url": "media/panorama_6562E025_6D09_5F96_41D9_5293F1924661_d.jpeg",
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
          "url": "media/panorama_6562E025_6D09_5F96_41D9_5293F1924661_l_hq.jpeg",
          "height": 1704,
          "class": "ImageResourceLevel",
          "width": 1704
         },
         {
          "url": "media/panorama_6562E025_6D09_5F96_41D9_5293F1924661_l.jpeg",
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
          "url": "media/panorama_6562E025_6D09_5F96_41D9_5293F1924661_b_hq.jpeg",
          "height": 1704,
          "class": "ImageResourceLevel",
          "width": 1704
         },
         {
          "url": "media/panorama_6562E025_6D09_5F96_41D9_5293F1924661_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_6562E025_6D09_5F96_41D9_5293F1924661_t.jpg"
      }
     ],
     "pitch": 0
    },
    "class": "AdjacentPanorama",
    "yaw": -167.33,
    "distance": 1
   },
   {
    "backwardYaw": -24.47,
    "panorama": "this.panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2",
    "class": "AdjacentPanorama",
    "yaw": 155.78,
    "distance": 1
   }
  ],
  "label": "Front Yard",
  "partial": false,
  "thumbnailUrl": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_t.jpg",
  "vfov": 180,
  "id": "panorama_6562E38C_6D09_4096_41B1_734A673DC584",
  "class": "Panorama",
  "hfov": 360,
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "id": "overlay_29055209_3AE6_FE81_41C3_829AE936D41E",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_0_HS_1_0_0_map.gif",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 4.79,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 155.78,
        "hfov": 7.87
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_0_HS_1_0.png",
           "height": 119,
           "class": "ImageResourceLevel",
           "width": 118
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 7.87,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 4.79,
        "yaw": 155.78
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "Come on in!",
        "click": "this.startPanoramaWithCamera(this.panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2, this.camera_598A2AF1_4805_792B_41C6_E4D3A0AC239A); this.mainPlayList.set('selectedIndex', 1)",
        "displayTooltipInTouchScreens": true
       }
      ]
     },
     {
      "useHandCursor": true,
      "id": "overlay_2EC66C7B_3AE6_0A81_41C8_9E1BE745DD62",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_0_HS_0_0_0_map.gif",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.51,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -167.33,
        "hfov": 7.9
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_0_HS_0_0.png",
           "height": 119,
           "class": "ImageResourceLevel",
           "width": 118
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 7.9,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 1.51,
        "yaw": -167.33
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "Side Yard",
        "click": "this.startPanoramaWithCamera(this.panorama_6562E025_6D09_5F96_41D9_5293F1924661, this.camera_598E4ACD_4805_797B_41D1_CCA58332A744); this.mainPlayList.set('selectedIndex', 21)",
        "displayTooltipInTouchScreens": true
       }
      ]
     },
     {
      "image": {
       "levels": [
        {
         "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0.png",
         "height": 1348,
         "class": "ImageResourceLevel",
         "width": 1348
        }
       ],
       "class": "ImageResource"
      },
      "id": "panorama_6562E38C_6D09_4096_41B1_734A673DC584_tcap0",
      "class": "TripodCapPanoramaOverlay",
      "hfov": 34.8,
      "angle": 0,
      "inertia": false,
      "rotate": false
     }
    ],
    "right": {
     "levels": [
      {
       "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_r_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_r.jpeg",
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
       "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_f_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_f.jpeg",
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
       "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_u_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_u.jpeg",
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
       "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_d_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_d.jpeg",
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
       "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_l_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_l.jpeg",
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
       "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_b_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_6562E38C_6D09_4096_41B1_734A673DC584_t.jpg"
   }
  ],
  "pitch": 0
 },
 {
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonZoomIn": {
   "iconURL": "skin/IconButton_44ED714A_480B_8B78_41C0_F1518D335A27.png",
   "paddingLeft": 0,
   "class": "IconButton",
   "borderSize": 0,
   "minHeight": 0,
   "verticalAlign": "middle",
   "paddingTop": 0,
   "minWidth": 0,
   "mode": "push",
   "rollOverIconURL": "skin/IconButton_44ED714A_480B_8B78_41C0_F1518D335A27_rollover.png",
   "transparencyActive": true,
   "paddingBottom": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingRight": 0,
   "width": 32,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "height": 32,
   "id": "IconButton_44ED714A_480B_8B78_41C0_F1518D335A27",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_44ED714A_480B_8B78_41C0_F1518D335A27_pressed.png"
  },
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "buttonPause": {
   "iconURL": "skin/IconButton_44EDA14A_480B_8B78_41B3_E803AC1E8F2D.png",
   "paddingLeft": 0,
   "class": "IconButton",
   "borderSize": 0,
   "minHeight": 0,
   "verticalAlign": "middle",
   "paddingTop": 0,
   "minWidth": 0,
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
   "id": "IconButton_44EDA14A_480B_8B78_41B3_E803AC1E8F2D",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_44EDA14A_480B_8B78_41B3_E803AC1E8F2D_pressed.png"
  },
  "displayPlaybackBar": true,
  "buttonZoomOut": {
   "iconURL": "skin/IconButton_44EC314A_480B_8B78_4182_C1245363E68E.png",
   "paddingLeft": 0,
   "class": "IconButton",
   "borderSize": 0,
   "minHeight": 0,
   "verticalAlign": "middle",
   "paddingTop": 0,
   "minWidth": 0,
   "mode": "push",
   "rollOverIconURL": "skin/IconButton_44EC314A_480B_8B78_4182_C1245363E68E_rollover.png",
   "transparencyActive": true,
   "paddingBottom": 0,
   "shadow": false,
   "cursor": "hand",
   "paddingRight": 0,
   "width": 32,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "height": 32,
   "id": "IconButton_44EC314A_480B_8B78_4182_C1245363E68E",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_44EC314A_480B_8B78_4182_C1245363E68E_pressed.png"
  },
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_rotation"
 },
 {
  "id": "panorama_6562E38C_6D09_4096_41B1_734A673DC584_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 7.79,
   "class": "PanoramaCameraPosition",
   "yaw": 155.57
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2",
 {
  "id": "panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -8.92,
   "class": "PanoramaCameraPosition",
   "yaw": 153.21
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF",
 {
  "id": "panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -19.45,
   "class": "PanoramaCameraPosition",
   "yaw": 169.24
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_65616442_6D08_C792_41BA_077C59B68580",
 {
  "id": "panorama_65616442_6D08_C792_41BA_077C59B68580_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -17.9,
   "class": "PanoramaCameraPosition",
   "yaw": 21.81
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_65615695_6D08_C0B6_4184_34CBC0A759BA",
 {
  "id": "panorama_65615695_6D08_C0B6_4184_34CBC0A759BA_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C",
 {
  "id": "panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40",
 {
  "id": "panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15",
 {
  "id": "panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09",
 {
  "id": "panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_656250A8_6D0B_409F_41A9_53EF98C75F40",
 {
  "id": "panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_65624F53_6D0B_41B1_41D7_A67528B4B074",
 {
  "id": "panorama_65624F53_6D0B_41B1_41D7_A67528B4B074_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_65622DBC_6D08_C0F6_41D3_F146DA631282",
 {
  "id": "panorama_65622DBC_6D08_C0F6_41D3_F146DA631282_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB",
 {
  "id": "panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_65621A24_6D08_C397_41C1_D09D0DC22043",
 {
  "id": "panorama_65621A24_6D08_C397_41C1_D09D0DC22043_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_65620760_6D08_C18E_41D1_0E722A330522",
 {
  "id": "panorama_65620760_6D08_C18E_41D1_0E722A330522_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7",
 {
  "id": "panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29",
 {
  "id": "panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6",
 {
  "id": "panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30",
 {
  "id": "panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6562AC21_6D09_478E_41D9_C94548C51BE3",
 {
  "id": "panorama_6562AC21_6D09_478E_41D9_C94548C51BE3_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6562D802_6D09_4F93_41B4_E5E3A306C515",
 {
  "id": "panorama_6562D802_6D09_4F93_41B4_E5E3A306C515_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6562E025_6D09_5F96_41D9_5293F1924661",
 {
  "id": "panorama_6562E025_6D09_5F96_41D9_5293F1924661_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD",
 {
  "id": "panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_65629885_6D08_C096_41D4_EE4D43ECED1E",
 {
  "id": "panorama_65629885_6D08_C096_41D4_EE4D43ECED1E_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547",
 {
  "id": "panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
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
    "media": "this.panorama_6562E38C_6D09_4096_41B1_734A673DC584",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_6562E38C_6D09_4096_41B1_734A673DC584_camera"
   },
   {
    "media": "this.panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_camera"
   },
   {
    "media": "this.panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF_camera"
   },
   {
    "media": "this.panorama_65616442_6D08_C792_41BA_077C59B68580",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_65616442_6D08_C792_41BA_077C59B68580_camera"
   },
   {
    "media": "this.panorama_65615695_6D08_C0B6_4184_34CBC0A759BA",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_65615695_6D08_C0B6_4184_34CBC0A759BA_camera"
   },
   {
    "media": "this.panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C_camera"
   },
   {
    "media": "this.panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_camera"
   },
   {
    "media": "this.panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "camera": "this.panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15_camera"
   },
   {
    "media": "this.panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "camera": "this.panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09_camera"
   },
   {
    "media": "this.panorama_656250A8_6D0B_409F_41A9_53EF98C75F40",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "camera": "this.panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_camera"
   },
   {
    "media": "this.panorama_65624F53_6D0B_41B1_41D7_A67528B4B074",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "camera": "this.panorama_65624F53_6D0B_41B1_41D7_A67528B4B074_camera"
   },
   {
    "media": "this.panorama_65622DBC_6D08_C0F6_41D3_F146DA631282",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "camera": "this.panorama_65622DBC_6D08_C0F6_41D3_F146DA631282_camera"
   },
   {
    "media": "this.panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "camera": "this.panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB_camera"
   },
   {
    "media": "this.panorama_65621A24_6D08_C397_41C1_D09D0DC22043",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "camera": "this.panorama_65621A24_6D08_C397_41C1_D09D0DC22043_camera"
   },
   {
    "media": "this.panorama_65620760_6D08_C18E_41D1_0E722A330522",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "camera": "this.panorama_65620760_6D08_C18E_41D1_0E722A330522_camera"
   },
   {
    "media": "this.panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "camera": "this.panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7_camera"
   },
   {
    "media": "this.panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "camera": "this.panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29_camera"
   },
   {
    "media": "this.panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "camera": "this.panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6_camera"
   },
   {
    "media": "this.panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "camera": "this.panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30_camera"
   },
   {
    "media": "this.panorama_6562AC21_6D09_478E_41D9_C94548C51BE3",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "camera": "this.panorama_6562AC21_6D09_478E_41D9_C94548C51BE3_camera"
   },
   {
    "media": "this.panorama_6562D802_6D09_4F93_41B4_E5E3A306C515",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "camera": "this.panorama_6562D802_6D09_4F93_41B4_E5E3A306C515_camera"
   },
   {
    "media": "this.panorama_6562E025_6D09_5F96_41D9_5293F1924661",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "camera": "this.panorama_6562E025_6D09_5F96_41D9_5293F1924661_camera"
   },
   {
    "media": "this.panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
    "camera": "this.panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD_camera"
   },
   {
    "media": "this.panorama_65629885_6D08_C096_41D4_EE4D43ECED1E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
    "camera": "this.panorama_65629885_6D08_C096_41D4_EE4D43ECED1E_camera"
   },
   {
    "media": "this.panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 0)",
    "camera": "this.panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547_camera"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "media": "this.panorama_6562E38C_6D09_4096_41B1_734A673DC584",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 0, 1)",
    "camera": "this.panorama_6562E38C_6D09_4096_41B1_734A673DC584_camera"
   },
   {
    "media": "this.panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 1, 2)",
    "camera": "this.panorama_65C1829A_6D09_40B2_41D7_9482B7CAE5B2_camera"
   },
   {
    "media": "this.panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 2, 3)",
    "camera": "this.panorama_65610CE6_6D09_4092_418A_C8CAAF8134BF_camera"
   },
   {
    "media": "this.panorama_65616442_6D08_C792_41BA_077C59B68580",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 3, 4)",
    "camera": "this.panorama_65616442_6D08_C792_41BA_077C59B68580_camera"
   },
   {
    "media": "this.panorama_65615695_6D08_C0B6_4184_34CBC0A759BA",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 4, 5)",
    "camera": "this.panorama_65615695_6D08_C0B6_4184_34CBC0A759BA_camera"
   },
   {
    "media": "this.panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 5, 6)",
    "camera": "this.panorama_65629C95_6D0B_40B1_41D9_AD20F0DDE15C_camera"
   },
   {
    "media": "this.panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 6, 7)",
    "camera": "this.panorama_6562A808_6D0B_4F90_41D3_6E8A8788EA40_camera"
   },
   {
    "media": "this.panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 7, 8)",
    "camera": "this.panorama_656283D5_6D0B_40B6_41B7_9F7DFA975B15_camera"
   },
   {
    "media": "this.panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 8, 9)",
    "camera": "this.panorama_656293D9_6D0B_C0BE_41D0_E95B89C77E09_camera"
   },
   {
    "media": "this.panorama_656250A8_6D0B_409F_41A9_53EF98C75F40",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 9, 10)",
    "camera": "this.panorama_656250A8_6D0B_409F_41A9_53EF98C75F40_camera"
   },
   {
    "media": "this.panorama_65624F53_6D0B_41B1_41D7_A67528B4B074",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 10, 11)",
    "camera": "this.panorama_65624F53_6D0B_41B1_41D7_A67528B4B074_camera"
   },
   {
    "media": "this.panorama_65622DBC_6D08_C0F6_41D3_F146DA631282",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 11, 12)",
    "camera": "this.panorama_65622DBC_6D08_C0F6_41D3_F146DA631282_camera"
   },
   {
    "media": "this.panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 12, 13)",
    "camera": "this.panorama_65623D3A_6D08_C1F2_41D1_D99F262A44DB_camera"
   },
   {
    "media": "this.panorama_65621A24_6D08_C397_41C1_D09D0DC22043",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 13, 14)",
    "camera": "this.panorama_65621A24_6D08_C397_41C1_D09D0DC22043_camera"
   },
   {
    "media": "this.panorama_65620760_6D08_C18E_41D1_0E722A330522",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 14, 15)",
    "camera": "this.panorama_65620760_6D08_C18E_41D1_0E722A330522_camera"
   },
   {
    "media": "this.panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 15, 16)",
    "camera": "this.panorama_6562310B_6D09_4192_41C7_7F1EC4C33AD7_camera"
   },
   {
    "media": "this.panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 16, 17)",
    "camera": "this.panorama_65620D3E_6D09_41F3_41DA_B52FE932ED29_camera"
   },
   {
    "media": "this.panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 17, 18)",
    "camera": "this.panorama_656277D4_6D09_C0B6_41D4_E5D3CEA905D6_camera"
   },
   {
    "media": "this.panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 18, 19)",
    "camera": "this.panorama_656245B8_6D09_C0FE_41DA_4F50D5C65F30_camera"
   },
   {
    "media": "this.panorama_6562AC21_6D09_478E_41D9_C94548C51BE3",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 19, 20)",
    "camera": "this.panorama_6562AC21_6D09_478E_41D9_C94548C51BE3_camera"
   },
   {
    "media": "this.panorama_6562D802_6D09_4F93_41B4_E5E3A306C515",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 20, 21)",
    "camera": "this.panorama_6562D802_6D09_4F93_41B4_E5E3A306C515_camera"
   },
   {
    "media": "this.panorama_6562E025_6D09_5F96_41D9_5293F1924661",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 21, 22)",
    "camera": "this.panorama_6562E025_6D09_5F96_41D9_5293F1924661_camera"
   },
   {
    "media": "this.panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 22, 23)",
    "camera": "this.panorama_6562FBEC_6D09_4097_41D8_5D54FCEC17AD_camera"
   },
   {
    "media": "this.panorama_65629885_6D08_C096_41D4_EE4D43ECED1E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 23, 24)",
    "camera": "this.panorama_65629885_6D08_C096_41D4_EE4D43ECED1E_camera"
   },
   {
    "media": "this.panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist, 24, 0)",
    "camera": "this.panorama_6562979E_6D08_C0B2_41C3_8E34D2ED4547_camera"
   }
  ],
  "id": "ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist",
  "class": "PlayList"
 },
 {
  "id": "camera_597D07F9_4805_771B_41CE_9AA29F15FF49",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -104.23
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_597E980A_4805_78F9_41C2_29C1F1BDB4CF",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -42.41
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_597BE81A_4805_7918_41BC_E40E5EB77F01",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -56.81
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5964F833_4805_7928_41CE_353A73C41CF9",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -155.71
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5961D84C_4805_7978_41D0_3680B941BBCF",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -100.51
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59628860_4805_7928_41BF_BD18E9C75E95",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -92.43
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_596F2871_4805_7928_41AD_E7D66B357FD2",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -129.69
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59683882_4805_79E8_41C3_30E31FA3F692",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 154.14
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5954D895_4805_79E8_4183_139F74DDE0C5",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -78.03
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5951E8A9_4805_7938_41C6_054F9F31C37D",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 65.34
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_595248C3_4805_7968_41BE_E524B2C4E9F2",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 90.48
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_595ED8D4_4805_7968_41CD_84F61C630055",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -80.43
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_595B48EA_4805_7938_41C4_46BAD5A7C2CF",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 17.21
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59478905_4805_78E8_41CB_BD9558CC71CB",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -8.18
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59400916_4805_78E8_41A3_629C6736EC74",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 143.4
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_594C2932_4805_7B28_41C6_2127CEA9BA25",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 52.08
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_594BE945_4805_7B6B_41A1_48F583E401F0",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 52.71
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59B76964_4805_7B29_41C7_172C666BF12C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 86.18
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59B33978_4805_7B19_41CE_009FBC61572F",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 119.4
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59BEB98E_4805_7BF6_41D0_BB0CB0A2379C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 145.05
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59A5D9AE_4805_7B38_41BB_32BD5B471F54",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -170.11
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59A619CF_4805_7B78_41A3_CC17940FF005",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 56.12
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59ADA9E7_4805_7B28_41CB_E470001AE984",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 138.98
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59A919F7_4805_7B28_41A0_28F454035E2F",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -24.22
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5994EA15_4805_78E8_41A6_E00F05141E98",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 75.19
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59909A35_4805_7928_41CB_9224BD984128",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -29.02
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_599C1A4E_4805_7978_41C9_9F67E38A236B",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -153.06
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_599BBA6B_4805_7938_41C5_EB759108C474",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -120.09
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59871A8A_4805_79F8_41CF_9E3A49047FE0",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 100.71
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5982DAA8_4805_7938_41C4_DCDFB6B50F53",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -110.62
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_598E4ACD_4805_797B_41D1_CCA58332A744",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -27.5
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_598A2AF1_4805_792B_41C6_E4D3A0AC239A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 155.53
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59F17B13_4805_78E8_4176_171033D80FE0",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -16.51
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59FD3B32_4805_7F29_4192_13F55417F9A8",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -41.52
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59F8BB4A_4805_7F78_41C4_DDC231CE8453",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 172.71
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59E44B6C_4805_7F38_41D1_A27CAFCB810B",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -46.32
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59E02B89_4805_7FF8_41AE_D31D3DE890BF",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -3.95
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59EFDBA0_4805_7F28_41BF_4F0421434698",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -25.61
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59EAABB5_4805_7F28_41C4_9EB37F1742EA",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 27.7
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59D03BD2_4805_7F68_41B9_DEF88D2557D9",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 153
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59D9ABEF_4805_7F38_4198_A96D7129CD8B",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 29.21
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59C76C11_4805_78E8_41D1_2937866BEF57",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 21.89
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59CCAC28_4805_7938_41C7_A336185BBB4A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -150.15
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_59CACC40_4805_7968_4181_0D36C549FE94",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -53.65
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5A301C55_4805_7968_41C3_09306ED9F7C2",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 13.17
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5A39BC75_4805_7928_41A3_D82DC12938BC",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -118.2
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5A272CA9_4805_7938_41A0_1F630069F3AF",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -41.78
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5A2F9CC2_4805_7968_41C7_53EA5E61A521",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 158.56
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5A152CD9_4805_7918_41CF_4E528347FC29",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -144.85
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5A1DFCF2_4805_7929_41A8_385B17C8CB82",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -73.35
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5A1A9D0B_4805_78FF_41BF_96CD307AD067",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 82.52
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5A032D27_4805_7B37_41A4_DABFA308AA12",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -59.96
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5A0BCD38_4805_7B18_41AE_171F762C359D",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -132.09
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5A709D4D_4805_7B78_41D0_9AA4CCB46B12",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 12.67
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5A792D63_4805_7B28_41D0_7530054E0882",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 128.62
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5A666D7B_4805_7B18_41A6_FAC9B336F0CC",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -128.05
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5A6EAD93_4805_7BE8_4195_78EC19B853C7",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 112.84
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5A574DB6_4805_7B28_41B1_2E838D640E64",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 17.09
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
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
  "playbackBarHeadShadowHorizontalLength": 0,
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
  "playbackBarHeadShadowVerticalLength": 0,
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
  "shadow": false,
  "toolTipFontColor": "#FFFEE9",
  "toolTipFontFamily": "Verdana",
  "playbackBarBorderRadius": 4,
  "toolTipBorderSize": 0,
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
  "toolTipFontSize": 20,
  "width": "100%",
  "class": "ViewerArea",
  "playbackBarBorderSize": 2,
  "playbackBarBackgroundOpacity": 1,
  "toolTipOpacity": 1,
  "toolTipShadowOpacity": 0,
  "toolTipTextShadowHorizontalLength": 0,
  "playbackBarHeadBorderSize": 0,
  "minHeight": 50,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipBorderColor": "#FFFEE9",
  "toolTipFontWeight": "normal",
  "progressRight": 10,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "progressOpacity": 1,
  "playbackBarHeadShadow": true,
  "minWidth": 100,
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
  "toolTipTextShadowVerticalLength": 0,
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
  "toolTipBackgroundColor": "#333333",
  "toolTipTextShadowOpacity": 0.58,
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
  "children": [
   {
    "height": "53.521%",
    "children": [
     "this.IconButton_44EC314A_480B_8B78_4182_C1245363E68E",
     {
      "height": "100%",
      "children": [
       "this.IconButton_44EDA14A_480B_8B78_41B3_E803AC1E8F2D"
      ],
      "paddingLeft": 0,
      "contentOpaque": false,
      "class": "Container",
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "minHeight": 20,
      "scrollBarWidth": 10,
      "verticalAlign": "middle",
      "paddingTop": 0,
      "minWidth": 20,
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
      "id": "Container_44ED814A_480B_8B78_4187_E7F48D07BE12",
      "borderRadius": 0,
      "layout": "vertical"
     },
     "this.IconButton_44ED714A_480B_8B78_41C0_F1518D335A27"
    ],
    "paddingLeft": 0,
    "contentOpaque": false,
    "width": "22.303%",
    "class": "Container",
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "minHeight": 20,
    "scrollBarWidth": 10,
    "verticalAlign": "middle",
    "paddingTop": 0,
    "minWidth": 20,
    "scrollBarMargin": 2,
    "overflow": "hidden",
    "paddingBottom": 0,
    "shadow": false,
    "scrollBarColor": "#000000",
    "paddingRight": 0,
    "gap": 4,
    "horizontalAlign": "center",
    "backgroundOpacity": 0,
    "scrollBarOpacity": 0.5,
    "id": "Container_44ED014A_480B_8B78_41BC_91EE35AAC19F",
    "borderRadius": 0,
    "layout": "horizontal"
   }
  ],
  "paddingLeft": 0,
  "contentOpaque": false,
  "width": "100%",
  "class": "Container",
  "bottom": "0%",
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "minHeight": 1,
  "scrollBarWidth": 10,
  "verticalAlign": "middle",
  "paddingTop": 0,
  "minWidth": 1,
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
  "height": 142,
  "layout": "horizontal"
 },
 {
  "itemLabelFontWeight": "normal",
  "scrollBarOpacity": 0.54,
  "itemLabelGap": 8,
  "itemHorizontalAlign": "center",
  "itemBorderRadius": 0,
  "paddingLeft": 20,
  "playList": "this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist",
  "borderRadius": 5,
  "selectedItemLabelFontWeight": "bold",
  "itemBackgroundColor": [],
  "class": "ThumbnailList",
  "bottom": "4.49%",
  "itemThumbnailWidth": 100,
  "itemThumbnailShadowOpacity": 0.27,
  "itemThumbnailScaleMode": "fit_outside",
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "selectedItemLabelFontColor": "#666666",
  "minHeight": 20,
  "itemThumbnailHeight": 75,
  "width": 179.05,
  "scrollBarWidth": 10,
  "verticalAlign": "top",
  "itemThumbnailShadowColor": "#000000",
  "itemLabelFontFamily": "Tahoma",
  "itemLabelFontSize": 14,
  "itemThumbnailShadowVerticalLength": 3,
  "paddingTop": 10,
  "minWidth": 20,
  "scrollBarMargin": 2,
  "rollOverItemBackgroundOpacity": 0,
  "itemThumbnailBorderRadius": 5,
  "itemThumbnailOpacity": 1,
  "itemPaddingTop": 3,
  "itemPaddingLeft": 3,
  "itemBackgroundOpacity": 0,
  "right": "2.12%",
  "itemBackgroundColorRatios": [],
  "shadow": false,
  "itemThumbnailShadow": true,
  "paddingBottom": 10,
  "itemThumbnailShadowSpread": 1,
  "itemThumbnailShadowBlurRadius": 8,
  "itemLabelPosition": "bottom",
  "itemLabelTextDecoration": "none",
  "itemVerticalAlign": "middle",
  "itemPaddingRight": 3,
  "paddingRight": 20,
  "rollOverItemLabelFontStyle": "italic",
  "itemThumbnailShadowHorizontalLength": 3,
  "itemMode": "normal",
  "itemBackgroundColorDirection": "vertical",
  "horizontalAlign": "left",
  "gap": 13,
  "height": "87.39%",
  "id": "ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4",
  "itemPaddingBottom": 3,
  "itemLabelFontColor": "#FFFFFF",
  "backgroundOpacity": 0,
  "itemLabelHorizontalAlign": "center",
  "itemLabelFontStyle": "normal",
  "layout": "vertical",
  "scrollBarColor": "#FFFFFF",
  "itemOpacity": 1,
  "rollOverItemLabelFontWeight": "normal"
 },
 {
  "iconURL": "skin/IconButton_C9655200_C52B_9C96_41D7_A93BB22119DA.png",
  "maxWidth": 128,
  "paddingLeft": 0,
  "class": "IconButton",
  "top": "1.5%",
  "borderSize": 0,
  "minHeight": 1,
  "verticalAlign": "middle",
  "paddingTop": 0,
  "minWidth": 1,
  "mode": "toggle",
  "transparencyActive": true,
  "shadow": false,
  "paddingBottom": 0,
  "cursor": "hand",
  "paddingRight": 0,
  "right": "1.5%",
  "width": 45.45,
  "horizontalAlign": "center",
  "backgroundOpacity": 0,
  "height": 40,
  "id": "IconButton_C9655200_C52B_9C96_41D7_A93BB22119DA",
  "borderRadius": 0,
  "maxHeight": 128
 }
], 
 "height": "100%",
 "contentOpaque": false,
 "paddingLeft": 0,
 "start": "this.syncPlaylists([this.ThumbnailList_25CFDA27_3B2E_0E81_41C9_9508AC5D55A4_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_C9655200_C52B_9C96_41D7_A93BB22119DA].forEach(function(component) { component.set('visible', false); }) }",
 "width": "100%",
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "minWidth": 20,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "buttonToggleFullscreen": "this.IconButton_C9655200_C52B_9C96_41D7_A93BB22119DA",
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
 "layout": "absolute",
 "scripts": {
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "existsKey": function(key){    return key in window; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "unregisterKey": function(key){    delete window[key]; },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "registerKey": function(key, value){    window[key] = value; },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "getKey": function(key){    return window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } }
 }
})