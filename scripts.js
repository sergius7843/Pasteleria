document.addEventListener('DOMContentLoaded', () => {

    /* ======================================================================
       1. CONTROL DE DESPLEGABLES DEL TOP (Hamburguesa, Búsqueda, Usuario, Carrito)
       ====================================================================== */
    const btnHamburger = document.getElementById('btn-hamburger');
    const hamburgerMenu = document.getElementById('hamburger-menu');

    const btnSearch = document.getElementById('btn-search');
    const searchCard = document.getElementById('search-card');
    const closeSearch = document.getElementById('close-search');
    const searchInput = document.getElementById('search-input');

    const btnCart = document.getElementById('btn-cart');
    const cartCard = document.getElementById('cart-card');
    const closeCart = document.getElementById('close-cart');

    const btnUser = document.getElementById('btn-user');
    const userModal = document.getElementById('user-modal');
    const closeUserModal = document.getElementById('close-user-modal');

    // Función auxiliar para cerrar todas las tarjetas flotantes del Top
    function closeAllDropdowns() {
        if (hamburgerMenu) hamburgerMenu.classList.remove('open');
        if (searchCard) searchCard.classList.remove('open');
        if (cartCard) cartCard.classList.remove('open');
    }

    // Menú Hamburguesa
    if (btnHamburger && hamburgerMenu) {
        btnHamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = hamburgerMenu.classList.contains('open');
            closeAllDropdowns();
            if (!isOpen) hamburgerMenu.classList.add('open');
        });
    }

    // Card de Búsqueda
    if (btnSearch && searchCard) {
        btnSearch.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = searchCard.classList.contains('open');
            closeAllDropdowns();
            if (!isOpen) {
                searchCard.classList.add('open');
                if (searchInput) searchInput.focus();
            }
        });
    }

    if (closeSearch) {
        closeSearch.addEventListener('click', () => searchCard.classList.remove('open'));
    }

    // Filtrado rápido al presionar Enter en el buscador
    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const term = searchInput.value.trim().toLowerCase();
                if (term.includes('temporada') || term.includes('navidad') || term.includes('rosca') || term.includes('jengibre') || term.includes('halloween')) {
                    window.location.href = 'index.html';
                } else if (term.includes('cumple') || term.includes('barbie') || term.includes('paw')) {
                    window.location.href = 'ocasiones.html#sec-cumpleanios';
                } else if (term.includes('amor') || term.includes('amistad') || term.includes('pareja')) {
                    window.location.href = 'ocasiones.html#sec-amor';
                } else if (term.includes('evento') || term.includes('reunion') || term.includes('boda') || term.includes('shower') || term.includes('15')) {
                    window.location.href = 'ocasiones.html#sec-eventos';
                } else if (term.includes('regalo') || term.includes('caja') || term.includes('box')) {
                    window.location.href = 'ocasiones.html#sec-regalos';
                } else if (term.includes('ubicacion') || term.includes('sucursal') || term.includes('whatsapp') || term.includes('telefono')) {
                    window.location.href = 'contacto.html';
                } else if (term.includes('nosotros') || term.includes('historia')) {
                    window.location.href = 'nosotros.html';
                } else if (term.includes('pie') || term.includes('cheesecake') || term.includes('limon')) {
                    window.location.href = 'pies.html';
                } else if (term.includes('masita') || term.includes('alfajor') || term.includes('dona') || term.includes('medialuna') || term.includes('bocadito')) {
                    window.location.href = 'masitas.html';
                } else if (term.includes('personaliz') || term.includes('mario') || term.includes('capibara') || term.includes('kuromi') || term.includes('tematica')) {
                    window.location.href = 'personalizadas.html';
                } else if (term.includes('torta') || term.includes('selva') || term.includes('moca') || term.includes('fudge') || term.includes('vaso')) {
                    window.location.href = 'tortas.html';
                } else if (term.includes('brownie')) {
                    window.location.href = 'productos.html#sec-brownies';
                } else if (term.includes('queque')) {
                    window.location.href = 'productos.html#sec-queques';
                } else {
                    window.location.href = 'productos.html';
                }
            }
        });
    }

    // Card de Carrito
    if (btnCart && cartCard) {
        btnCart.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = cartCard.classList.contains('open');
            closeAllDropdowns();
            if (!isOpen) cartCard.classList.add('open');
        });
    }

    if (closeCart) {
        closeCart.addEventListener('click', () => cartCard.classList.remove('open'));
    }

    // Cerrar desplegables al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (searchCard && !searchCard.contains(e.target) &&
            cartCard && !cartCard.contains(e.target) &&
            hamburgerMenu && !hamburgerMenu.contains(e.target)) {
            closeAllDropdowns();
        }
    });

    /* ======================================================================
       2. MODAL DE USUARIO (LOGIN Y REGISTRO)
       ====================================================================== */
    if (btnUser && userModal) {
        btnUser.addEventListener('click', () => {
            closeAllDropdowns();
            userModal.classList.add('open');
        });
    }

    if (closeUserModal) {
        closeUserModal.addEventListener('click', () => userModal.classList.remove('open'));
    }

    if (userModal) {
        userModal.addEventListener('click', (e) => {
            if (e.target === userModal) userModal.classList.remove('open');
        });
    }

    // Alternar entre pestañas Iniciar Sesión / Registrarse
    const tabBtns = document.querySelectorAll('.tab-btn');
    const formLogin = document.getElementById('form-login');
    const formRegister = document.getElementById('form-register');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (btn.dataset.tab === 'login') {
                formLogin.classList.add('active');
                formRegister.classList.remove('active');
            } else {
                formRegister.classList.add('active');
                formLogin.classList.remove('active');
            }
        });
    });

    // Simulación de envío de formularios de usuario
    [formLogin, formRegister].forEach(form => {
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('¡Datos recibidos correctamente! Bienvenido a Brownies Pastelería.');
                userModal.classList.remove('open');
                form.reset();
            });
        }
    });

    /* ======================================================================
       3. CARRUSEL AUTOMÁTICO Y MANUAL (En index.html)
       ====================================================================== */
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');

    if (slides.length > 0) {
        let currentSlide = 0;
        let slideInterval;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            currentSlide = index;
        }

        function nextSlide() {
            const nextIndex = (currentSlide + 1) % slides.length;
            showSlide(nextIndex);
        }

        function prevSlide() {
            const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prevIndex);
        }

        function startAutoSlide() {
            slideInterval = setInterval(nextSlide, 5000); // Cambia cada 5 segundos
        }

        function resetAutoSlide() {
            clearInterval(slideInterval);
            startAutoSlide();
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetAutoSlide();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetAutoSlide();
            });
        }

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                showSlide( parseInt(dot.dataset.slide, 10) );
                resetAutoSlide();
            });
        });

        startAutoSlide();
    }

    /* ======================================================================
       4. CARRITO DE COMPRAS PERSISTENTE ENTRE PÁGINAS (localStorage)
       ====================================================================== */
    const cartCountEl = document.getElementById('cart-count');
    const cartItemsEl = document.getElementById('cart-items');
    const cartTotalPriceEl = document.getElementById('cart-total-price');
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

    let cart = JSON.parse(localStorage.getItem('brownies_cart')) || [];

    function saveAndRenderCart() {
        localStorage.setItem('brownies_cart', JSON.stringify(cart));

        // Actualizar contador del icono
        const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
        if (cartCountEl) cartCountEl.textContent = totalQty;

        // Renderizar lista dentro de la card del carrito
        if (!cartItemsEl || !cartTotalPriceEl) return;

        if (cart.length === 0) {
            cartItemsEl.innerHTML = '<p style="font-size:0.9rem; opacity:0.75;">Tu carrito está vacío. ¡Agrega tu postre favorito!</p>';
            cartTotalPriceEl.textContent = 'Bs. 0';
            return;
        }

        cartItemsEl.innerHTML = '';
        let totalBs = 0;

        cart.forEach((item, index) => {
            const subtotal = item.price * item.qty;
            totalBs += subtotal;

            const row = document.createElement('div');
            row.className = 'cart-item-row';
            row.innerHTML = `
                <div>
                    <strong>${item.name}</strong><br>
                    <span>${item.qty} x Bs. ${item.price}</span>
                </div>
                <div style="display:flex; align-items:center; gap:10px;">
                    <strong>Bs. ${subtotal}</strong>
                    <button class="cart-item-remove" data-index="${index}" title="Eliminar">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            `;
            cartItemsEl.appendChild(row);
        });

        cartTotalPriceEl.textContent = `Bs. ${totalBs}`;

        // Actualizar botón de checkout por WhatsApp con el pedido detallado
        const checkoutBtns = document.querySelectorAll('.checkout-whatsapp-btn');
        if (checkoutBtns.length > 0) {
            if (cart.length === 0) {
                checkoutBtns.forEach(btn => {
                    btn.href = 'https://wa.me/59168081109?text=Hola%20Brownies%20Pasteler%C3%ADa!%20Quisiera%20consultar%20sobre%20sus%20productos.';
                    btn.target = '_blank';
                    btn.rel = 'noopener';
                });
            } else {
                let msg = '¡Hola Brownies Pastelería! Quisiera realizar el siguiente pedido:\n\n';
                cart.forEach(item => {
                    msg += `• ${item.qty}x ${item.name} - Bs. ${item.price * item.qty}\n`;
                });
                msg += `\n*Total estimado: Bs. ${totalBs}*\n\n¿Me confirman disponibilidad y tiempo de entrega? ¡Muchas gracias!`;
                checkoutBtns.forEach(btn => {
                    btn.href = `https://wa.me/59168081109?text=${encodeURIComponent(msg)}`;
                    btn.target = '_blank';
                    btn.rel = 'noopener';
                });
            }
        }

        // Botones para quitar artículos del carrito
        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const idx = parseInt(btn.dataset.index, 10);
                cart.splice(idx, 1);
                saveAndRenderCart();
            });
        });
    }

    // Agregar artículos al hacer clic en los botones de producto
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const name = btn.dataset.name;
            const price = parseFloat(btn.dataset.price);

            const existing = cart.find(item => item.name === name);
            if (existing) {
                existing.qty += 1;
            } else {
                cart.push({ name, price, qty: 1 });
            }

            saveAndRenderCart();
            if (cartCard) {
                closeAllDropdowns();
                cartCard.classList.add('open');
            }
        });
    });

    saveAndRenderCart();
});