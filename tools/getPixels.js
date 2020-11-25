let getPixels = require("get-pixels")
let common = require("../common")
const pixels = function (){
 	getPixels("https://xuxin.love/img/crea/that-end.png", function(err, pixels) {
	  if(err) {
	    console.log("Bad image path")
	    return
	  }
	  // for(let obj of pixels.data.Uint8Array){
	  // 	console.log("ee",obj)
	  // }
	  let textureWidth = pixels.shape[0];
	  let textureHeight = pixels.shape[1];
		console.log('--66666666666--',textureWidth,textureHeight)
		//读取图片像素
		let pixelsInfo = pixels.data;
		let aStarArr = [];
		let index = 0;
		//像素值为黑色不可通行，白色部分可以通行
		for (let w = 0; w < textureHeight; w++) {
		    let colaStarArr = aStarArr[w] = [];
		    for (let h = 0; h <  textureWidth; h++) {
		        let r = pixelsInfo[index++];
		        let g = pixelsInfo[index++];
		        let b = pixelsInfo[index++];
		        let a = pixelsInfo[index++];
		        if (r ==46 && g ==61 && b ==81 )
		            colaStarArr[h] = 0;
		        else {
		            colaStarArr[h] = 1;
		        }
		        // if (r ==0 && g ==0 && b ==0 )
		        //     colaStarArr[h] = 0;
		        // else {
		        //     colaStarArr[h] = 1;
		        // }
		        // colaStarArr[h] = r+','+g+','+b+','+a;
		    }
		}
		// return aStarArr;
		common.grads = aStarArr
	  	console.log("got pixels",aStarArr)
	})
} 

module.exports={
	pixels
}