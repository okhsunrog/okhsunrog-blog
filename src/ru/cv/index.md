---
title: Резюме
icon: file-lines
article: false
pageInfo: false
---

### Данила Горнушко
Backend / Embedded Software Engineer

#### Контакты
*   Telegram: [t.me/okhsunrog](https://t.me/okhsunrog) (предпочтительный способ связи)
*   Email: me@okhsunrog.dev
*   Личный сайт: [okhsunrog.dev](https://okhsunrog.dev)
*   GitHub: [github.com/okhsunrog](https://github.com/okhsunrog)
*   LinkedIn: https://www.linkedin.com/in/danila-gornushko-130152379/
*   Habr: https://habr.com/ru/users/okhsunrog/
*   Проживание: Москва
*   Гражданство: Россия

#### О себе

Backend- и embedded-разработчик с <Duration start="2020-06" format="years-plus" locale="ru" /> годами опыта в программной инженерии и <Duration start="2023-03" format="years-decimal" locale="ru" /> годами разработки на Rust. Разрабатываю серверные приложения и LLM-инфраструктуру: мой LLM-прокси с квотами и учётом стоимости запросов работает в production с февраля 2026 года. Сам развёртываю и сопровождаю свои сервисы. В VK Tech участвовал в разработке распределённой колоночной СУБД Tarantool Column Store. Также работаю с системным ПО, embedded и приложениями для Linux и Android. Мои изменения приняты в Apache Arrow, Embassy, esp-hal, ergot, Slint и Tarantool. Изучаю Go.

#### Опыт работы

##### Rust-разработчик / Senior Backend Developer | Tarantool Column Store, VK Tech, Москва
<Duration start="2025-08" locale="ru" />

До апреля 2026 работал через USETECH, с мая 2026 работаю в штате VK Tech.

Распределённая колоночная СУБД поверх Tarantool (Rust, DataFusion, Apache Arrow, etcd, gRPC/Arrow Flight SQL, C).

*   Повышал отказоустойчивость кластера при сбоях узлов и сервиса координации. Исправил в ядре Tarantool появление второго writable-узла при повторном присоединении реплики ([PR](https://github.com/tarantool/tarantool/pull/13000)).
*   Диагностировал и устранял утечки ресурсов, сетевые задержки и проблемы запуска сервисов. Каждое исправление подтверждал воспроизводимым сценарием и регрессионными тестами.
*   Реализовал сквозную поддержку сжатия и словарного кодирования колонок: от SQL до движка хранения.
*   Развивал наблюдаемость (потоковое логирование HTTP, метрики) и ускорял GitLab CI.

##### Программист | Минимакс-94, Москва
<Duration start="2024-03" end="2025-07" locale="ru" />

*   Разработка и отладка прошивок для микроконтроллеров STM32 на C и Rust.
*   Создание тестовых утилит и скриптов для анализа данных на Python.
*   Проектирование консольных и GUI-приложений (native-windows-gui, GTK4, Tauri) на Rust для взаимодействия с оборудованием.

##### Инженер встраиваемых систем | ИП Коротков, Москва
<Duration start="2023-03" end="2024-02" locale="ru" />

*   Разработал с нуля электронные модули для квестов: от схемотехники и трассировки плат (EasyEDA) до сборки и программирования (AVR, ESP32 на C/C++ и Rust).
*   Реализовал сетевое взаимодействие устройств по шине CAN, включая разработку собственного протокола.
*   Написал небольшой вспомогательный HTTP-сервис на Rust (Axum) для управления устройствами и мониторинга их состояния. Разбирался в Go-бэкенде компании при интеграции устройств и вносил в него небольшие изменения.
*   Внедрил систему OTA-обновления прошивок по CAN-шине, используя Raspberry Pi в качестве сервера.

##### Junior DevOps | Ростелеком Информационные Технологии, Москва
<Duration start="2021-11" end="2023-02" locale="ru" />

*   Разрабатывал веб-сервис для мониторинга серверов (Ruby, Sinatra, Bootstrap).
*   Участвовал в миграции сервисов и внедрял контейнеризацию (Docker, docker-compose).
*   Настраивал CI/CD-пайплайны и автоматизацию развёртывания.

##### Программист, системный администратор | Фриланс, Москва
<Duration start="2020-06" end="2021-09" locale="ru" />

*   Администрировал Linux-серверы, разворачивал веб-сервисы, разрабатывал проекты на Arduino и Python, нативные Android-приложения (Kotlin) для управления устройствами по BLE.

#### Избранные проекты

**Backend, LLM и инфраструктура**

##### [claude-proxy-rs](https://github.com/okhsunrog/claude-proxy-rs) и [llm-relay](https://github.com/okhsunrog/llm-relay)

LLM-прокси на Rust/Axum/PostgreSQL с API OpenAI и Anthropic, клиентскими ключами, денежными квотами и учётом стоимости запросов. **Работает в production с февраля 2026 года: около 100 тыс. запросов и 12 млрд токенов через 20+ клиентских ключей.**

::: details Подробнее
*   Реализовал OAuth-доступ к провайдерам, клиентские ключи с ограничением доступа к моделям, денежные квоты, учёт токенов и стоимости запросов, административный интерфейс и страницу со статистикой использования для пользователей.
*   Реализовал преобразование потоковых ответов SSE и вызовов инструментов, учёт потребления при отмене запроса, повторы с учётом Retry-After и обновление OAuth-токенов. Добавил интеграционные проверки через реальные SDK и PostgreSQL.
*   Развёртываю через Ansible: статический musl-бинарник под systemd с отдельным пользователем и ограничением памяти, PostgreSQL, доступ только через WireGuard-туннель и nginx. Перенёс сервис на другой сервер с консистентным дампом, сверкой данных перед переключением и планом отката.
*   Развиваю общую библиотеку llm-relay, которую использую в нескольких проектах. Она содержит типы и преобразования LLM-протоколов, HTTP-клиенты, потоковые события, embeddings и адаптеры для Rig.
:::

##### [realty-aggregator](https://github.com/okhsunrog/realty-aggregator)

Сервис на Rust/Axum/PostgreSQL/S3 для регулярного сбора объявлений и пакетного анализа текстов и фотографий через LLM: ограничение параллелизма, повторы, возобновление после сбоев.

::: details Подробнее
*   Реализовал инкрементальный сбор через внешний API: пагинация, перекрытие временных окон и checkpoint, который сдвигается только после сохранения всех страниц. Объявления и фотографии сохраняются транзакционно, устаревшие данные не перезаписывают более новые.
*   Фотографии хранятся в S3-совместимом хранилище (MinIO, затем RustFS). Реализовал двухуровневый анализ через LLM vision в JSON-режиме: проверка полноты и диапазонов ответа модели, ограниченное число повторов с задержкой, rate limiting и настраиваемый параллелизм. Импорт, загрузка изображений и анализ возобновляются независимо друг от друга.
*   Фоновые задачи запускаются по расписанию и не копят пропущенные запуски. Статус передаётся через WebSocket. SQL-запросы проверяются при компиляции (SQLx), интеграционные тесты работают на отдельных базах PostgreSQL в CI.
:::

##### [Floppa VPN](https://github.com/okhsunrog/floppa-vpn)

VPN-сервис с backend на Axum/PostgreSQL, Telegram-ботом, оплатой подписок и клиентом Tauri 2 для Linux, Windows и Android. **Работает в production с 2026 года, сотни пользователей, включая платящих.**

::: details Подробнее
*   Реализовал JWT-аутентификацию, подписки и платежи, транзакционные операции управления устройствами, административный интерфейс.
*   Построил общее асинхронное ядро управления соединениями с типизированным IPC/RPC, выбором протокола, отменой и восстановлением соединений. Реализовал журнал сетевых изменений и восстановление маршрутов и DNS после падения процесса.
*   Интегрировал WireGuard, AmneziaWG и VLESS+REALITY, метрики VictoriaMetrics и синхронизацию компонентов через PostgreSQL LISTEN/NOTIFY. Сервис работает на нескольких VPS в разных регионах, есть отдельные конфигурации для staging и production.
:::

##### Собственная инфраструктура

Описываю как код и сопровождаю инфраструктуру из нескольких VPS и домашнего сервера: Ansible, NixOS, WireGuard, PostgreSQL, мониторинг.

::: details Подробнее
*   Написал Ansible-роли для VPN-узлов, reverse proxy (nginx, HAProxy), PostgreSQL, VictoriaMetrics, Forgejo с CI-раннерами, TURN-сервера и своих приложений. Секреты хранятся в Ansible Vault, регионы связаны WireGuard-туннелями.
*   Переношу сервисы между серверами по описанным процедурам: консистентные дампы, сверка данных, проверка перед публикацией, план отката.
*   Поддерживаю декларативные конфигурации NixOS для рабочего ноутбука и Raspberry Pi с секретами через SOPS и тестами в виртуальных машинах. Удалённо перевёл устройство с Debian на NixOS с сохранением данных.
:::

##### [Arctern](https://github.com/okhsunrog/arctern)

Асинхронный демон репликации ZFS на Rust с мультиплексированным SSH-транспортом, RPC на tarpc и веб-консолью Vue/TypeScript.

::: details Подробнее
*   Реализовал инкрементальные и возобновляемые передачи, переподключение с backoff, ограничение полосы и ACL.
*   Добавил авторизацию Unix-сокетов по учётным данным процесса, SSE с восстановлением пропущенных событий и интеграционные сценарии на ZFS/SSH.
:::

##### [Tangleaf](https://github.com/okhsunrog/tangleaf)

Local-first база знаний на Rust/Tauri/React с клиентами для desktop и Android, синхронизацией и сервером с поиском и агентом.

::: details Подробнее
*   Реализовал хранение в SQLite, полнотекстовый поиск FTS5 и синхронизацию через HTTP/WebSocket с журналом операций, офлайн-очередью и разрешением конфликтов через HLC/LWW.
*   На сервере Axum реализовал индексацию документов, embeddings, гибридный поиск с reranking, извлечение сущностей и потоковый чат с агентом. Добавил MCP-доступ к заметкам с авторизацией и проверкой ревизий при изменениях.
:::

**Системное ПО, Android и embedded**

##### [vpnhide](https://github.com/okhsunrog/vpnhide) ![](https://img.shields.io/github/stars/okhsunrog/vpnhide?style=social)

Скрывает активный VPN от выбранных Android-приложений, включая банковские приложения с защитой от внедрения кода, на которых не работают аналоги. **Около 69 тыс. загрузок релизов, 42 форка, 27 релизов.**

::: details Подробнее
*   Аналоги ставят Xposed-хуки внутри процесса приложения, и anti-tamper защита их обнаруживает. vpnhide ничего не внедряет в приложение: Java API фильтруются в system_server на уровне Binder (LSPosed), нативные пути — в ядре через kprobe/kretprobe.
*   Закрыл нативные способы обнаружения, которые Java-хуки пропускают: ioctl, getifaddrs, netlink-дампы интерфейсов и маршрутов, /proc/net, привязку сокета к интерфейсу. Kernel-бэкенды: модуль для GKI-ядер, KPM для старых ядер 4.9–5.4, встроенный в ядро драйвер и Zygisk как запасной вариант. Демон на Rust сам выбирает подходящий бэкенд для устройства.
*   Добавил скрытие локальных портов VPN/proxy-клиентов через iptables и скрытие установленных приложений от проверок PackageManager.
*   Приложение на Kotlin/Jetpack Compose показывает статус, статистику перехватов по приложениям и 25 диагностических проверок скрытия. Модули ядра проверяются тестами в QEMU. Веду релизы, разбираю issues, README на русском, английском и китайском.
:::

##### [Archinstall-ZFS](https://github.com/okhsunrog/archinstall_zfs) ![](https://img.shields.io/github/stars/okhsunrog/archinstall_zfs?style=social)

Установщик Arch Linux с ZFS, шифрованием и ZFSBootMenu на Rust, с GUI на Slint/LinuxKMS и TUI на ratatui.

::: details Подробнее
*   Реализовал управление пакетами через libalpm, параллельную возобновляемую загрузку с переключением зеркал и проверкой контрольных сумм, отмену установки с очисткой ресурсов.
*   Добавил QEMU-сценарии проверки установки и загрузки.
:::

##### [OxiFOC](https://github.com/okhsunrog/oxifoc) ![](https://img.shields.io/github/stars/okhsunrog/oxifoc?style=social)

Прошивка управления бесщёточными двигателями на Rust/Embassy с аппаратно-независимым no_std ядром FOC для STM32. Основа доклада на RustCon 2026.

::: details Подробнее
*   Разделил контур управления в ADC ISR и асинхронную обработку команд и телеметрии через lock-free очередь.
*   Разработал mutex с потолком приоритетов на Cortex-M через BASEPRI для синхронизации сетевого стека с сохранением обработки высокоприоритетных прерываний управления двигателем. Использую аппаратное профилирование и виртуальный двигатель с общим кодом управления и защит.
:::

##### POWER-Z KM003C: реверс-инжиниринг протокола и [km003c-rs](https://github.com/okhsunrog/km003c-rs) ![](https://img.shields.io/github/stars/okhsunrog/km003c-rs?style=social)

Восстановил недокументированный USB-протокол анализатора и написал на его основе библиотеку на Rust с CLI, GUI, Python bindings и браузерным клиентом.

::: details Подробнее
*   Сопоставлял USB-захваты с экспортами официального ПО, анализировал Mtools.exe в Ghidra и расшифрованную прошивку устройства. Восстановил форматы команд и данных, AES-аутентификацию и чтение зашифрованных логов. Проверил реализованные сценарии на устройстве. [Материалы исследования](https://github.com/okhsunrog/km003c-protocol-research).
*   Создал инструменты анализа USB-транзакций на Python/Polars и конвертер pcapng в Parquet на Rust. Документировал протокол, отделяя подтверждённые захватами и аппаратными проверками результаты от выводов статического анализа.
*   Разработал типизированную async-библиотеку на Rust с nusb, сбором измерений и разбором USB Power Delivery, CLI, GUI на egui и экспериментальный интерфейс на Slint для desktop и Android. Опубликовал библиотеку на crates.io и Python bindings через PyO3 со сборкой wheels в CI.
*   Добавил браузерный клиент через WebAssembly и общий GPU-renderer на wgpu с compute-обработкой измерений. Реализовал запись в CSV/Parquet с журналом для восстановления после сбоя.
:::

##### [Foilfern](https://github.com/okhsunrog/foilfern)

Система проектирования электроники на Rust с редактором Slint, CLI и MCP-сервером для агентного редактирования проектов.

::: details Подробнее
*   Реализовал работу со схемами и платами, ERC/DRC, автоматическую трассировку, 3D-просмотр и экспорт производственных файлов.
*   Спроектировал MCP-интерфейс для агентного редактирования проектов через stdio и Streamable HTTP. Реализовал предпросмотр изменений, проверку ревизий, атомарное применение операций и undo/redo. Проверяю совместимость файлов и результатов проверок с LibrePCB.
:::

##### MCP-инструменты

MCP-серверы для работы AI-агентов с микроконтроллерами, документацией и рабочим столом KDE.

::: details Подробнее
*   Разработал [Flashprobe MCP](https://github.com/okhsunrog/flashprobe-mcp) для прошивки и мониторинга микроконтроллеров через probe-rs/espflash и [STM32 Data MCP](https://github.com/okhsunrog/stm32-data-mcp) для поиска распиновок, регистров и данных периферии.
*   Поддерживаю [форк KWin MCP](https://github.com/okhsunrog/kwin-mcp) для автоматизации KDE/Wayland через AT-SPI2 и libei. Исправляю управление вводом, изолированными сессиями и обработку ошибок.
:::

#### Выступления

*   **RustCon 2026, Москва, 4 декабря 2026 (предстоящее выступление).** [«50 микросекунд на всё: async Rust и векторное управление мотором»](https://rustcon.ru/50-mikrosekund-na-vsyo-async-rust-i-vektornoe-upravlenie-motorom). Доклад на основе OxiFOC о разделении критичных по времени прерываний и задач Embassy, аппаратно-независимой архитектуре и тестировании на виртуальном двигателе.

#### Вклад в open source

*   **ergot, мейнтейнер:** сетевой стек для embedded — транспорты, маршрутизация, восстановление соединений, исправления ошибок памяти и конкурентного доступа с проверками под Miri. [Мои PR](https://github.com/jamesmunns/ergot/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **Embassy, контрибьютор:** поддержка периферии STM32, исправления зависаний DMA, ускорение вызова CORDIC с 35 до 22 тактов. [Мои PR](https://github.com/embassy-rs/embassy/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **esp-hal и esp-pacs, контрибьютор:** CAN FD драйвер для ESP32-C5 с аппаратными тестами, исправления USB Serial и тактирования. [esp-hal](https://github.com/esp-rs/esp-hal/pulls?q=is%3Apr+author%3Aokhsunrog), [esp-pacs](https://github.com/esp-rs/esp-pacs/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **Slint, контрибьютор:** Linux KMS backend, software renderer, обработка ввода. [Мои PR](https://github.com/slint-ui/slint/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **Apache Arrow, контрибьютор:** исправил panic при переполнении словарных ключей в concat/interleave, включая вложенные типы. [Мои PR](https://github.com/apache/arrow-rs/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **Tarantool, контрибьютор:** исправление supervised failover. [Принятый PR](https://github.com/tarantool/tarantool/pull/13000).

::: details Подробнее о вкладе
*   **ergot:** развиваю архитектуру транспортов, маршрутизацию, адресацию и восстановление соединений. Исправляю ошибки безопасности памяти и конкурентного доступа, добавляю регрессионные тесты и проверки под Miri.
*   **Embassy:** async flash для G0/G4, компараторы, настройка таймеров и CORDIC. Исправил зависания DMA и сократил время вызова CORDIC с 35 до 22 тактов в бенчмарке STM32G474.
*   **esp-hal и esp-pacs:** добавил CAN FD драйвер для ESP32-C5 с blocking/async API и аппаратными тестами, исправлял потерю данных USB Serial и ошибки тактирования, добавлял описания регистров периферии.
*   **Slint:** развиваю Linux KMS backend, исправляю software renderer и обработку ввода. Добавил поддержку RGB565 big-endian для SPI-дисплеев и выравнивания областей перерисовки.
*   **Apache Arrow:** работаю над обработкой словарных массивов.
*   **Tarantool:** исправил ошибку, при которой повторно присоединённая реплика могла становиться вторым writable-узлом.
*   Публикую библиотеки на crates.io, поддерживаю пакеты в AUR и пишу технические статьи. Другие проекты доступны на [GitHub](https://github.com/okhsunrog).
:::

#### Технические навыки

*   **Rust** - async/await, unsafe, FFI, no_std, lifetimes, Send/Sync, атомики, примитивы синхронизации, макросы. Tokio, Serde, tracing, Criterion.
*   **Backend и данные** - Axum, SQLx, PostgreSQL, SQLite, S3/MinIO, etcd, Apache Arrow, DataFusion, Polars, Parquet. REST, gRPC/Protobuf, Arrow Flight SQL, WebSocket, SSE, OpenAPI, PostgreSQL LISTEN/NOTIFY.
*   **LLM и агентные инструменты** - API OpenAI/Anthropic, потоковые ответы, tool calling, MCP, учёт токенов и стоимости. RAG, embeddings, гибридный поиск, reranking.
*   **Авторизация и IPC** - OAuth, JWT, ключи доступа и квоты, tarpc, Unix domain sockets, UniFFI.
*   **Инфраструктура и эксплуатация** - Linux, systemd, Docker/Compose, Ansible, NixOS, nginx, HAProxy, WireGuard. GitLab CI, GitHub Actions, Forgejo Actions.
*   **Мониторинг** - Grafana, Prometheus, VictoriaMetrics, tracing.
*   **Другие языки и frontend** - Python, C, Bash, TypeScript, Vue 3, React, Go (изучаю), базовые C++ и Ruby.

::: details Embedded, системное ПО и desktop
*   **Embedded** - STM32, ESP32, nRF52, RP2040, AVR, Embassy, esp-hal, FreeRTOS, ESP-IDF. CAN/CAN FD, USB/USB PD, BLE, Ethernet, I2C, SPI, UART, RS-485.
*   **Linux и сети** - ZFS, SSH, TUN, policy routing, nftables/iptables, AmneziaWG, netlink/ioctl, kprobe/kretprobe, пакетирование приложений.
*   **Desktop, Android и графика** - Tauri 2, Slint, egui, GTK4, ratatui, Kotlin, Jetpack Compose, JNI, wgpu, WebAssembly, PyO3.
*   **Отладка и проверка** - GDB, strace, Valgrind, perf/flamegraph, Miri, QEMU, HIL-тесты, Linux network namespaces, pytest, Playwright. probe-rs, defmt, RTT, JTAG/SWD, Wireshark, usbmon, Ghidra.
*   **Аппаратная разработка** - схемотехника, трассировка PCB, монтаж SMD/QFN, логический анализатор и осциллограф.
:::

#### Образование и языки

*   **Образование:** Неоконченное высшее
*   **Языки:** Русский (родной), Английский (C1, продвинутый). Свободно читаю и пишу техническую документацию, участвую в обсуждениях и code review на английском.
