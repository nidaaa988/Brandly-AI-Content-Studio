const tabs=document.querySelectorAll(".tab");const nav=document.querySelectorAll(".nav-item");let lastOutput="";
function showTab(id){tabs.forEach(t=>t.classList.toggle("active-tab",t.id===id));nav.forEach(n=>n.classList.toggle("active",n.dataset.tab===id));window.scrollTo({top:0,behavior:"smooth"})}
nav.forEach(n=>n.addEventListener("click",()=>showTab(n.dataset.tab)));

function setOutput(text){document.querySelectorAll(".output").forEach(o=>{o.classList.remove("empty");o.textContent=text});lastOutput=text}
function generate(type){
 let text="";
 if(type==="caption"){
   const topic=document.getElementById("captionTopic").value.trim()||"our latest product";
   const platform=document.getElementById("captionPlatform").value;
   const tone=document.getElementById("captionTone").value;
   const cta=document.getElementById("captionCTA").value.trim()||"Discover more";
   text=`${topic} ✦\n\nMeet a smarter way to make your everyday brand experience more memorable. Designed with a ${tone.toLowerCase()} voice, this ${platform} caption keeps the message clear, useful and on-brand.\n\n${cta} →\n\n#BrandlyAI #ContentStudio #BrandContent`;
 } else if(type==="social"){
   const topic=document.getElementById("socialTopic").value.trim()||"a new brand update";
   const platform=document.getElementById("socialPlatform").value;
   const goal=document.getElementById("socialGoal").value;
   text=`HOOK\n${topic} — here's why your audience should care.\n\nVALUE\nShare one clear benefit, one proof point and one useful takeaway. Keep the message focused on ${goal.toLowerCase()}.\n\nCTA\nTell us what you think, save this post, and share it with someone who needs it.\n\nPlatform: ${platform}`;
 } else if(type==="ad"){
   const product=document.getElementById("adProduct").value.trim()||"your product";
   const benefit=document.getElementById("adBenefit").value.trim()||"a simple solution for your customers";
   text=`HEADLINE\nMake ${product} part of your everyday routine.\n\nPRIMARY TEXT\n${benefit}. Get the value without the extra effort. Clear, practical and made for modern customers.\n\nCTA\nExplore ${product} →`;
 } else {
   const niche=document.getElementById("ideaNiche").value.trim()||"your brand";
   const count=Number(document.getElementById("ideaCount").value);
   const ideas=["Behind-the-scenes: how your product is made","3 mistakes your audience should avoid","Customer story / testimonial spotlight","Myth vs fact educational carousel","Founder story: why the brand started","Quick tips your audience can use today","Product feature explained in 30 seconds","FAQ post answering a common customer question","Before vs after: show the value clearly","Community question / interactive poll"];
   text=`CONTENT IDEAS — ${niche}\n\n`+ideas.slice(0,count).map((x,i)=>`${i+1}. ${x}`).join("\n");
 }
 setOutput(text);
}
function copyOutput(){if(!lastOutput){return}navigator.clipboard?.writeText(lastOutput);const t=document.getElementById("toast");t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1300)}
function useTemplate(name){showTab("captions");document.getElementById("captionTopic").value=`Create a ${name.toLowerCase()} for my brand using the saved brand voice.`;document.getElementById("captionCTA").value="Learn more →"}
document.getElementById("globalSearch").addEventListener("input",e=>{const q=e.target.value.toLowerCase();if(q.includes("caption"))showTab("captions");else if(q.includes("ad"))showTab("ads");else if(q.includes("idea"))showTab("ideas");else if(q.includes("template"))showTab("templates");else if(q.includes("social"))showTab("social")});