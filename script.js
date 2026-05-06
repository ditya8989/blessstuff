const STORE = {
  whatsappNumber: "6285892375213",
  shopeeBaseUrl: "https://id.shp.ee/rfwzxtRR",
};

const categories = [
  { id: "atasan", label: "Atasan", icon: "shirt" },
];

const blogs = [
  {
    title: "Cara memilih thrift yang tetap nyaman dipakai",
    date: "May 06, 2026",
    excerpt:
      "Perhatikan bahan, jahitan, ukuran, dan kondisi detail kecil sebelum membeli produk secondhand.",
    theme:
      "radial-gradient(circle at 32% 34%, #e4c7b0 0 8%, transparent 8.5%), radial-gradient(circle at 62% 35%, #f0d6bf 0 8%, transparent 8.5%), linear-gradient(90deg, #101114 0 24%, #c4a77d 24.5% 52%, #293a5f 52.5% 76%, #68745c 76.5% 100%)",
  },
  {
    title: "Kenapa detail ukuran penting sebelum checkout?",
    date: "May 06, 2026",
    excerpt:
      "Ukuran thrift bisa berbeda dari label asli. Cek lingkar dada, panjang, pinggang, dan fit agar tidak salah pilih.",
    theme:
      "radial-gradient(circle at 30% 31%, #ead7c1 0 7%, transparent 7.5%), radial-gradient(circle at 57% 33%, #efd2bd 0 7%, transparent 7.5%), radial-gradient(circle at 78% 31%, #e3c7af 0 7%, transparent 7.5%), linear-gradient(90deg, #0d0d0d 0 28%, #f4f5f7 28.5% 49%, #9277c8 49.5% 70%, #8d2031 70.5% 100%)",
  },
  {
    title: "Inspirasi outfit kasual dari koleksi pilihan",
    date: "May 06, 2026",
    excerpt:
      "Padukan overshirt, denim, cargo, dan aksesori netral untuk tampilan harian yang tetap clean.",
    theme:
      "radial-gradient(circle at 36% 32%, #efd2bd 0 8%, transparent 8.5%), radial-gradient(circle at 66% 31%, #ead7c1 0 8%, transparent 8.5%), linear-gradient(90deg, #b85d3f 0 42%, #f8f4ed 42.5% 59%, #c4a77d 59.5% 78%, #101114 78.5% 100%)",
  },
];

