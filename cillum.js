function updateForce(init, Forces, i, f, pulse, sim, name) {
  let p;

  if (init || _.modified(Forces, i)) {
    p = getForce(f[i]);
  } else if (pulse && modified(f[i], pulse)) {
    p = sim.force(name);
  } else {
    p = null;
  }

  return p;
}

// Example usage
const init = false;
const Forces = /* some Forces object */;
const i = 0; // index
const f = [/* some array of forces */];
const pulse = true;
const sim = { force: (name) => /* some force calculation based on name */ };
const name = "exampleForce";

const result = updateForce(init, Forces, i, f, pulse, sim, name);
console.log(result);
