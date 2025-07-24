const serverData = [
    {
        category: 'Server Jars',
        items: [
            {
                name: 'Paper',
                logo: 'paper_logo.png',
                latestVersion: '1.21',
                description: 'A high-performance fork of Spigot that aims to fix gameplay and mechanics inconsistencies.',
                tags: ['performance', 'plugins', 'spigot-fork'],
                versions: [
                    { version: '1.21', url: '#' },
                    { version: '1.20.6', url: '#' },
                    { version: '1.20.4', url: '#' },
                    { version: '1.19.4', url: '#' },
                ]
            },
            {
                name: 'Spigot',
                logo: 'spigot_logo.png',
                latestVersion: '1.21',
                description: 'The most widely-used modded Minecraft server software, built on top of CraftBukkit.',
                tags: ['plugins', 'popular'],
                versions: [
                    { version: '1.21', url: '#' },
                    { version: '1.20.6', url: '#' },
                    { version: '1.20.4', url: '#' },
                ]
            },
            {
                name: 'Purpur',
                logo: 'purpur_logo.png',
                latestVersion: '1.21',
                description: 'A drop-in replacement for Paper servers designed for configurability and new, fun, exciting gameplay features.',
                tags: ['performance', 'features', 'plugins'],
                versions: [
                    { version: '1.21', url: '#' },
                    { version: '1.20.6', url: '#' },
                ]
            },
            {
                name: 'Fabric',
                logo: 'fabric_logo.png',
                latestVersion: '0.15.11',
                description: 'A lightweight, experimental modding toolchain for Minecraft. Requires Fabric API.',
                tags: ['modding', 'lightweight'],
                versions: [
                    { version: '0.15.11', url: '#' },
                    { version: '0.15.10', url: '#' },
                    { version: '0.14.25', url: '#' },
                ]
            }
        ]
    },
    {
        category: 'Proxies',
        items: [
            {
                name: 'BungeeCord',
                logo: 'bungeecord_logo.png',
                latestVersion: '1.21',
                description: 'The original Minecraft proxy, used to link multiple servers together. Maintained by the SpigotMC team.',
                tags: ['proxy', 'spigotmc'],
                versions: [
                    { version: '1.21', url: '#' },
                    { version: '1.20.4', url: '#' },
                    { version: '1.19.4', url: '#' },
                ]
            },
            {
                name: 'Velocity',
                logo: 'velocity_logo.png',
                latestVersion: '3.3.0',
                description: 'A modern, high-performance proxy for Minecraft servers, with a focus on security and scalability.',
                tags: ['proxy', 'performance', 'security'],
                versions: [
                    { version: '3.3.0', url: '#' },
                    { version: '3.2.0', url: '#' },
                    { version: '3.1.2', url: '#' },
                ]
            }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app-container');
    const searchInput = document.getElementById('search-input');

    const createServerCard = (item) => {
        const card = document.createElement('div');
        card.className = 'server-card';
        // Store searchable data
        card.dataset.name = item.name.toLowerCase();
        card.dataset.description = item.description.toLowerCase();
        card.dataset.tags = item.tags.join(' ').toLowerCase();

        const versionsHTML = item.versions.map(v => `
            <li class="version-item">
                <span>Version ${v.version}</span>
                <a href="${v.url}" class="download-btn">
                    <i data-lucide="download"></i> Download
                </a>
            </li>
        `).join('');

        const tagsHTML = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        card.innerHTML = `
            <div class="card-header">
                <img src="${item.logo}" alt="${item.name} Logo" class="server-logo">
                <div class="server-info">
                    <h3>${item.name}</h3>
                    <span class="latest-version">Latest: ${item.latestVersion}</span>
                </div>
            </div>
            <div class="card-body">
                <p>${item.description}</p>
                <div class="tags-container">
                    ${tagsHTML}
                </div>
            </div>
            <div class="card-footer">
                 <a href="${item.versions[0].url}" class="download-latest-btn">
                    <i data-lucide="download"></i> Download Latest
                </a>
                <button class="toggle-history-btn">
                    <i data-lucide="history"></i>
                    <span>History</span>
                </button>
            </div>
            <div class="version-history">
                <ul class="version-list">
                    ${versionsHTML}
                </ul>
            </div>
        `;
        return card;
    };

    serverData.forEach(category => {
        const categorySection = document.createElement('section');
        categorySection.className = 'category-section';
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = category.category;
        categorySection.appendChild(categoryTitle);

        const serverGrid = document.createElement('div');
        serverGrid.className = 'server-grid';
        
        category.items.forEach(item => {
            const card = createServerCard(item);
            serverGrid.appendChild(card);
        });

        categorySection.appendChild(serverGrid);
        appContainer.appendChild(categorySection);
    });

    lucide.createIcons();

    appContainer.addEventListener('click', (e) => {
        const toggleBtn = e.target.closest('.toggle-history-btn');
        if (toggleBtn) {
            const card = toggleBtn.closest('.server-card');
            const history = card.querySelector('.version-history');
            history.classList.toggle('active');

            const icon = toggleBtn.querySelector('i');
            const text = toggleBtn.querySelector('span');

            if (history.classList.contains('active')) {
                text.textContent = 'Hide';
                icon.setAttribute('data-lucide', 'chevron-up');
            } else {
                text.textContent = 'History';
                icon.setAttribute('data-lucide', 'history');
            }
            lucide.createIcons({
                nodes: [icon]
            });
        }
    });

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        document.querySelectorAll('.category-section').forEach(section => {
            let visibleCards = 0;
            const grid = section.querySelector('.server-grid');

            grid.querySelectorAll('.server-card').forEach(card => {
                const name = card.dataset.name;
                const description = card.dataset.description;
                const tags = card.dataset.tags;
                const searchData = `${name} ${description} ${tags}`;

                const isVisible = searchData.includes(searchTerm);
                card.style.display = isVisible ? 'flex' : 'none';
                if (isVisible) {
                    visibleCards++;
                }
            });

            section.style.display = visibleCards > 0 ? 'block' : 'none';
        });
    });
});