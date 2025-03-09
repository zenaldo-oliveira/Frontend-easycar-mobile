export const styles = {
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4", // Cor de fundo mais suave
  },
  map: {
    flex: 1,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden", // Impede que o conteúdo saia das bordas
  },
  marker: {
    width: 60,
    height: 60,
    borderRadius: 30, // Tornando o marcador redondo
    borderWidth: 2,
    borderColor: "#007AFF", // Cor do contorno do marcador
  },
  footer: {
    backgroundColor: "#fff",
    padding: 20, // Adicionando padding para um espaçamento melhor
    borderTopLeftRadius: 20, // Bordas arredondadas
    borderTopRightRadius: 20, // Bordas arredondadas
    shadowColor: "#000", // Adicionando sombra
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Sombra para dispositivos Android
  },
  footerFields: {
    marginHorizontal: 15, // Ajustando a margem para um espaçamento mais uniforme
  },
  footerText: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    fontSize: 16,
    color: "#333",
  },
  input: {
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
    color: "#333",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
};
