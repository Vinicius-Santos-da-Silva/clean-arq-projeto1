import Cpf from "../src/Cpf";

test("Deve testar um cpf válido", function () {
	const cpf = new Cpf("039.635.960-40")
	expect(cpf.getValue()).toBe("039.635.960-40")
});

test("Deve testar um cpf válido com dígitos iguais", function () {
    expect(() => new Cpf("111.111.111-11")).toThrow(new Error("CPF Inválido"))
});

test("Deve testar um cpf inválido com dígitos diferentes", function () {
	const cpf = "123.456.789-99";
    expect(() => new Cpf(cpf)).toThrow(new Error("CPF Inválido"))
});
