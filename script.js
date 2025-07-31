document.getElementById("dataForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
  
    try {
      const res = await fetch("http://backend-webapp-prova-hbenfme5fmcwatbc.northeurope-01.azurewebsites.net", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email }),
      });
  
      if(res.ok) alert("Dati inseriti con successo!");
      else alert("Errore nell'invio dei dati");
    } catch (error) {
      alert("Errore di connessione");
    }
  });
  
