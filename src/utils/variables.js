import variables from '@/styles/root.module.scss';

let _variables = {};
let _bp = [];


for (const key in variables) {
  if (Object.hasOwnProperty.call(variables, key)) {
    const element = variables[key];
    if (key.includes('BP')) {
      _variables.bps = _variables.bps ? _variables.bps : [];
      _variables.bps.push({
        key: key.replace('BP-', '').toLowerCase(),
        value: parseInt(element)
      })

      _variables.bp = Object.assign(_variables.bp || {}, {
        [key.replace('BP-', '').toLowerCase()]: {
          value: element,
          key: key.replace('BP-', '').toLowerCase()
        }
      })

    } else {
      _variables[key] = element;
    }
  }
}

export default _variables;