const products = [
  {
    id: "BS-001",
    name: "Fullaiou Jacket",
    category: "atasan",
    size: "XL",
    width: "72 cm",
    length: "59 cm",
    condition: "Good condition 9/10",
    color: "Khaki",
    status: "Ready",
    note: "Jaket ini cocok buat outfit ngampus atau pakaian santai sehari-hari. Minus: tidak ada.",
    image: "./assets/fulaiou.png",
    shopeeUrl: STORE.shopeeBaseUrl,
  },
  {
    id: "BS-002",
    name: "Rogatis Jacket",
    category: "atasan",
    size: "XL",
    width: "71 cm",
    length: "62 cm",
    condition: "Good condition 9/10",
    color: "Ivory",
    status: "Ready",
    note: "Jaket ini cocok buat outfit ngampus atau pakaian santai sehari-hari. Minus: noda samar dan resleting gantian.",
    image: "./assets/rogatis.png",
    shopeeUrl: STORE.shopeeBaseUrl,
  },
  {
    id: "BS-003",
    name: "Frion Jacket",
    category: "atasan",
    size: "XL",
    width: "71 cm",
    length: "57 cm",
    condition: "Good condition 9/10",
    color: "Cream",
    status: "Ready",
    note: "Buat nongki dan daily cocok banget. Simple, tidak ribet, dan looks-nya masuk ke banyak fit.",
    image: "./assets/frionjacket.png",
    shopeeUrl: STORE.shopeeBaseUrl,
  },
  {
    id: "BS-004",
    name: "Silk Jacket",
    category: "atasan",
    size: "L Boxy",
    width: "64 cm",
    length: "61 cm",
    condition: "Good condition 9/10",
    color: "Blue Grey",
    status: "Ready",
    note: "Jaket ini cocok buat outfit ngampus atau pakaian santai sehari-hari. Minus: tidak ada.",
    image: "./assets/silkjacket.png",
    shopeeUrl: STORE.shopeeBaseUrl,
  },
  {
    id: "BS-005",
    name: "Jobalman Jacket",
    category: "atasan",
    size: "L",
    width: "61 cm",
    length: "58 cm",
    condition: "Good condition",
    color: "Beige",
    status: "Ready",
    note: "Looks casual, cocok banget buat ngampus atau ngopi sama teman. Fit terasa cozy.",
    image: "./assets/jobalman.png",
    shopeeUrl: STORE.shopeeBaseUrl,
  },
  {
    id: "BS-006",
    name: "Modian Pila Jacket",
    category: "atasan",
    size: "L",
    width: "67 cm",
    length: "64 cm",
    condition: "Good condition 9/10",
    color: "Navy",
    status: "Ready",
    note: "Bahan tebal, cocok buat bepergian jauh atau dipakai ke kampus. Minus: tidak ada.",
    image: "./assets/modeanpila.png",
    shopeeUrl: STORE.shopeeBaseUrl,
  },
  {
    id: "BS-007",
    name: "Trady Jacket",
    category: "atasan",
    size: "L Boxy",
    width: "66 cm",
    length: "52 cm",
    condition: "Good condition 9/10",
    color: "Check Grey",
    status: "Ready",
    note: "Jaket ini cocok buat outfit ngampus atau pakaian santai sehari-hari. Minus: kancing tangan sebelah kanan tidak bisa.",
    image: "./assets/tradyjacket.png",
    shopeeUrl: STORE.shopeeBaseUrl,
  },
];

const icons = {
  grid: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
  shirt:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 7.4 16 4l-4 2-4-2-4.4 3.4L6 11v9h12v-9Z"></path><path d="M12 6v14"></path></svg>',
  pants:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10l1 18h-5l-1-9-1 9H6Z"></path><path d="M7 7h10"></path></svg>',
  cap: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 15c1-4.5 4-7 8-7s7 2.5 8 7"></path><path d="M4 15c5 2 11 2 16 0"></path><path d="M12 8v7"></path></svg>',
  whatsapp:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-5.4A8.4 8.4 0 1 1 21 11.5Z"></path></svg>',
  bag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.5h11l1 11h-13z"></path><path d="M9 8.5a3 3 0 0 1 6 0"></path></svg>',
};

let activeCategory = "atasan";
let searchTerm = "";

const SECRET_PRICE = "???.???.Rp";

