(()=>{
const assets={"controls": "./images/xt3-controls.png", "rear": "./images/xt3-rear.png", "battery": "./images/xt3-battery.png", "card": "./images/xt3-card.png", "lens": "./images/xt3-lens.png", "detach": "./images/xt3-detach.png", "strap": "./images/xt3-strap.png"};
const modelUrl='./models/model-data.js';
const parts=[["바디", "FUJIFILM X-T3는 X 마운트 렌즈를 사용하는 미러리스 카메라입니다. 상단의 감도·셔터 속도·노출 보정 다이얼로 촬영 설정을 조절해요."], ["렌즈 마운트", "FUJIFILM X 마운트입니다. 바디와 렌즈의 장착 표시를 맞춰 렌즈가 잠길 때까지 돌립니다."], ["셔터 버튼", "전원 스위치 안쪽에 있습니다. 반누름으로 초점을 맞추고 끝까지 누르면 촬영합니다."], ["ISO 감도 다이얼", "상단 왼쪽 다이얼입니다. 중앙 잠금 버튼을 한 번 눌러 해제하고 돌린 뒤 다시 눌러 잠급니다. A는 자동 감도입니다."], ["셔터 속도 다이얼", "상단 오른쪽 다이얼입니다. 중앙 버튼으로 잠금을 해제하고 속도를 선택하세요. A는 자동, T는 커맨드 다이얼로 속도를 조절하는 설정입니다."], ["전자식 뷰파인더", "눈을 가까이 대면 아이 센서가 반응합니다. 디옵터 조절로 표시가 또렷하게 보이도록 맞춰주세요."], ["틸트 LCD 모니터", "터치스크린으로 구도와 사진을 확인합니다. 화면은 위아래와 세로 촬영 방향으로 기울일 수 있어요."], ["렌즈 분리 버튼", "전원을 끄고 버튼을 누른 채 렌즈를 돌려 분리합니다. 분리 후 바디 캡과 렌즈 뒷캡을 씌워주세요."], ["노출 보정 다이얼", "상단 오른쪽 끝 다이얼입니다. +는 더 밝게, −는 더 어둡게 보정합니다. C에서는 커맨드 다이얼로 보정할 수 있어요."], ["초점 모드 선택기", "바디 앞면의 S·C·M 스위치입니다. S는 싱글 AF, C는 연속 AF, M은 수동 초점입니다."], ["Q 버튼", "후면의 Q 버튼으로 퀵 메뉴를 열어 자주 사용하는 촬영 설정을 빠르게 바꿉니다."]];
const steps=[{"name": "배터리", "title": "NP-W126S, 충전부터.", "text": "NP-W126S 배터리를 충전한 뒤 전원을 끄세요. 배터리의 주황색 표시와 고정 레버를 맞춰 넣고, 레버가 배터리를 고정했는지 확인한 후 커버를 닫습니다.", "check": "배터리가 잠겼고 커버가 닫혔나요?", "diagram": "NP-W126S → ALIGN → LOCK", "source": "first_step/insert_battery/index.html"}, {"name": "SD카드", "title": "두 개의 슬롯, 첫 사진의 자리.", "text": "전원을 끄고 측면 카드 슬롯 커버를 여세요. 표시 방향에 맞춰 SD카드를 딸깍 잠길 때까지 넣습니다. X-T3는 슬롯 1·2를 사용하며 순차 저장, 백업, RAW/JPEG 분리 저장을 설정할 수 있어요.", "check": "카드가 잠겼고 저장 슬롯 설정을 확인했나요?", "diagram": "POWER OFF → SLOT 1 / 2 → CLICK", "source": "first_step/insert_card/index.html"}, {"name": "렌즈 장착", "title": "X 마운트 표시를 맞추세요.", "text": "전원을 끄고 바디 캡과 렌즈 뒷캡을 제거하세요. 바디와 렌즈의 장착 표시를 맞추고 잠길 때까지 돌립니다. 렌즈 분리 버튼은 누르지 말고, 센서와 접점은 만지지 마세요.", "check": "렌즈가 잠겼고 앞캡을 제거했나요?", "diagram": "X MOUNT → ALIGN → LOCK", "source": "first_step/attach_lens/index.html"}, {"name": "렌즈 분리", "title": "분리 버튼을 누른 채 돌리세요.", "text": "전원을 끄고 렌즈 분리 버튼을 누른 채 공식 도식 방향으로 렌즈를 돌립니다. 렌즈를 분리한 후 바디 캡과 렌즈 뒷캡을 씌워 먼지를 막아주세요.", "check": "바디와 렌즈에 캡을 씌웠나요?", "diagram": "POWER OFF → PRESS → TURN", "source": "first_step/attach_lens/index.html"}, {"name": "스트랩", "title": "보호 커버와 금속 클립부터.", "text": "보호 커버를 스트랩 연결부에 대고 클립 장착 도구로 금속 클립을 연결합니다. 클립이 완전히 닫혔는지 확인한 뒤 스트랩을 보호 커버와 클립에 통과시켜 버클로 고정하세요. 반대쪽도 같은 순서로 연결합니다.", "check": "양쪽 클립과 버클이 단단히 고정되었나요?", "diagram": "COVER → CLIP → STRAP → BUCKLE", "source": "first_step/attach_strap/index.html"}];

function draw($,a,s,iso,focus,crop,ev,apertures,shutters){
 const c=$(".viewfinder canvas");if(!c)return;const ctx=c.getContext('2d');if(!ctx)return;
 const w=c.width,h=c.height;ctx.clearRect(0,0,w,h);ctx.save();
 ctx.filter='blur('+Math.max(0,(16-apertures[a])*.5)+'px)';
 ctx.fillStyle='#b4b4b4';ctx.beginPath();ctx.moveTo(270,390);ctx.lineTo(525,85);ctx.lineTo(770,390);ctx.closePath();ctx.fill();
 ctx.filter='none';ctx.fillStyle='#737373';ctx.beginPath();ctx.moveTo(30,390);ctx.lineTo(245,165);ctx.lineTo(470,390);ctx.closePath();ctx.fill();
 ctx.strokeStyle='#d4d4d4';ctx.lineWidth=22;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(230,425);ctx.bezierCurveTo(270,370,520,310,390,280);ctx.stroke();
 const trail=Math.max(0,Math.round(125/shutters[s])-1);
 for(let t=trail;t>=0;t--){
  ctx.globalAlpha=t?.09:1;const x=355-t*8;ctx.fillStyle='#505050';ctx.beginPath();ctx.arc(x,214,16,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='#505050';ctx.lineWidth=18;ctx.beginPath();ctx.moveTo(x,240);ctx.lineTo(x-5,286);ctx.moveTo(x,247);ctx.lineTo(x+30,263);ctx.moveTo(x,255);ctx.lineTo(x-26,271);ctx.stroke();
  ctx.strokeStyle='#333333';ctx.lineWidth=12;ctx.beginPath();ctx.moveTo(x-5,286);ctx.lineTo(x-32,325);ctx.moveTo(x-5,286);ctx.lineTo(x+26,323);ctx.stroke();
 }
 ctx.restore();
 const brightness=Math.max(.18,Math.min(2.7,2**(ev*.5))),pixels=ctx.getImageData(0,0,w,h);let seed=12345;
 for(let i=0;i<pixels.data.length;i+=4){if(!pixels.data[i+3])continue;seed=(seed*16807)%2147483647;const noise=(seed/2147483647-.5)*iso*8;for(let j=0;j<3;j++)pixels.data[i+j]=Math.max(0,Math.min(255,pixels.data[i+j]*brightness+noise))}
 ctx.putImageData(pixels,0,0);
}
window.ZfcData={assets,modelUrl,parts,steps,draw};
})();
