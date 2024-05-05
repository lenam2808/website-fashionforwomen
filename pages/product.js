let products = [
  {
    id: 1,
    category: "Áo",
    name: "Áo cotton thun thêu họa tiết",
    price: "800,000",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/366/518/products/434592630-833694212128732-9163015129980402789-n.jpg?v=1713168496967",
  },
  {
    id: 2,
    category: "Áo",
    name: "Áo cotton basic ngắn tay đính đá",
    price: "750,000",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/366/518/products/436235546-840077778157042-3143939789252100157-n.jpg?v=1714016008870",
  },
  {
    id: 3,
    category: "Áo",
    name: "Áo cotton tay ngắn",
    price: "750,000",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/366/518/products/435413548-837670971731056-1270381445169502358-n.jpg?v=1713323043607",
  },
  {
    id: 4,
    category: "Áo",
    name: "Áo cotton thun cổ tròn viền ngọc",
    price: "850,000",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/366/518/products/428702809-810682541096566-5450751591037853194-n.jpg?v=1709526265330",
  },
  {
    id: 5,
    category: "Váy",
    name: "Chân váy đính hoa",
    price: "999,000",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/366/518/products/391675320-728606829304138-2948202889865345398-n-3597b756-ee2c-4843-8792-f0f0b83e0e10.jpg?v=1697701026723",
  },
  {
    id: 6,
    category: "Váy",
    name: "Chân váy nhung dáng ngắn",
    price: "999,000",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/366/518/products/393818048-732539522244202-299365440707089042-n-8f8d001c-cbb4-4aa1-9903-32cb3c53ed72.jpg?v=1698464375407",
  },
  {
    id: 7,
    category: "Váy",
    name: "Chân váy xòe dài Taffeta office",
    price: "899,000",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/366/518/products/349151942-1137981884258983-415922687271359816-n-fc264325-47eb-4509-b573-11cc7a73bc9c.jpg?v=1685414991887",
  },
  {
    id: 8,
    category: "Váy",
    name: "Chân váy hoa ly họa tiết gấm",
    price: "1,299,000",
    img: "../assets/pics/bestsell1_2.webp",
  },
  {
    id: 9,
    category: "Quần",
    name: "Quần baggy đính mặt đá",
    price: "999,000",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/366/518/products/435716267-838885271609626-8437517617998999026-n-72952b1f-684d-495a-9bf5-4850d30a4530.jpg?v=1713328646190",
  },
  {
    id: 10,
    category: "Quần",
    name: "Quần tây công sở cạp cao đính cúc",
    price: "999,000",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/366/518/products/375582287-703659438465544-4116663600994056472-n-1.jpg?v=1694424676073",
  },
  {
    id: 11,
    category: "Quần",
    name: "Quần baggy basic trẻ trung",
    price: "999,000",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/366/518/products/407078503-754927780005376-6110614928320021140-n-def9be04-e848-4d21-85ae-3700467f12d8.jpg?v=1701918294667",
  },
  {
    id: 12,
    category: "Quần",
    name: "Quần ống đứng đính 3 cúc",
    price: "1,299,000",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/366/518/products/428609256-806700754828078-4943014514275411862-n-c08f1c2d-7ad4-4fcf-8079-d403c425b87e.jpg?v=1708587360670",
  },
  {
    id: 13,
    category: "Đầm",
    name: "Đầm xòe xếp ly cổ vuông",
    price: "1,900,000",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/366/518/products/436253667-843937461104407-274028791010470649-n.jpg?v=1713943725387",
  },
  {
    id: 14,
    category: "Đầm",
    name: "Đầm xòe cổ bèo nhún",
    price: "1,650,000",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/366/518/products/434262201-828903125941174-5424166278445363191-n.jpg?v=1711946095520",
  },
  {
    id: 15,
    category: "Jumpsuit",
    name: "Jumsuit cổ tim tay ngắn",
    price: "1,999,000",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/366/518/products/433251840-822842979880522-5014010767415799637-n.jpg?v=1712040857980",
  },
  {
    id: 16,
    category: "Vest",
    name: "Áo Vest croptop cổ sen",
    price: "1,500,000",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/366/518/products/376222717-286332567483697-8526170028601705797-n-1.jpg?v=1694590954110",
  },
];

let productInCart = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];

function saveToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(productInCart));
}

//Hien thi productItem
const mainContent = document.querySelector(".mainContent");

const showInHtml = products
  .map((product) => {
    return `
    <div class="productItem ${product.category} hide">
        <div class="itemImg">
            <img src=${product.img} alt="">
        </div>
        <div class="aboutItem">
            <div class="nameItem">${product.category}</div>
            <div class="description">${product.name}</div>
            <div class="itemPrice">${product.price}đ</div>
        </div>
        <div class="buyBtn">
            <button class="buyNow" onclick="addtoCart(${product.id})">Mua ngay</button>
        </div>
    </div>
    `;
  })
  .join("");

mainContent.innerHTML = showInHtml;

//Filter products
function filterProduct(value) {
  let buttons = document.querySelectorAll(".buttonValue");
  buttons.forEach((button) => {
    //kiem tra gia tri
    if (value.toUpperCase() == button.innerHTML.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  let elements = document.querySelectorAll(".productItem");
  elements.forEach((element) => {
    //hien items
    if (value == "Tất cả") {
      element.classList.remove("hide");
    } else {
      // kiem tra filter chua category
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        //khong hien thi cac items con lai
        element.classList.add("hide");
      }
    }
  });
}

window.onload = () => {
  filterProduct("Tất cả");
};

//Them san pham vào gio hang
function addtoCart(id) {
  let checkProduct = productInCart.some((value) => value.id === id);
  if (!checkProduct) {
    let product = products.find((value) => value.id === id);
    productInCart.unshift({
      ...product,
      quantity: 1,
    });
    saveToLocalStorage();
  } else {
    let getIndex = productInCart.findIndex((value) => value.id === id);
    let product = productInCart.find((value) => value.id === id);
    productInCart[getIndex] = {
      ...product,
      quantity: ++product.quantity,
    };
    saveToLocalStorage();
  }
}

//Render giỏ hàng
function renderProductsToCart() {
  const renderCart = productInCart
    .map((value, index) => {
      // let convertPrice = value.price.replace(/,/g, '')
      return `
    <div class="cartMain">
            <div class="itemImg">
                <img src=${value.img} alt="">
            </div>
            <div class="itemInfo">
                <p>${value.name}</p>
                <button onclick="deleteProductInCart(${index})">Xóa</button>
            </div>
            <div class="itemPrice">${value.price}</div>
            <div class="itemQuantityChange">
                <button onclick="minusQuantity(${index}, ${
        value.quantity
      })">-</button>
                ${value.quantity}
                <button onclick="plusQuantity(${index})">+</button>
            </div>
            <div>
            ${(value.quantity * value.price.replace(/,/g, "")).toLocaleString(
              "en-US"
            )}
            </div>
        </div>
        `;
    })
    .join("");
  document.getElementById("itemCart").innerHTML = renderCart;
}
// thêm số lượng
function plusQuantity(index) {
  productInCart[index] ==
    {
      ...productInCart[index],
      quantity: ++productInCart[index].quantity,
    };
  saveToLocalStorage();
  renderProductsToCart();
  totalMoney();
}
// giảm số lượng
function minusQuantity(index, quantity) {
  if (quantity > 1) {
    productInCart[index] ==
      {
        ...productInCart[index],
        quantity: --productInCart[index].quantity,
      };
    saveToLocalStorage();
    renderProductsToCart();
    totalMoney();
  } else {
    alert("Quantity min is 1");
  }
}
// xóa giỏ hàng
function deleteProductInCart(index) {
  productInCart.splice(index, 1);
  saveToLocalStorage();
  renderProductsToCart();
  totalMoney();
}
// tính tổng tiền 
function totalMoney() {
  if (productInCart != []) {
    let total = 0;

    for (let i = 0; i < productInCart.length; i++) {
      total +=
        productInCart[i].quantity * productInCart[i].price.replace(/,/g, "");
    }
    console.log(total);
    document.getElementById("totalMoney").innerHTML =
      total.toLocaleString("en-US");
  }
}

function cartLoadPage() {
  renderProductsToCart();
  totalMoney();
}

//Thông báo thanh toán thành công
let buyBtn = document.querySelector(".buyBtn");
function buyProductAlert() {
  alert("Thanh toán thành công")
  localStorage.clear();
}
