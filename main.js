const { ZNativeFrom, APP, DOM, Camera, CameraConfig, FacingMode, FileManager, Clock} = Zenith;

const mainT=ZNativeFrom(`
<StyleSheet>
body{
  box-sizing:border-box;
  background:rgb(20,20,20);
}
.ov{
  position:fixed;
  top:30px;
  left:0px;
  color:white;
}
.btn{
  position:fixed;
  top: 90%;
  left: 50%;
  translate:-50% -50%;
  width:70px;
  height:70px;
  border-radius:50%;
  border:3px solid white;
  padding:3px;
}
.ov button{
  width:100px;
  height:40px;
  background: transparent;
  border:2px solid white;
  border-radius:6px;
  color:white;
  backdrop-filter:blur(2px);
}
.btn div{
  background:linear-gradient(120deg,orange,blue);
  color:white;
  width:100%;
  height:100%;
  border-radius:50%;
}
video{
  display:none;
}
canvas{
  width:100%;
  height:100%;
}
input[type='range']{
  rotate:90deg;
  position:fixed;
  top:50%;
  left:10px;
  translate:-50px 0px;
}
</StyleSheet>

<video></video>

<Canvas></Canvas>

<Input type='range' min='0' max='100'></Input>

<div class='btn'>
  <div></div>
</div>

<BoxHLayout class='ov' width="100%" spaceEvenly>
  <PushButton>Ratio</PushButton>
  <PushButton>Sensitivity</PushButton>
  <PushButton>Zoom</PushButton>
</BoxHLayout>
`)
mainT.runIn(DOM.body)

const video=mainT.child(1)

const canvas=mainT.child(2)
canvas.root.width=window.innerWidth
canvas.root.height=window.innerHeight
const W=()=>window.innerWidth
const H=()=>window.innerHeight
let zoom=50
//Starting render
Clock.register_loop(()=>{
  
  canvas.ctx.clearRect(-zoom,-zoom,canvas.root.width,canvas.root.height)
  canvas.ctx.drawImage(video.root,0,0,zoom+W(),zoom+H())
})

const stick=mainT.child(3)
stick.on('change',()=>{
  zoom=(Number(stick.value)||0)*3
})

let m=Camera()
m.callOnReady(()=>m.connect(video))

const capBtn=DOM.select('.btn div')
capBtn.on('click',()=>{
  const fs=FileManager()
  const stamp=()=>{
    let r=''
    for(let i=0;i<11;i++){
      r+=(Math.random()*10)
    }
    return r
  }
  const data=canvas.root.toBlob(b=>fs.saveFile('znt_cam_'+stamp()+'.png',b))
})