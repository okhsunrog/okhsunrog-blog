---
title: Резюме
icon: file-lines
article: false
pageInfo: false
---

### Данила Горнушко
Rust-разработчик · СУБД, системное ПО и embedded

Москва · [Telegram (предпочтительно)](https://t.me/okhsunrog) · [me@okhsunrog.dev](mailto:me@okhsunrog.dev) · [GitHub](https://github.com/okhsunrog)

#### О себе

Пишу на Rust с 2023 года. В VK Tech работаю над Tarantool Column Store, распределённой колоночной СУБД. До этого разрабатывал прошивки для STM32 и ESP32 и инструменты для работы с оборудованием. Поддерживаю сетевой стек ergot и участвую в разработке Embassy.

#### Опыт работы

##### Rust-разработчик / Senior Backend Developer | Tarantool Column Store, VK Tech, Москва
<Duration start="2025-08" locale="ru" />

Присоединился к команде через USETECH в августе 2025 года, в мае 2026 перешёл в штат VK Tech. Стек проекта включает Rust, C, DataFusion, Apache Arrow, etcd и Arrow Flight SQL.

*   Реализовал настройку поколоночного сжатия через SQL и поддержку словарного кодирования строк. Доработал запись и чтение таких колонок, включая запросы к нескольким шардам. Обе возможности вошли в TCS 1.3.0. [Примечания к релизу](https://tarantool.io/docs/tcs/ru/1_x/rn)
*   Исправил ошибку в ядре Tarantool, из-за которой после восстановления реплики два узла могли одновременно принимать записи. [Принятый PR](https://github.com/tarantool/tarantool/pull/13000)
*   Исправил восстановление маршрутизации после потери связи с etcd. При переподключении планировщик заново определяет, какие узлы доступны для чтения и записи.
*   Устранил причину роста потребления памяти в долгоживущих сессиях Arrow Flight SQL. Ограничил время жизни снимка данных выполнением запроса, сохранив согласованность чтения.

##### Программист | Минимакс-94, Москва
<Duration start="2024-03" end="2025-07" locale="ru" />

*   Переписал с C на Rust внутреннюю утилиту для прошивки устройств по проприетарному протоколу. Разработал для неё графический интерфейс.
*   Разрабатывал и отлаживал прошивки для STM32 на C и Rust. Писал на Python утилиты для проверки оборудования и анализа измерений.

##### Инженер встраиваемых систем | ИП Коротков, Москва
<Duration start="2023-03" end="2024-02" locale="ru" />

*   Разработал протокол обмена между устройствами квеста поверх CAN. Реализовал отладку устройств и обновление их прошивок по той же шине с Raspberry Pi.
*   Проектировал схемы и печатные платы в EasyEDA, собирал электронные модули и писал прошивки для AVR и ESP32.
*   Написал HTTP-сервис на Rust и Axum для управления устройствами квеста и мониторинга их состояния.

##### Junior DevOps | Ростелеком Информационные Технологии, Москва
<Duration start="2021-11" end="2023-02" locale="ru" />

*   Перенёс сервис с Debian 6 на Debian 9.
*   Настроил сборку и запуск тестов в GitLab CI.
*   Добавлял функции в веб-интерфейс сервиса мониторинга серверов на Ruby, Sinatra и Bootstrap.

##### Программист, системный администратор | Фриланс, Москва
<Duration start="2020-06" end="2021-09" locale="ru" />

*   Администрировал Linux-серверы и разворачивал веб-сервисы. Разрабатывал устройства на Arduino, писал на Python и делал Android-приложения на Kotlin для управления устройствами по Bluetooth LE.

#### Избранные проекты

##### [vpnhide](https://github.com/okhsunrog/vpnhide)

Утилита, которая скрывает сведения об активном VPN от выбранных Android-приложений. Разработал модули ядра Linux на C и системный демон на Rust. Поддерживаю несколько версий ядра и проверяю модули в QEMU. К ноябрю 2026 года у проекта более 700 звёзд на GitHub и около 70 тыс. скачиваний файлов релизов.

##### [Arctern](https://github.com/okhsunrog/arctern)

Демон репликации ZFS на Rust. Передаёт инкрементальные снимки по SSH и возобновляет передачу после разрыва соединения. Реализовал ограничение полосы и права доступа. В веб-консоли на Vue и TypeScript можно следить за ходом репликации.

##### [zbm-rs](https://github.com/okhsunrog/zbm-rs)

Менеджер загрузки Linux с ZFS на Rust. Реализовал выбор поколений NixOS, загрузку из записываемого клона снимка и проверку ядра, initramfs и аргументов перед передачей управления через kexec. На Framework Laptop 13 проверил загрузку с Secure Boot и экспериментальное восстановление из гибернации с проверкой подлинности образа памяти через TPM. [Результаты проверок](https://github.com/okhsunrog/zbm-rs/blob/main/docs/verification.md)

##### [claude-proxy-rs](https://github.com/okhsunrog/claude-proxy-rs) и [llm-relay](https://github.com/okhsunrog/llm-relay)

LLM-прокси на Rust, Axum и PostgreSQL и библиотека для работы с API провайдеров. Сам развёртываю и сопровождаю сервис с февраля 2026 года. К ноябрю он обработал около 100 тыс. запросов. Сервисом пользуются через 20 с лишним клиентских ключей. Реализовал денежные квоты и учёт потребления, в том числе когда клиент прерывает потоковый ответ.

##### [OxiFOC](https://github.com/okhsunrog/oxifoc)

Прошивка управления бесщёточным двигателем на STM32. Контур управления работает в прерывании, команды и телеметрия обрабатываются в задачах Embassy. Код управления и защит общий для платы и виртуального двигателя. О том, как уложиться в 50 микросекунд, расскажу [на RustCon](https://rustcon.ru/50-mikrosekund-na-vsyo-async-rust-i-vektornoe-upravlenie-motorom) 4 декабря 2026 года.

#### Вклад в open source

*   **ergot, мейнтейнер:** сетевой стек для embedded — транспорты, маршрутизация, восстановление соединений, исправления ошибок памяти и конкурентного доступа с проверками под Miri. [Мои PR](https://github.com/jamesmunns/ergot/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **Embassy, контрибьютор:** поддержка периферии STM32, исправления зависаний DMA, ускорение вызова CORDIC с 35 до 22 тактов на STM32G474. [Мои PR](https://github.com/embassy-rs/embassy/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **esp-hal и esp-pacs, контрибьютор:** CAN FD драйвер для ESP32-C5 с аппаратными тестами, исправления USB Serial и тактирования. [esp-hal](https://github.com/esp-rs/esp-hal/pulls?q=is%3Apr+author%3Aokhsunrog), [esp-pacs](https://github.com/esp-rs/esp-pacs/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **Slint, контрибьютор:** Linux KMS backend, software renderer, обработка ввода. [Мои PR](https://github.com/slint-ui/slint/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **Apache Arrow, контрибьютор:** исправил panic при переполнении словарных ключей в concat/interleave, включая вложенные типы. [Мои PR](https://github.com/apache/arrow-rs/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **Tarantool, контрибьютор:** исправление supervised failover. [Принятый PR](https://github.com/tarantool/tarantool/pull/13000).

::: details Другие проекты
*   [km003c-rs](https://github.com/okhsunrog/km003c-rs) — восстановил недокументированный USB-протокол измерителя POWER-Z KM003C. Опубликовал библиотеку на Rust, CLI и Python bindings.
*   [Archinstall-ZFS](https://github.com/okhsunrog/archinstall_zfs) — установщик Arch Linux на ZFS с шифрованием и проверкой загрузки в QEMU.
*   [Tangleaf](https://github.com/okhsunrog/tangleaf) — база знаний с локальным хранением и синхронизацией между desktop и Android.
*   [realty-aggregator](https://github.com/okhsunrog/realty-aggregator) — пакетная обработка объявлений и фотографий с PostgreSQL, S3 и возобновлением после сбоев.
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
