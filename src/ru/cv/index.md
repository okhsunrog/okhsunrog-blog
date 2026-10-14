---
title: Резюме
icon: file-lines
article: false
---

### Данила Горнушко
Rust Developer

#### Контакты
*   Telegram: t.me/okhsunrog (предпочтительный способ связи)
*   Email: me@okhsunrog.dev
*   Личный сайт: okhsunrog.dev
*   GitHub: github.com/okhsunrog
*   LinkedIn: https://www.linkedin.com/in/danila-gornushko-130152379/
*   Habr: https://habr.com/ru/users/okhsunrog/
*   Проживание: Москва
*   Гражданство: Россия

---

#### О себе

Rust-разработчик с <Duration start="2020-06" format="years-plus" /> годами опыта в программной инженерии и <Duration start="2023-03" format="years-decimal" /> годами разработки на Rust. Специализируюсь на системном ПО, компонентах СУБД и embedded. Работаю над Tarantool Column Store в VK Tech, разрабатываю сервисы и инструменты для Linux и Android. Мои изменения приняты в Apache Arrow, Embassy, esp-hal, ergot и Slint.

---

#### Опыт работы

##### Rust-разработчик / Senior Backend Developer | Tarantool Column Store, VK Tech, Москва
<Duration start="2025-08" locale="ru" />

До апреля 2026 работал через USETECH, с мая 2026 работаю в штате VK Tech. Команда и проект остались прежними.

*   Разработка высокопроизводительных компонентов базы данных и систем хранения на Rust.
*   Участие в реализации колоночного движка хранения на Rust.

##### Программист | Минимакс-94, Москва
<Duration start="2024-03" end="2025-07" locale="ru" />

*   Разработка и отладка прошивок для микроконтроллеров STM32 на C и Rust.
*   Создание тестовых утилит и скриптов для анализа данных на Python.
*   Проектирование консольных и GUI-приложений (native-windows-gui, GTK4, Tauri) на Rust для взаимодействия с оборудованием.

##### Инженер встраиваемых систем | ИП Коротков, Москва
<Duration start="2023-03" end="2024-02" locale="ru" />

*   Разработал с нуля электронные модули для квестов: от схемотехники и трассировки плат (EasyEDA) до сборки и программирования (AVR, ESP32 на C/C++ и Rust).
*   Реализовал сетевое взаимодействие устройств по шине CAN, включая разработку собственного протокола.
*   Разработал backend на Rust (Axum) для управления квестом и мониторинга состояния устройств.
*   Внедрил систему OTA-обновления прошивок по CAN-шине, используя Raspberry Pi в качестве сервера.

##### Junior DevOps | Ростелеком Информационные Технологии, Москва
<Duration start="2021-11" end="2023-02" locale="ru" />

*   Разрабатывал веб-сервис для мониторинга серверов (Ruby, Sinatra, Bootstrap).
*   Участвовал в миграции сервисов и внедрял контейнеризацию (Docker, docker-compose).

##### Программист, системный администратор | Фриланс, Москва
<Duration start="2020-06" end="2021-09" locale="ru" />

*   Администрировал Linux-серверы, разворачивал веб-сервисы, разрабатывал проекты на Arduino и Python, нативные Android-приложения (Kotlin) для управления устройствами по BLE.

---

#### Избранные проекты

##### [Floppa VPN](https://github.com/okhsunrog/floppa-vpn)

*   Разработал VPN-сервис: backend на Axum/PostgreSQL, daemon управления VPN, Telegram-бот, административный интерфейс и клиент Tauri 2 для Linux, Windows и Android.
*   Реализовал общее Rust-ядро управления соединением: выбор протокола, восстановление после сбоев, отмену попыток и откат сетевых изменений. Интегрировал WireGuard, AmneziaWG и VLESS+REALITY, сбор метрик в VictoriaMetrics и синхронизацию через PostgreSQL LISTEN/NOTIFY.

##### [vpnhide](https://github.com/okhsunrog/vpnhide)

*   Разработал инструменты для скрытия активного VPN от выбранных Android-приложений: фильтрацию framework API в system_server через LSPosed, модули ядра Linux и Zygisk.
*   Связал приложение на Kotlin/Jetpack Compose с Rust-компонентами через JNI, реализовал диагностику и экспорт отчётов. Добавил тесты нативной логики и QEMU-сценарии для модулей ядра.

