const GL = "Alpha, Beta, Gamma, Delta, Epsilon, Zeta, Eta, Theta, Iota, Kappa, Lambda, Mu, Nu, Xi, Omicron, Pi, Rho, Sigma, Tau, Upsilon, Phi, Chi, Psi, Omega".split(", ");
const P1 = "Cent, Vel, Sol, Astra, Cael, Zeph, Nova, Luna, Vire, Alt, Nyx, Sera, Ely, Thal, Orin, Xen, Aeth, Drav, Kyro, Vael, Tara, Syl, Arct, Noct, Hel, Zor, Myr".split(", ");
const P2 = "ar, or, el, an, ith, yr, ari, eron, ath, ion, aris, eth, ora, yra, eon, alis, eris, ul, ara, en".split(", ");
const P3 = "i, is, a, ar, ari, ion, on, eus, ara, eth, or, os, yx, iel, ara, aris, eus, on, arion, eus".split(", ");
const GLL = GL.length;
const NP1L = P1.length;
const NP2L = P2.length;
const NP3L = P3.length;

function makeSystemName() {
    let r = "";
    r += GL[(Math.random()*GLL)|0];
    r += P1[(Math.random()*NP1L)|0];
    r += P2[(Math.random()*NP2L)|0];
    r += P3[(Math.random()*NP3L)|0];
    return(r);
}