const makeWhatsappUrl = (product) => {
  const message = product
    ? `Halo Bless Stuff, saya mau tanya produk ${product.name} (${product.id}). Apakah masih ready?`
    : "Halo Bless Stuff, saya mau tanya katalog thrift.";

  return `https://wa.me/${STORE.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const filteredProducts = () =>
  products.filter((product) => {
    const matchesCategory = product.category === activeCategory;
    const searchable =
      `${product.name} ${product.category} ${product.size} ${product.width} ${product.length} ${product.color}`.toLowerCase();
    return matchesCategory && searchable.includes(searchTerm.toLowerCase());
  });

const renderCategories = () => {
  const wrap = document.querySelector("#categoryButtons");
  if (!wrap) return;

  wrap.innerHTML = categories
    .map(
      (category) => `
        <button class="category-button ${category.id === activeCategory ? "is-active" : ""}" type="button" data-category="${category.id}">
          ${icons[category.icon]}
          ${category.label}
        </button>
      `,
    )
    .join("");

  wrap.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderCategories();
      renderProducts();
    });
  });
};

const renderProducts = () => {
  const grid = document.querySelector("#catalogGrid");
  if (!grid) return;

  const visibleProducts = filteredProducts();

  if (!visibleProducts.length) {
    grid.innerHTML = '<div class="empty-state">Produk tidak ditemukan. Coba kategori atau kata kunci lain.</div>';
    return;
  }

  grid.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-image">
            <span class="product-code">${product.id}</span>
            <span class="promo-badge">PROMO<br />XTRA</span>
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
          </div>
          <div class="product-info">
            <h3>${product.name}</h3>
            <div class="product-meta">
              <span>${product.size}</span>
              <span>${product.width} x ${product.length}</span>
              <span>${product.color}</span>
            </div>
            <div class="price-row">
              <span class="secret-price">${SECRET_PRICE}</span>
              <span class="discount-pill">Diskon</span>
              <span class="status">${product.status}</span>
            </div>
            <div class="card-actions">
              <button class="detail-btn" type="button" data-detail="${product.id}">Detail</button>
              <a class="icon-btn" href="${makeWhatsappUrl(product)}" target="_blank" rel="noreferrer" aria-label="Pesan ${product.name} via WhatsApp">
                ${icons.whatsapp}
              </a>
              <a class="icon-btn" href="${product.shopeeUrl}" target="_blank" rel="noreferrer" aria-label="Buka ${product.name} di Shopee">
                ${icons.bag}
              </a>
            </div>
          </div>
        </article>
      `,
    )
    .join("");

  grid.querySelectorAll("[data-detail]").forEach((button) => {
    button.addEventListener("click", () => openDialog(button.dataset.detail));
  });
};

const renderBlogs = () => {
  const grid = document.querySelector("#blogGrid");
  if (!grid) return;

  grid.innerHTML = blogs
    .map(
      (blog) => `
        <article class="blog-card">
          <div class="blog-image" style="--blog-bg: ${blog.theme}"></div>
          <h3>${blog.title}</h3>
          <span class="blog-date">${blog.date}</span>
          <p>${blog.excerpt}</p>
        </article>
      `,
    )
    .join("");
};

const openDialog = (productId) => {
  const product = products.find((item) => item.id === productId);
  const dialog = document.querySelector("#productDialog");
  const body = document.querySelector("#dialogBody");

  body.innerHTML = `
    <div class="dialog-image">
      <span class="product-code">${product.id}</span>
      <span class="promo-badge">PROMO<br />XTRA</span>
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <div class="dialog-content">
      <p class="section-kicker">${product.category}</p>
      <h2>${product.name}</h2>
      <div class="dialog-price-row">
        <span class="secret-price">${SECRET_PRICE}</span>
        <span class="discount-pill">Diskon aktif</span>
      </div>
      <dl class="detail-list">
        <div><dt>Ukuran</dt><dd>${product.size}</dd></div>
        <div><dt>Width</dt><dd>${product.width}</dd></div>
        <div><dt>Length</dt><dd>${product.length}</dd></div>
        <div><dt>Kondisi</dt><dd>${product.condition}</dd></div>
        <div><dt>Warna</dt><dd>${product.color}</dd></div>
        <div><dt>Status</dt><dd>${product.status}</dd></div>
      </dl>
      <p>${product.note}</p>
      <div class="dialog-actions">
        <a class="btn btn-dark" href="${makeWhatsappUrl(product)}" target="_blank" rel="noreferrer">${icons.whatsapp} Pesan WhatsApp</a>
        <a class="btn btn-outline" href="${product.shopeeUrl}" target="_blank" rel="noreferrer">${icons.bag} Buka Shopee</a>
      </div>
    </div>
  `;

  dialog.showModal();
};

const searchInput = document.querySelector("#searchInput");
if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value;
    renderProducts();
  });
}

const closeDialog = document.querySelector("#closeDialog");
if (closeDialog) {
  closeDialog.addEventListener("click", () => {
    document.querySelector("#productDialog").close();
  });
}

const productDialog = document.querySelector("#productDialog");
if (productDialog) {
  productDialog.addEventListener("click", (event) => {
    if (event.target.id === "productDialog") {
      event.target.close();
    }
  });
}

renderCategories();
renderBlogs();
renderProducts();
