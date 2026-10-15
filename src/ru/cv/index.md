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

##### POWER-Z KM003C: реверс-инжиниринг протокола и [km003c-rs](https://github.com/okhsunrog/km003c-rs)

*   Исследовал недокументированный USB-протокол анализатора: сопоставлял USB-захваты с экспортами официального ПО, анализировал Mtools.exe в Ghidra и расшифрованную прошивку устройства. Восстановил форматы команд и данных, механизмы AES-аутентификации и чтения зашифрованных логов; проверил реализованные сценарии на устройстве. [Материалы исследования](https://github.com/okhsunrog/km003c-protocol-research).
*   Создал инструменты анализа USB-транзакций на Python/Polars и конвертер pcapng в Parquet на Rust. Документировал протокол, отделяя подтверждённые захватами и аппаратными проверками результаты от выводов статического анализа.
*   На основе исследования разработал типизированную async-библиотеку на Rust с nusb, сбором измерений и разбором USB Power Delivery, CLI, GUI на egui и экспериментальный интерфейс на Slint для desktop и Android. Опубликовал библиотеку на crates.io и Python bindings через PyO3 со сборкой wheels в CI.

---

#### Вклад в open source

*   **ergot, мейнтейнер:** развиваю сетевой стек для embedded: архитектуру транспортов, маршрутизацию, адресацию и восстановление соединений. Исправляю ошибки безопасности памяти и конкурентного доступа, добавляю регрессионные тесты и проверки под Miri. [Мои PR](https://github.com/jamesmunns/ergot/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **Embassy, контрибьютор:** развиваю поддержку периферии STM32: async flash для G0/G4, компараторы, настройку таймеров и CORDIC. Исправил зависания DMA и сократил время вызова CORDIC с 35 до 22 тактов в бенчмарке STM32G474. [Мои PR](https://github.com/embassy-rs/embassy/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **esp-hal и esp-pacs, контрибьютор:** добавил CAN FD драйвер для ESP32-C5 с blocking/async API и аппаратными тестами, исправлял потерю данных USB Serial и ошибки тактирования, добавлял описания регистров периферии. [esp-hal](https://github.com/esp-rs/esp-hal/pulls?q=is%3Apr+author%3Aokhsunrog), [esp-pacs](https://github.com/esp-rs/esp-pacs/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **Slint, контрибьютор:** развиваю Linux KMS backend, исправляю software renderer и обработку ввода. Добавил поддержку RGB565 big-endian для SPI-дисплеев и выравнивания областей перерисовки. [Мои PR](https://github.com/slint-ui/slint/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **Apache Arrow, контрибьютор:** работаю над обработкой словарных массивов; исправил panic при переполнении словарных ключей в concat/interleave, включая вложенные типы. [Мои PR](https://github.com/apache/arrow-rs/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **Tarantool, контрибьютор открытого ядра:** исправил ошибку supervised failover, при которой повторно присоединённая реплика могла становиться вторым writable-узлом. [Принятый PR](https://github.com/tarantool/tarantool/pull/13000).
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

*   **Образование:** Неоконченное высшее
*   **Языки:** Русский (родной), Английский (C1, продвинутый). Свободно читаю и пишу техническую документацию, участвую в обсуждениях и code review на английском.
