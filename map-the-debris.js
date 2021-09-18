function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  /* De acordo com a Terceira Lei de Kepler, o período orbital T (em segundos) de duas massas pontuais orbitando  uma à outra em uma órbita circular ou elíptica é:
   
   T = 2π√a³/μ
   
   onde:

    • a é o semieixo maior da órbita, ou seja, a soma da altitude média do elemento com o raio da terra.
    • μ = GM é o parâmetro gravitacional padrão, variável fornecida.
  
  */

  return arr.map((p) => ({
    name: p.name,
    orbitalPeriod: Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(p.avgAlt + earthRadius, 3) / GM)
    ),
  }));
}
