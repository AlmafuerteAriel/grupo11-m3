// JavaScript -> Arrays -> FOREACH

const almuerzos = [
	{ principal: 'π', postre: 'π' },
	{ principal: 'π₯', postre: 'π' },
	{ principal: 'π', postre: 'π' },
	{ principal: 'π₯', postre: 'π' }
];

// "forEach" siempre retorna "undefined"
// "forEach" -> NO permite concatenaciΓ³n con otros mΓ©todos
const platosPrincipales = almuerzos.forEach((almuerzo) => almuerzo.principal);
console.log(platosPrincipales);
//> undefined

// "forEach" -> NO modifica el array original
console.log(almuerzos);
//> [
//>  { principal: 'π', postre: 'π' },
//>  { principal: 'π₯', postre: 'π' },
//>  { principal: 'π', postre: 'π' },
//>  { principal: 'π₯', postre: 'π' }
//> ]

const principales = [];
almuerzos.forEach((almuerzo) => principales.push(almuerzo.principal));
console.log(principales);
//> [ 'π', 'π₯', 'π', 'π₯' ]
