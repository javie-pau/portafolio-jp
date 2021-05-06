import { gsap } from "gsap";
import { SlowMo } from "gsap/EasePack";

gsap.registerPlugin(SlowMo);

let tl =gsap.timeline({defaults: {ease: "slowMo.easeOut"}});

tl.to("#car-skill",{y:'0%', duration:0.7, stagger:0.2})