##### [km003c-rs](https://github.com/okhsunrog/km003c-rs)

*   Разработал инструменты для USB-C анализатора POWER-Z KM003C: типизированную async-библиотеку на Rust, CLI, GUI на egui и экспериментальный интерфейс на Slint для desktop и Android.
*   Реализовал обмен с устройством через nusb, сбор измерений и разбор USB Power Delivery. Опубликовал библиотеку на crates.io и Python bindings через PyO3; настроил сборку wheels в CI.

---

#### Вклад в open source

*   **Apache Arrow:** исправил panic при переполнении словарных ключей в concat/interleave, включая вложенные массивы. [Принятый PR](https://github.com/apache/arrow-rs/pull/10675).
*   **Embassy и esp-hal:** добавил CAN FD драйвер для ESP32-C5 с blocking/async API и аппаратными тестами; переработал CORDIC API и исправил зависания DMA на STM32. В бенчмарке STM32G474 сократил время вызова CORDIC с 35 до 22 тактов. [CAN FD](https://github.com/esp-rs/esp-hal/pull/6280), [CORDIC](https://github.com/embassy-rs/embassy/pull/5663).
*   **ergot:** развивал маршрутизацию, адресацию, транспортные абстракции и отслеживание доступности узлов. Исправил ошибки безопасности памяти с регрессионными тестами и проверками под Miri. [Принятый PR](https://github.com/jamesmunns/ergot/pull/217).
*   **Slint:** исправил обработку шага строки framebuffer в Linux KMS и ошибки software renderer; добавил поддержку RGB565 big-endian для SPI-дисплеев. [Linux KMS](https://github.com/slint-ui/slint/pull/13516), [RGB565](https://github.com/slint-ui/slint/pull/10882).
*   Публикую библиотеки на crates.io, поддерживаю пакеты в AUR и пишу технические статьи. Другие проекты доступны на [GitHub](https://github.com/okhsunrog).

---

#### Технические навыки

*   **Rust:** async/await, unsafe, FFI, no_std/no_alloc, lifetimes, Send/Sync, атомики, декларативные и процедурные макросы; Tokio, Serde, tracing, Criterion.
*   **Backend и данные:** Axum, SQLx, PostgreSQL, SQLite, Redis, Apache Arrow, DataFusion; REST, gRPC/Protobuf, WebSockets, SSE, OpenAPI, PostgreSQL LISTEN/NOTIFY.
*   **Linux и сети:** systemd, ZFS, SSH, TUN, policy routing, nftables/iptables, WireGuard/AmneziaWG; администрирование серверов и пакетирование приложений.
*   **Мониторинг:** VictoriaMetrics, Grafana, Prometheus, InfluxDB, Prometheus-совместимые метрики, tracing.
*   **Embedded:** STM32, ESP32, nRF52, RP2040, AVR; Embassy, esp-hal, FreeRTOS, ESP-IDF; CAN/CAN FD, USB/USB PD, BLE, Ethernet, I2C, SPI, UART, RS-485.
*   **Desktop и Android:** Tauri 2, Slint, egui, GTK4; Kotlin, Jetpack Compose, JNI; nusb, PyO3.
*   **Отладка и проверка:** GDB, strace, Valgrind, perf/flamegraph, Miri, аппаратные HIL-тесты, интеграционные тесты, pytest, Playwright; probe-rs, defmt, RTT, JTAG/SWD, Wireshark, usbmon, Ghidra.
*   **Сборка и инфраструктура:** GitHub Actions, GitLab CI, Forgejo, Docker Compose, Ansible, кросс-компиляция, CMake, Make.
*   **Другие языки и frontend:** C, Python, Bash, TypeScript/JavaScript, Vue 3, React, Pinia, Vite, Tailwind CSS; базовые C++ и Ruby.
*   **Аппаратная разработка:** схемотехника, трассировка PCB, монтаж SMD/QFN, логический анализатор и осциллограф.

---

#### Образование и языки

*   **Образование:** Среднее полное
*   **Языки:** Русский (родной), Английский (C1, продвинутый). Свободно читаю и пишу техническую документацию, участвую в обсуждениях и code review на английском.
