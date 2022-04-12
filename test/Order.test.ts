import Coupon from "../src/Coupon"
import Item from "../src/Item"
import Order from "../src/Order"

test("Deve criar um pedido", function () {
    const order = new Order("935.411.347-80")
    expect(order.getTotal()).toBe(0)
})

test("Não deve criar um pedido com CPF inválido", function () {
    expect(() => new Order("111.111.111-11")).toThrow(new Error("CPF Inválido"))
})

test("Deve criar um pedido com 3 itens", function () {
    const order = new Order("935.411.347-80")
    order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 5000),1)
    order.addItem(new Item(1, "Instrumentos Musicais", "Amplificador", 1000),3)
    order.addItem(new Item(1, "Instrumentos Musicais", "Cabo", 40),2)
    expect(order.getTotal()).toBe(8080)
})

test("Deve criar um pedido com 3 itens com cupon de desconto", function () {
    const order = new Order("935.411.347-80")
    order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 5000),1)
    order.addItem(new Item(1, "Instrumentos Musicais", "Amplificador", 1000),3)
    order.addItem(new Item(1, "Instrumentos Musicais", "Cabo", 40),2)

    const coupon = new Coupon("VALE20", 20)
    order.addCoupon(coupon)

    expect(order.getTotal()).toBe(6464)
})