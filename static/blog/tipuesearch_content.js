var tipuesearch = {"pages":[{"tags":"bg10","text":"內容規畫 : 期末總結 心得 自評分數 60分 onshape 心得 自評分數 60分 自製2d繪圖 心得 自評分數 60分 網際 3D 正齒輪傳動模擬 (一) 心得 一樣是組裝零件，這次使用Onshape操作起來不太一樣。以往繪圖軟體可以使用外切指令將2個齒輪的2齒面嚙合，而Onshape需要調整嚙合角度以及傳動比，有更真實的感覺。 自評分數 60分 網際 2D 正齒輪傳動囓合繪圖 心得 操作後了解到齒輪嚙合需要許多條件來拘束，且齒輪大小.齒數也不能隨便配。 自評分數 60分 自行車傳動 2D 鏈條繪圖 (二) 心得 經過精密的計算與微妙的程式設計，引導出此單元。其中較困難的地方是鏈與鏈之間的接合，常碰到角度或距離的誤差，導致無法同心。 自評分數 60分","title":"40323222 w18-3報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323222-w18-3bao-gao.html"},{"tags":"bg10","text":"內容規畫 : onshape 心得 老師所給的齒數讓我們必須去分析如何才能不干涉，而組裝的過程與之前的步驟相同，比較有困難的是如何調整轉動多少齒來解決干涉。 自評分數 70分","title":"40323222 w18-2報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323222-w18-2bao-gao.html"},{"tags":"bg10","text":"內容規畫 : 自製2d繪圖 心得 這個2D部分的步驟與之前cdw2類似，把之前的語法拿來用，然後把畫好的solvespace轉乘2D section，用Scite打開，然後將中心資料放到對應位置，然後用localhost在網頁上看，達到2D網際繪圖的目的。 自評分數 70分","title":"40323222 w18-1報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323222-w18-1bao-gao.html"},{"tags":"bg9","text":"期末報告 (統整) 鍊條上30下18齒 從老師的18及30齒中，找到eighteenthirty 或是 其他程式拿來修改，我是用eighteenthirty，然後將兩部分的鏈條分開，並定位到(0,0)位置，就可以開始計算需要移動的距離，就可以很容易的接合，但是修改容易寫程式難，還是要想辦法搞懂程式才行。 2D齒輪嚙合 @bg9_40323250.route('/gear_50') def gear_50(): outstring = ''' <!DOCTYPE html> <html> <head> <meta charset=\"UTF-8\"> <title>網際 2D 繪圖</title> <!-- IE 9: display inline SVG --> <meta http-equiv=\"X-UA-Compatible\" content=\"IE=9\"> <script type=\"text/javascript\" src=\"http://brython.info/src/brython_dist.js\"></script> <script type=\"text/javascript\" src=\"http://2015fallhw.github.io/cptocadp/static/Cango-8v03.js\"></script> <script type=\"text/javascript\" src=\"http://2015fallhw.github.io/cptocadp/static/Cango2D-7v01-min.js\"></script> <script type=\"text/javascript\" src=\"http://2015fallhw.github.io/cptocadp/static/gearUtils-05.js\"></script> <script> window.onload=function(){ brython(1); } </script> <canvas id='gear1' width='800' height='750'></canvas> <script type=\"text/python\"> # 將 導入的 document 設為 doc 主要原因在於與舊程式碼相容 from browser import document as doc # 由於 Python3 與 Javascript 程式碼已經不再混用, 因此來自 Javascript 的變數, 必須居中透過 window 物件轉換 from browser import window # 針對 Javascript 既有的物件, 則必須透過 JSConstructor 轉換 from javascript import JSConstructor import math # 主要用來取得畫布大小 canvas = doc[\"gear1\"] # 此程式採用 Cango Javascript 程式庫繪圖, 因此無需 ctx #ctx = canvas.getContext(\"2d\") # 針對類別的轉換, 將 Cango.js 中的 Cango 物件轉為 Python cango 物件 cango = JSConstructor(window.Cango) # 針對變數的轉換, shapeDefs 在 Cango 中資料型別為變數, 可以透過 window 轉換 shapedefs = window.shapeDefs # 目前 Cango 結合 Animation 在 Brython 尚無法運作, 此刻只能繪製靜態圖形 # in CangoAnimation.js #interpolate1 = window.interpolate # Cobi 與 createGearTooth 都是 Cango Javascript 程式庫中的物件 cobj = JSConstructor(window.Cobj) creategeartooth = JSConstructor(window.createGearTooth) # 經由 Cango 轉換成 Brython 的 cango, 指定將圖畫在 id=\"plotarea\" 的 canvas 上 cgo = cango(\"gear1\") ###################################### # 畫正齒輪輪廓 ##################################### def spur(cx, cy, m, n, pa, theta): # n 為齒數 #n = 17 # pa 為壓力角 #pa = 25 # m 為模數, 根據畫布的寬度, 計算適合的模數大小 # Module = mm of pitch diameter per tooth #m = 0.8*canvas.width/n # pr 為節圓半徑 pr = n*m/2 # gear Pitch radius # generate gear data = creategeartooth(m, n, pa) # Brython 程式中的 print 會將資料印在 Browser 的 console 區 #print(data) gearTooth = cobj(data, \"SHAPE\", { \"fillColor\":\"#ddd0dd\", \"border\": True, \"strokeColor\": \"#606060\" }) #gearTooth.rotate(180/n) # rotate gear 1/2 tooth to mesh, 請注意 rotate 角度為 degree # theta 為角度 gearTooth.rotate(theta) # 單齒的齒形資料經過旋轉後, 將資料複製到 gear 物件中 gear = gearTooth.dup() # gear 為單一齒的輪廓資料 #cgo.render(gearTooth) # 利用單齒輪廓旋轉, 產生整個正齒輪外形 for i in range(1, n): # 將 gearTooth 中的資料複製到 newTooth newTooth = gearTooth.dup() # 配合迴圈, newTooth 的齒形資料進行旋轉, 然後利用 appendPath 方法, 將資料併入 gear newTooth.rotate(360*i/n) # appendPath 為 Cango 程式庫中的方法, 第二個變數為 True, 表示要刪除最前頭的 Move to SVG Path 標註符號 gear.appendPath(newTooth, True) # trim move command = True # 建立軸孔 # add axle hole, hr 為 hole radius hr = 0.6*pr # diameter of gear shaft shaft = cobj(shapedefs.circle(hr), \"PATH\") shaft.revWinding() gear.appendPath(shaft) # retain the 'moveTo' command for shaft sub path gear.translate(cx, cy) # render 繪出靜態正齒輪輪廓 cgo.render(gear) # 接著繪製齒輪的基準線 deg = math.pi/180 Line = cobj(['M', cx, cy, 'L', cx+pr*math.cos(theta*deg), cy+pr*math.sin(theta*deg)], \"PATH\", { 'strokeColor':'blue', 'lineWidth': 1}) cgo.render(Line) # 3個齒輪的齒數 n1 = 10 n2 = 12 n3 = 14 n4 = 16 # m 為模數, 根據畫布的寬度, 計算適合的模數大小 # Module = mm of pitch diameter per tooth # 利用 80% 的畫布寬度進行繪圖 # 計算模數的對應尺寸 m = canvas.width*0.8/(n1+n2+n3+n4) # 根據齒數與模組計算各齒輪的節圓半徑 pr1 = n1*m/2 pr2 = n2*m/2 pr3 = n3*m/2 pr4 = n4*m/2 # 畫布左右兩側都保留畫布寬度的 10% # 依此計算對應的最左邊齒輪的軸心座標 cx = canvas.width*0.1+pr1 cy = canvas.height/2 # pa 為壓力角 pa = 25 # 畫布左右兩側都保留畫布寬度的 10% # 依此計算對應的最左邊齒輪的軸心座標 cx = canvas.width*0.1+pr1 cy = canvas.height/2 # pa 為壓力角 pa = 25 # 畫最左邊齒輪, 定位線旋轉角為 0, 軸心座標 (cx, cy) spur(cx, cy, m, n1, pa, 0) # 第2個齒輪將原始的定位線逆時鐘轉 180 度後, 與第1個齒輪正好齒頂與齒頂對齊 # 只要第2個齒輪再逆時鐘或順時鐘轉動半齒的角度, 即可完成囓合 # 每一個齒分別包括從齒根到齒頂的範圍, 涵蓋角度為 360/n, 因此所謂的半齒角度為 180/n spur(cx+pr1+pr2, cy, m, n2, pa, 180-180/n2) # 第2齒與第3齒的囓合, 首先假定第2齒的定位線在 theta 角為 0 的原始位置 # 如此, 第3齒只要逆時鐘旋轉 180 度後, 再逆時鐘或順時鐘轉動半齒的角度, 即可與第2齒囓合 # 但是第2齒為了與第一齒囓合時, 已經從原始定位線轉了 180-180/n2 度 # 而當第2齒從與第3齒囓合的定位線, 逆時鐘旋轉 180-180/n2 角度後, 原先囓合的第3齒必須要再配合旋轉 (180-180/n2 )*n2/n3 spur(cx+pr1+pr2+pr2+pr3, cy, m, n3, pa, 180-180/n3+(180-180/n2)*n2/n3) spur(cx+pr1+pr2+pr2+pr3+pr3+pr4, cy, m, n4, pa, 180-180/n3*n3/n4+(180-180/n2)*n2/n3*n3/n4+(180-180/n3)*n3/n4) </script> <script type='text/javascript'> var onWebChat={ar:[], set: function(a,b){if (typeof onWebChat_==='undefined'){this.ar. push([a,b]);}else{onWebChat_.set(a,b);}},get:function(a){return(onWebChat_.get(a));},w :(function(){ var ga=document.createElement('script'); ga.type = 'text/javascript';ga. async=1;ga.src='//www.onwebchat.com/clientchat/795d781612868f02aa4bb0552c0655a5/1/1'; var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s);})()} </script> </body> </html> ''' return outstring 完成圖 gear_relations 心得 期中以後，以程式繪圖的方法大概弄懂了，Onshape也開放了feature studio，畫圖的方式也近似於我們的畫法，還可以設定變數，現在連齒輪都能直接呼叫了。 creo 2.0 已經正式被放棄，隨著時代的進步，我們要有更強的能力，而不是原地踏步 6/17更新 onshape可以自行設定變數，只能在同一個part studio裡面使用，對於參數式的設計更便利，尺寸有變動時，只要更改一個數值，其他的零件也會同時做相對的變化。 自評成績 : 93","title":"40323250 期末報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323250-qi-mo-bao-gao.html"},{"tags":"bg9","text":"cdw13內容規畫 : 將老師的鏈條轉90度 構想 : 將老師的eighteenthirty的起始角度轉90度之後，會有兩部分分開，只要將兩個圖形都定位到(0, 0)後，找到重疊的部分，再利用三角函數算出座標點差距，就可以接再一起了 完成圖:","title":"40323250 cdw13報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323250-cdw13bao-gao.html"},{"tags":"bg9","text":"cdw11內容規畫 : 利用老師開放之鍊條程式碼，嘗試做出兩個鍊條，並能透過6個參數調整外角、x座標及y座標。 完成圖:","title":"40323250 cdw11報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323250-cdw11bao-gao.html"},{"tags":"bg9","text":"期末協同報告 鍊條轉90度 4個齒輪嚙合 onshape齒輪 心得: 這個學期上課，從期中前的報告到期末的報告都是需要組員共同來完成的， 像是其中的鏈條設計，還有期末的齒輪的功能設定(齒數)(模數)(截圓直徑) 最後再把多個齒輪組立在一起，大家都是各出一份心力，一起去完成。 (3D正齒輪傳動模擬) Onshape 的正齒輪設計繪圖與組立, 跟與先前的 2D 網際繪圖類似, 只是在 3D 正齒輪傳動組立過程, Onshape Part Studio 中,所有的零件可以透過統一的設計變數進行控管, 但若一旦設計流程的變化超出原先表單的設定範圍 (例如: SG Featurescript 中的 Offset angle 只允許 0-360 的正值角度輸入)","title":"40323233 期末報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323233-qi-mo-bao-gao.html"},{"tags":"bg9","text":"cdw14 這週的上課內容是複製老師上課所公布的程式碼，然後去做第四個齒輪與第三個齒輪要相嚙合， 然後再使用Onshape把它畫出來，並且執行模擬。 中間需要修改程式的地方是，繪製第四個齒輪與第三個齒輪需要相嚙合 之程式。 spur(cx+pr1+pr2+pr3+pr4,cy,m,n4,pa,(180-180/n3)*n3/n4) 使用Onshape繪製齒輪時覺得這個雲端網站真的是很方便，繪製完時可以直接進行模擬 齒輪轉動的過程，希望他之後能發展出更新的東西。","title":"40323233   cdw14","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323233-cdw14.html"},{"tags":"bg9","text":"cdw13 這週要做的內容是將老師所給的鏈條轉成90度 要使用solvespace畫出鍊條後可以得知很多參數， 把圖定位在(0,0)在利用三角函數算出座標點差距，就可以接再一起了。 從老師給的程式碼eighteenthirty中去修改，雖然最後問了同學才知道怎麼改， 但自己並不是很了解，所以必須加緊腳步了解程式真正的意思。","title":"40323233   cdw13","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323233-cdw13.html"},{"tags":"bg9","text":"cdw11 必須做出兩個鍊條，並且可以透過六個值去調整外角 X座標跟Y座標 簡單來說就是可以調整鍊條的大小，能自行調整使用者變數數量來產生鍊條。","title":"40323233   cdw11","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323233-cdw11.html"},{"tags":"bg9","text":"40323231-5內容 用onshape繪製齒輪，並能夠轉動 個人Onshape圖檔 : onshape 心得 : 用onshape繪製能夠轉動的齒輪很有成就感，雖然中途有碰到很多問題，可是經過很多次的測試和和同學討論，像是齒輪和齒輪的配和條件，這個部分就花了很多時間摸索，最後還是完成了。 自評分數 : 80","title":"40323231 - 5報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323231-5bao-gao.html"},{"tags":"bg9","text":"40323231-4內容 本次的作業是多增加一個齒輪，而且要符合現實 定義第四個齒輪的齒數 增加第四齒 定義第四齒的節圓半徑 定義第四齒X方向Y方向和旋轉角度等等。 完成圖 心得 : 這次的作業非常的好玩有趣，因為能夠自己建立新的齒輪，自己設計，想要多大就多大，想要放哪裡就放哪裡，想要幾個就幾個，而且要配合的那個旋轉角度也很有學問，因為我測試過很多種方式可是都失敗，像是我有測試過旋轉前三個的單齒角度，可是他有基準線，所以變得很難用參數去定義，雖然最後還是只能沿用教材，可是還是理解函數的轉換。 自評分數 : 85","title":"40323231 - 4報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323231-4bao-gao.html"},{"tags":"bg9","text":"40323231-3內容 本次是將固定齒數的三個齒輪，變成可以直接在遠端或近端改變 先將原本固定數值變成可改變的數值 1.設定在輸入threecircle的檔案後，先呈現內定的數值 2.在threecircle後面輸入\"/數值\"即可直接設定三個齒輪中各個的齒數。 圖1. 圖2. 心得 : 這次的作業其實滿簡單的，因為前幾次在做作業中就有曾經用到本次作業的內容，所以很快地就完成了這次作業。 自評分數 : 80","title":"40323231 - 3報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323231-3bao-gao.html"},{"tags":"bg9","text":"40323231-2內容 本次的作業是要將倒的圖形變正的圖形 本圖為倒立的 本圖為正立的，並且位移圖形 更改照片中以及程式中相關的數值和參數就可以改變 心得 : 本次的課程和作業用solvespace可以得出很多的參數數值，然後這些數值可以直接改變圖的外型、方向、位置等等，所以本次的內容較於多變，而且有很多地方可以呼叫，之後可以增加圖形及改變形狀，所以本周的課程滿喜歡的。 自評分數 : 85","title":"40323231 - 2報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323231-2bao-gao.html"},{"tags":"bg9","text":"40323231-1內容 將複雜的程式分成多項且有序的程式 先創立一個py前面是edit，因為本程式比較長已經超過內定，所以如果直接用auto則無法直接分行，再來是把網路上的所有程式放置到leo，更改內容文的所有名稱(指的是畫布使用者名稱和呼叫檔案的名稱)。之後再myflaskapp創立使用者。 點選打勾處即可將複雜的程式分成有序地排列。 之後再將auto改成clean，完成。 心得 : 本週上的內容能夠快速地找到問題點進而做更改，不用再一行一行找，使整個流程更順暢更快速。 自評分數 : 70","title":"40323231 - 1報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323231-1bao-gao.html"},{"tags":"bg9","text":"期末報告 : 使用Onshape做最終3D參數式繪圖，已達成使用變數調整客戶需求的目的。 Onshape自從推出Feature Studio的功能，便能實現使用變數調整3D模型的能力，實在是參數式繪圖的一大進步。 在這個作業中，我繪製了模擬用的齒輪箱，並使用變數調整齒輪箱的大小，以利所有齒輪皆不會因為太大而跑出原本的底板。 3D齒輪繪圖 完成圖: 整體外觀 變數調整箱體尺寸 設定齒輪位置 設定齒輪角度位移以利嚙合（常數項總和必須在0-360範圍內） 齒輪嚙合模擬 自評： 80分 期末整理 旋轉鍊條 鍊條圈 5個齒輪 期末心得： 本學期學得的知識受到Onshape最新的Feature Studio影響，離協同參數式繪圖又更進一步。近日科技日新月異，學習使用及應用應屬現代工程師的當務之急。 這學期自評： 75分","title":"40323230 期末報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323230-qi-mo-bao-gao.html"},{"tags":"bg9","text":"cdw13內容規畫 : 對照不同的參數做5個齒輪的設定，以符合嚙合的角度，使用者輸入不同參數亦可有相對應的變化。 完成圖: 自評： 75分 研究老師給的水平鍊條程式碼，試圖轉成垂直狀。由於兩圓之間的直線鍊條是額外加上去的，必須用三角函數計算做相關調整。 完成圖: 自評： 70分","title":"40323230 W13報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323230-w13bao-gao.html"},{"tags":"bg9","text":"cdw11內容規畫 : 改變鍊條的程式碼，增加第二個鍊條，並能使用6個變數調整兩個鍊條的大小。此外能自行調整使用者變數數量來產生鍊條。 完成圖: 1個變數: 2個變數: 3個變數: 4個變數: 5個變數: 6個變數: 自評： 75分","title":"40323230 W11報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323230-w11bao-gao.html"},{"tags":"bg9","text":"期末統整 : cdw11 內容 : 複製在kmolab上的程式碼，嘗試修改參數做出鍊條。 網址紅線處重左至右分別是代表 x , y , degree可以自行設定 xy可控制圖中圓心紅點位置 degree控制鍊條角度，最後繪出一個圓。 cdw13 內容 : Copy 在kmolab上的程式碼，嘗試調整程式使水平鍊條變成垂直鍊條。 水平鍊條 垂直鍊條 (startx , starty)、(p , k)是設定圖形位置，first_degree加90度使圖形成垂直。 cdw14 內容 : 複製老師程式碼，嘗試製作第四個齒輪，而且需要跟第三個齒輪嚙合，再利用OnShape來模擬 繪製第四個齒輪，需嚙合第三個。 紅框部分為第四個齒輪之程式。 在Onshape上執行齒輪轉動 from Li Steven on Vimeo . 心得： 這學期一樣是一起協同來完成課題，每個人專研不同的部分，在一起分享教導自己所學的。在OnShape上進步了許多，也對python有更進一步的了解，這學期過得很充實!暑假將至，升大三後需要自訂目標，努力去達成。 自評：80分","title":"40323218 期末報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323218-qi-mo-bao-gao.html"},{"tags":"bg9","text":"cdw14 內容 : 複製老師程式碼，嘗試製作第四個齒輪，而且需要跟第三個齒輪嚙合，再利用OnShape來模擬 繪製第四個齒輪，需嚙合第三個。 紅框部分為第四個齒輪之程式。 在Onshape上執行齒輪轉動 from Li Steven on Vimeo . 自評：75分","title":"40323218  cdw14 報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323218-cdw14-bao-gao.html"},{"tags":"bg9","text":"cdw13 內容 : Copy 在kmolab上的程式碼，嘗試調整程式使水平鍊條變成垂直鍊條。 水平鍊條 垂直鍊條 (startx , starty)、(p , k)是設定圖形位置，first_degree加90度使圖形成垂直。 自評：75分","title":"40323218  cdw13 報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323218-cdw13-bao-gao.html"},{"tags":"bg9","text":"cdw11 內容 : 複製在kmolab上的程式碼，嘗試修改參數做出鍊條。 網址紅線處重左至右分別是代表 x , y , degree可以自行設定 xy可控制圖中圓心紅點位置 degree控制鍊條角度，最後繪出一個圓。 自評：70分","title":"40323218  cdw11報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323218-cdw11bao-gao.html"},{"tags":"bg9","text":"啟動 cdw11 協同專案 心得 : 123","title":"40323218 cdw11 報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323218-cdw11-bao-gao.html"},{"tags":"bg9","text":"統整 先學會如何將鍊條轉角度 圖片 2D圖面部分再來學習齒輪的部分 進階將齒輪改成能在網頁上改變齒數 最後再增加成4個齒輪 3D部分利用onshape繪製齒論聶合 圖片 Onshape圖片 期末心得:學期末,程式方面真的很複雜,但是有比以前還要更加瞭解,而onshape有了導入齒論的功能,也是方便許多,還有很多不懂部分,需要慢慢瞭解","title":"40323214 期末 報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323214-qi-mo-bao-gao.html"},{"tags":"bg9","text":"將老師給的鏈條 調整90度 會分成兩部分 可以先利用solvespace進行測量計算 就可以將整組鍊條轉90度 圖片","title":"40323214 w13 報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323214-w13-bao-gao.html"},{"tags":"bg9","text":"其中後的第一個禮拜,利用老師給的新版本,利用參數將圓形的鏈條數量以及位置改變 圖片","title":"40323214 w11 報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323214-w11-bao-gao.html"},{"tags":"bg10","text":"內容規畫 : 期末總結 心得 這一整個學期學到了怎麼畫onshape的齒輪，也學到齒輪的囓合，還有在雲端如何顯現自己所畫的圖。 自評分數 65分 ---------------------------------------------------------------------- 網際 3D 正齒輪傳動模擬 (二) 22齒齒輪 面版圖 完成圖 心得 先將尺寸改成mm，一樣再利用呼叫跑出spur gear，再利用它來建立新的齒輪。因為這次是和大家一起畫，所以若要囓合大家的齒輪，齒輪跟齒輪之間的角度需要調才可以成功囓合大家的角度。 自評分數 65分 ---------------------------------------------------------------------- 自製2d繪圖 草圖 自製2D繪圖 心得 先利用solvespace畫出圖形，長出後再點出那個建立的面，再將那個面存檔，存檔之後利用SciTE開啟檔案，再來利用上面的數據更改至自己的畫布。這個作業我學到怎麼讓遠端的人也可以知道我畫甚麼，也能了解數據對圖檔的重要性。 自評分數: 65分 ---------------------------------------------------------------------- 網際 3D 正齒輪傳動模擬 (一) 15齒齒輪 20齒齒輪 30齒齒輪 40齒齒輪 面版圖 齒輪完成圖 心得 先調單位為mm，利用呼叫叫出齒輪，接著輸入齒數跟模數(必須一樣)還有齒輪直徑與內部洞的直徑，以此類推做四個之後，做一個面板，每根桿子的距離為兩兩齒輪的直徑相加/2。囓合之後會有齒輪相疊的情形，這時應該去調齒輪的角度，通常調半齒，計算式為(360/齒數/2)度。在這裡我學會了齒輪如何囓合在一起，也更了解onshape的使用。 自評分數: 65分 ---------------------------------------------------------------------- 網際 2D 正齒輪傳動囓合繪圖 心得 先在上面建立齒數以及節圓半徑，再利用角度的偏移更改spur(cx, cy, m, n, pa, theta)的theta來算出囓合的角度。在這裡我了解了數學在齒輪上的重要性，我先利用theta2跟theta3，再推算theta4與5。得到的結果再放在theta的格子上，就完成四跟五的齒輪囓合。還有畫布太小，5只能顯示一半的齒論 自評分數: 65分 ---------------------------------------------------------------------- 自行車傳動 2D 鏈條繪圖 心得 首先使用solvespace分析鏈條，再藉由分析所得出的數據畫出，然後再更改為可調式參數 自評分數 65分 ----------------------------------------------------------------------","title":"40328245 期末總結","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40328245-qi-mo-zong-jie.html"},{"tags":"bg10","text":"內容規畫 : 網際 3D 正齒輪傳動模擬 (二) 22齒齒輪 面版圖 完成圖 心得 先將尺寸改成mm，一樣再利用呼叫跑出spur gear，再利用它來建立新的齒輪。因為這次是和大家一起畫，所以若要囓合大家的齒輪，齒輪跟齒掄之間的角度需要調才可以成功囓合大家的角度。 自評分數 65分","title":"40328245 網際 3D 正齒輪傳動模擬 (二)","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40328245-wang-ji-3d-zheng-chi-lun-chuan-dong-mo-ni-er.html"},{"tags":"bg10","text":"內容規畫 : 自製2d繪圖 草圖 自製2D繪圖 心得 先利用solvespace畫出圖形，長出後再點出那個建立的面，再將那個面存檔，存檔之後利用SciTE開啟檔案，再來利用上面的數據更改至自己的畫布。這個作業我學到怎麼讓遠端的人也可以知道我畫甚麼，也能了解數據對圖檔的重要性。 自評分數: 65分","title":"40328245 2d繪圖","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40328245-2dhui-tu.html"},{"tags":"bg10","text":"內容規畫 : 期末總結 心得 這學期的課程讓我對繪圖程式有更多的了解，從一開始用solvespace分析所畫出的圖形，然後導入到2D的網頁上，還有3D onshape的齒輪設計，學習當齒輪產生干涉時須利用哪些方法來修正，如果能更認真一點學，我覺得收穫一定會更多。 自評分數 70分 ---------------------------------------------------------------------- onshape 心得 老師所給的齒數讓我們必須去分析如何才能不干涉，而組裝的過程與之前的步驟相同，比較有困難的是如何調整轉動多少齒來解決干涉。 ---------------------------------------------------------------------- 自製2D繪圖 心得 這個2D部分的步驟與之前cdw2類似，把之前的語法拿來用，然後把畫好的solvespace轉乘2D section，用Scite打開，然後將中心資料放到對應位置，然後用localhost在網頁上看，達到2D網際繪圖的目的。 ---------------------------------------------------------------------- 網際 3D 正齒輪傳動模擬 (一) 心得 首先在onshape上導入齒輪，然後建立出底板與中心軸柱，將齒輪與柱子搭配，然後要去計算柱子之間的距離，如果需要調整衝突則需去offset設定，最後根據上述的搭配讓齒輪順暢轉動。 ---------------------------------------------------------------------- 網際 2D 正齒輪傳動囓合繪圖 心得 正齒輪的嚙合需要精準的計算，然後搭配參數的變化來加以分析。 ---------------------------------------------------------------------- 自行車傳動 2D 鏈條繪圖 (二) 心得 自行車傳動鏈條經由solvespace的分析，藉由得到的數值再來畫出，然後三個正齒輪則更改為可調式參數。 ----------------------------------------------------------------------","title":"40328242 w18-3報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40328242-w18-3bao-gao.html"},{"tags":"bg10","text":"內容規畫 : onshape 心得 老師所給的齒數讓我們必須去分析如何才能不干涉，而組裝的過程與之前的步驟相同，比較有困難的是如何調整轉動多少齒來解決干涉。 自評分數 70分","title":"40328242 w18-2報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40328242-w18-2bao-gao.html"},{"tags":"bg10","text":"內容規畫 : 自製2d繪圖 心得 這個2D部分的步驟與之前cdw2類似，把之前的語法拿來用，然後把畫好的solvespace轉乘2D section，用Scite打開，然後將中心資料放到對應位置，然後用localhost在網頁上看，達到2D網際繪圖的目的。 自評分數 70分","title":"40328242 w18-1報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40328242-w18-1bao-gao.html"},{"tags":"bg10","text":"內容規畫 : 期末總結 心得 這學期的課程讓我對繪圖有更多的了解還有協同的重要性，一開始用solvespace分析，到後來的3D齒輪設計頁，其中讓我收穫良多的是齒輪的設計學習當齒輪產生干涉時需要用哪些方法來修正，如果能好好深入研究，未來是可以成為自己在職場上的武器。 自評分數 70分 ---------------------------------------------------------------------- onshape 心得 老師所給的齒數是需要去分析干涉的問題，主要的困難的是如何解決干涉。在這方面我跟組員們協調了很多次。 ---------------------------------------------------------------------- 自製2d繪圖 心得 這個2D部分的步驟與之前cdw2類似，把畫好的solvespace轉乘2D ，然後在網頁上看，達到2D繪圖的目的。之前多次嘗試在繪圖上都繪卡卡的，多虧同學傳授一些小技巧，讓我在繪圖能進行得更順利 ---------------------------------------------------------------------- 網際 3D 正齒輪傳動模擬 (一) 心得 組合上面比較沒什麼困難 主要是各個齒輪的間隙 如果調整不好的話就會有干涉 自評分數 70分 ---------------------------------------------------------------------- 網際 2D 正齒輪傳動囓合繪圖 心得 一開始把老師的檔案下載然後使用leo去調整成可調式參數 反覆嘗試之後漸漸熟練 並沒有什麼難度 自評分數 70分 ---------------------------------------------------------------------- 自行車傳動 2D 鏈條繪圖 (二) 心得 一開始並不知道怎麼下手 請教同學後發現要先從solvespace的分析 在使用leo調成可調式參數 自評分數 70分 ----------------------------------------------------------------------","title":"40323241 w18-3報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323241-w18-3bao-gao.html"},{"tags":"bg10","text":"內容規畫 : onshape 心得 老師所給的齒數是需要去分析干涉的問題，主要的困難的是如何解決干涉。在這方面我跟組員們協調了很多次。 自評分數 70分","title":"40323241 w18-2報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323241-w18-2bao-gao.html"},{"tags":"bg10","text":"內容規畫 : 自製2d繪圖 心得 這個2D部分的步驟與之前cdw2類似，把畫好的solvespace轉乘2D ，然後在網頁上看，達到2D繪圖的目的。之前多次嘗試在繪圖上都繪卡卡的，多虧同學傳授一些小技巧，讓我在繪圖能進行得更順利 自評分數 70分","title":"40323241 w18-1報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323241-w18-1bao-gao.html"},{"tags":"ag100","text":"啟動 cdw11 協同專案 pelican 網誌位置: http://cdw11-ag100.rhcloud.com/static/ 分組程式: http://cdw11-ag100.rhcloud.com/option fileuploadform: http://cdw11-ag100.rhcloud.com/fileuploadform imageuploadform: http://cdw11-ag100.rhcloud.com/imageuploadform 請各組在 CDW11 下課前完成下列3個圖形的零件組合繪圖:","title":"40323199 cdw11 報告","url":"https://40328242.github.io/2016springcd_bG10/static/blog/40323199-cdw11-bao-gao.html"}]};