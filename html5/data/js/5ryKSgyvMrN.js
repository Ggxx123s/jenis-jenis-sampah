﻿window.globalProvideData('slide', '{"title":"Drag and Drop","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":2,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide2","width":960,"height":540,"resume":true,"background":{"type":"swf","imagedata":{"assetId":79,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"5ryKSgyvMrN","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5Xwj3PTghrt.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"5p8ysgFc6Gq.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"6Ff1DMXujOY.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"67sn4BEZXFD.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"6LxFr3j7tle.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"6UYQdmhVisV.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_this.5Xsiav907u9"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6G9Fg5fqXqB.InvalidPromptSlide"}}]}]},"ReviewInt_6CdntUd304G":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6LxFr3j7tle"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6Ff1DMXujOY"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"67sn4BEZXFD"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5p8ysgFc6Gq"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5Xwj3PTghrt"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6UYQdmhVisV"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5Xsiav907u9.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6CdntUd304G_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6CdntUd304G_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6CdntUd304G","typea":"var","valueb":"5nGJhXkczVN","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00001100001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5nGJhXkczVN.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6CdntUd304G"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5nGJhXkczVN.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6CdntUd304G"}]}]}]},"ReviewIntCorrectIncorrect_6CdntUd304G":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6LxFr3j7tle"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6Ff1DMXujOY"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"67sn4BEZXFD"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5p8ysgFc6Gq"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5Xwj3PTghrt"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6UYQdmhVisV"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6CdntUd304G":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6CdntUd304G"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100001"}]}]},"DisableChoices_6CdntUd304G":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6LxFr3j7tle"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6Ff1DMXujOY"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"67sn4BEZXFD"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5p8ysgFc6Gq"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5Xwj3PTghrt"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6UYQdmhVisV"},"enabled":{"type":"boolean","value":false}}]},"6CdntUd304G_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5Xsiav907u9.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5nGJhXkczVN.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6CdntUd304G"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5Xsiav907u9.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5Xsiav907u9.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6CdntUd304G"}]}]}]}]},"SetLayout_pxabnsnfns00001100001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100001"}]}]},"NavigationRestrictionNextSlide_5ryKSgyvMrN":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6b5mZGBXetW"}}]},"NavigationRestrictionPreviousSlide_5ryKSgyvMrN":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00001100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00001100001"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6G9Fg5fqXqB","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6G9Fg5fqXqB","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#5nGJhXkczVN_TimerStopped","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.5nGJhXkczVN_timer"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#5nGJhXkczVN_TimerExpired","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6CdntUd304G"}]},{"kind":"showtimer","id":"_player.5nGJhXkczVN_timer"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6CdntUd304G","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6CdntUd304G"}],"elseActions":[{"kind":"exe_actiongroup","id":"6CdntUd304G_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6CdntUd304G","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6CdntUd304G","typea":"var","valueb":"5nGJhXkczVN","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5nGJhXkczVN"},"completed_slide_ref":{"type":"string","value":"_player.6Hbanj7FTQJ.6b5mZGBXetW"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6CdntUd304G","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6CdntUd304G","typea":"var","valueb":"5nGJhXkczVN","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5nGJhXkczVN"},"completed_slide_ref":{"type":"string","value":"_player.6Hbanj7FTQJ.6b5mZGBXetW"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5ryKSgyvMrN"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5ryKSgyvMrN"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6nX4QGZYDUP"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"69DcY6KHJGO"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5oN0oLrIGKj"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6dQtuHXgnLC"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5p8ysgFc6Gq"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5Xwj3PTghrt"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Ff1DMXujOY"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LxFr3j7tle"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"67sn4BEZXFD"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6UYQdmhVisV"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":76,"id":"01","url":"story_content/6iY5n0MQefI.png","type":"normal","altText":"DeWatermark.ai_1735362043897.png","width":960,"height":625,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":-216,"yPos":-386,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":712.5,"rotateYPos":464,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1425,"bottom":928,"altText":"DeWatermark.ai_1735362043897.png","pngfb":false,"pr":{"l":"Lib","i":227}},"html5data":{"xPos":0,"yPos":0,"width":1425,"height":928,"strokewidth":0}},"width":1425,"height":928,"resume":true,"useHandCursor":true,"id":"6nX4QGZYDUP"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":42,"id":"01","url":"story_content/6kiE5OR4Kc6.png","type":"normal","altText":"—Pngtree—elements of various recycling bins_4309035.png","width":288,"height":394,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":25,"yPos":374,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":108,"rotateYPos":80.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":0,"snapy":0,"dragreturn":true,"multidrop":true,"droptype":"tile","dropoffsetx":0,"dropoffsety":0,"dragdropids":["_drop_6YBb8iUspw9","_drop_5b6XTOAihoI"],"dragoverids":["_drop_6YBb8iUspw9","_drop_5b6XTOAihoI"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":216,"bottom":161,"altText":"—Pngtree—elements of various recycling bins_4309035.png","pngfb":false,"pr":{"l":"Lib","i":237}},"html5data":{"xPos":0,"yPos":0,"width":216,"height":161,"strokewidth":0}},"width":216,"height":161,"resume":true,"useHandCursor":true,"id":"69DcY6KHJGO"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":27,"id":"01","url":"story_content/61mzCdEceZJ.png","type":"normal","altText":"anorganik.png","width":264,"height":344,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":344,"yPos":382,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":92.5,"rotateYPos":72.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":0,"snapy":0,"dragreturn":true,"multidrop":true,"droptype":"tile","dropoffsetx":0,"dropoffsety":0,"dragdropids":["_drop_6ZUOBw0OrKc","_drop_5j2jPTzmQiB"],"dragoverids":["_drop_6ZUOBw0OrKc","_drop_5j2jPTzmQiB"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":185,"bottom":145,"altText":"anorganik.png","pngfb":false,"pr":{"l":"Lib","i":238}},"html5data":{"xPos":0,"yPos":0,"width":185,"height":145,"strokewidth":0}},"width":185,"height":145,"resume":true,"useHandCursor":true,"id":"5oN0oLrIGKj"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":38,"id":"01","url":"story_content/6UEpCiBUZZz.png","type":"normal","altText":"b3.png","width":265,"height":378,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":632,"yPos":382,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":95,"rotateYPos":78,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":0,"snapy":0,"dragreturn":true,"multidrop":true,"droptype":"tile","dropoffsetx":0,"dropoffsety":0,"dragdropids":["_drop_6BaRZUy6sbW","_drop_6EWzcooRINq"],"dragoverids":["_drop_6BaRZUy6sbW","_drop_6EWzcooRINq"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":190,"bottom":156,"altText":"b3.png","pngfb":false,"pr":{"l":"Lib","i":239}},"html5data":{"xPos":0,"yPos":0,"width":190,"height":156,"strokewidth":0}},"width":190,"height":156,"resume":true,"useHandCursor":true,"id":"6dQtuHXgnLC"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":80,"id":"01","url":"story_content/60cRYoMSf2L.png","type":"normal","altText":"botol.png","width":194,"height":146,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":104,"yPos":310,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":48.5,"rotateYPos":37,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":48,"snapy":36,"dragreturn":true,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_6ZUOBw0OrKc"],"dragoverids":["_drop_6ZUOBw0OrKc"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":97,"bottom":74,"altText":"botol.png","pngfb":false,"pr":{"l":"Lib","i":240}},"html5data":{"xPos":0,"yPos":0,"width":97,"height":74,"strokewidth":0}},"width":97,"height":74,"resume":true,"useHandCursor":true,"id":"5p8ysgFc6Gq","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":81,"id":"01","url":"story_content/6H875OG4VPt.png","type":"normal","altText":"DeWatermark.ai_1735362371862-removebg-preview.png","width":198,"height":128,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":800,"yPos":414,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":49.5,"rotateYPos":32,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":49,"snapy":32,"dragreturn":true,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_6YBb8iUspw9"],"dragoverids":["_drop_6YBb8iUspw9"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":99,"bottom":64,"altText":"DeWatermark.ai_1735362371862-removebg-preview.png","pngfb":false,"pr":{"l":"Lib","i":241}},"html5data":{"xPos":0,"yPos":0,"width":99,"height":64,"strokewidth":0}},"width":99,"height":64,"resume":true,"useHandCursor":true,"id":"5Xwj3PTghrt","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":335.709,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":33,"id":"01","url":"story_content/6LkCqfqmg9M.png","type":"normal","altText":"DeWatermark.ai_1735359706804-removebg-preview.png","width":202,"height":202,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":784,"yPos":294,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":44,"rotateYPos":44,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":43,"snapy":43,"dragreturn":true,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_6BaRZUy6sbW"],"dragoverids":["_drop_6BaRZUy6sbW"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":88,"bottom":88,"altText":"DeWatermark.ai_1735359706804-removebg-preview.png","pngfb":false,"pr":{"l":"Lib","i":242}},"html5data":{"xPos":0,"yPos":0,"width":88,"height":88,"strokewidth":0}},"width":88,"height":88,"resume":true,"useHandCursor":true,"id":"6Ff1DMXujOY","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":82,"id":"01","url":"story_content/5VoMBM3CGrf.png","type":"normal","altText":"Slide3_sampah-anorganik-x.png","width":106,"height":148,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":864,"yPos":286,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":26,"rotateYPos":37,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":26,"snapy":36,"dragreturn":true,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5j2jPTzmQiB"],"dragoverids":["_drop_5j2jPTzmQiB"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":52,"bottom":74,"altText":"Slide3_sampah-anorganik-x.png","pngfb":false,"pr":{"l":"Lib","i":243}},"html5data":{"xPos":0,"yPos":0,"width":52,"height":74,"strokewidth":0}},"width":52,"height":74,"resume":true,"useHandCursor":true,"id":"6LxFr3j7tle","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":81,"id":"01","url":"story_content/6H875OG4VPt.png","type":"normal","altText":"DeWatermark.ai_1735362371862-removebg-preview.png","width":198,"height":128,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":8,"yPos":310,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":49.5,"rotateYPos":32,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":49,"snapy":32,"dragreturn":true,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5b6XTOAihoI"],"dragoverids":["_drop_5b6XTOAihoI"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":99,"bottom":64,"altText":"DeWatermark.ai_1735362371862-removebg-preview.png","pngfb":false,"pr":{"l":"Lib","i":241}},"html5data":{"xPos":0,"yPos":0,"width":99,"height":64,"strokewidth":0}},"width":99,"height":64,"resume":true,"useHandCursor":true,"id":"67sn4BEZXFD","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":335.709,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":33,"id":"01","url":"story_content/6LkCqfqmg9M.png","type":"normal","altText":"DeWatermark.ai_1735359706804-removebg-preview.png","width":202,"height":202,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":808,"yPos":462,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":44,"rotateYPos":44,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":43,"snapy":43,"dragreturn":true,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_6EWzcooRINq"],"dragoverids":["_drop_6EWzcooRINq"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":88,"bottom":88,"altText":"DeWatermark.ai_1735359706804-removebg-preview.png","pngfb":false,"pr":{"l":"Lib","i":242}},"html5data":{"xPos":0,"yPos":0,"width":88,"height":88,"strokewidth":0}},"width":88,"height":88,"resume":true,"useHandCursor":true,"id":"6UYQdmhVisV","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6CdntUd304G_CorrectReview","id":"01","linkId":"6CdntUd304G_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":522,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":170}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":960,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":169}},"html5data":{"xPos":1,"yPos":1,"width":957,"height":37,"strokewidth":2}},"width":960,"height":40,"resume":false,"useHandCursor":true,"id":"6CdntUd304G_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6CdntUd304G_IncorrectReview","id":"01","linkId":"6CdntUd304G_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":531,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":172}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":12,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":960,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":171}},"html5data":{"xPos":1,"yPos":1,"width":957,"height":37,"strokewidth":2}},"width":960,"height":40,"resume":false,"useHandCursor":true,"id":"6CdntUd304G_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');