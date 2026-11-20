---
title: CV
icon: file-lines
article: false
pageInfo: false
---

### Danila Gornushko
Backend / Embedded Software Engineer

#### Contacts
*   Telegram: [t.me/okhsunrog](https://t.me/okhsunrog) (preferred contact method)
*   Email: me@okhsunrog.dev
*   Personal website: [okhsunrog.dev](https://okhsunrog.dev)
*   GitHub: [github.com/okhsunrog](https://github.com/okhsunrog)
*   LinkedIn: https://www.linkedin.com/in/danila-gornushko-130152379/
*   Habr: https://habr.com/ru/users/okhsunrog/
*   Location: Moscow
*   Citizenship: Russia

#### Summary

Backend and embedded engineer with <Duration start="2020-06" format="years-plus" /> years of software engineering experience and <Duration start="2023-03" format="years-decimal" /> years of Rust development. I build server applications and LLM infrastructure: my LLM proxy with spending limits and request-cost accounting has been running in production since February 2026. I deploy and operate my own services. At VK Tech, I contributed to Tarantool Column Store, a distributed columnar database. I also work on systems software, embedded systems, and applications for Linux and Android. My contributions have been merged into Apache Arrow, Embassy, esp-hal, ergot, Slint, and Tarantool. Currently learning Go.

#### Work Experience

##### Rust Developer / Senior Backend Developer | Tarantool Column Store, VK Tech, Moscow
<Duration start="2025-08" locale="en" />

Worked through USETECH until April 2026, then joined VK Tech as an in-house developer in May 2026.

A distributed columnar database on top of Tarantool (Rust, DataFusion, Apache Arrow, etcd, gRPC/Arrow Flight SQL, C).

*   Improved cluster fault tolerance during node and coordination-service failures. Fixed a Tarantool core bug that let a rejoined replica become a second writable node ([PR](https://github.com/tarantool/tarantool/pull/13000)).
*   Diagnosed and fixed resource leaks, network latency issues, and service startup problems. Backed each fix with a reproducible scenario and regression tests.
*   Implemented end-to-end column compression and dictionary encoding, from SQL down to the storage engine.
*   Improved observability (streaming HTTP logging, metrics) and sped up GitLab CI.

##### Rust/C Programmer | Minimax-94, Moscow
<Duration start="2024-03" end="2025-07" locale="en" />

*   Developed and debugged firmware for STM32 microcontrollers in C and Rust.
*   Created test utilities and scripts for data analysis in Python.
*   Designed console and GUI applications (native-windows-gui, GTK4, Tauri) in Rust for interacting with hardware.

##### Rust/Embedded Developer | Korotkov (Sole Proprietorship), Moscow
<Duration start="2023-03" end="2024-02" locale="en" />

*   Developed electronic modules for escape rooms from scratch, including circuit design, PCB layout (EasyEDA), assembly, and programming (AVR, ESP32 in C/C++ and Rust).
*   Implemented a distributed system of devices with network communication over CAN bus and a custom protocol.
*   Wrote a small supporting HTTP service in Rust (Axum) for device control and status monitoring. Studied the company's Go backend while integrating devices and made small changes to it.
*   Introduced an OTA firmware update system over CAN bus using Raspberry Pi.

##### Junior DevOps | Rostelecom Information Technologies, Moscow
<Duration start="2021-11" end="2023-02" locale="en" />

*   Developed a web service for server monitoring (Ruby, Sinatra, Bootstrap).
*   Participated in service migrations and implemented containerization (Docker, docker-compose).
*   Set up CI/CD pipelines and deployment automation.

##### Programmer, System Administrator | Freelance, Moscow
<Duration start="2020-06" end="2021-09" locale="en" />

*   Administered Linux servers, deployed web services, developed projects on Arduino and Python, and native Android applications (Kotlin) for controlling devices via BLE.

#### Selected Projects

**Backend, LLMs, and infrastructure**

##### [claude-proxy-rs](https://github.com/okhsunrog/claude-proxy-rs) and [llm-relay](https://github.com/okhsunrog/llm-relay)

LLM proxy in Rust/Axum/PostgreSQL with OpenAI and Anthropic APIs, client keys, spending limits, and request-cost accounting. **Running in production since February 2026: about 100k requests and 12B tokens across 20+ client keys.**

::: details Details
*   Implemented OAuth access to providers, client keys with model access controls, spending limits, token and request-cost accounting, an admin UI, and a user-facing usage dashboard.
*   Implemented SSE and tool-call conversion, usage accounting on request cancellation, Retry-After-aware retries, and OAuth token refresh. Added integration checks using real SDKs and PostgreSQL.
*   Deployed with Ansible: a static musl binary under systemd with a dedicated user and memory limit, PostgreSQL, and access only through a WireGuard tunnel and nginx. Migrated the service to another server using a consistent dump, data verification before cutover, and a rollback plan.
*   Maintain llm-relay, a shared library used across several of my projects. It provides LLM protocol types and conversion, HTTP clients, streaming events, embeddings, and Rig adapters.
:::

##### [realty-aggregator](https://github.com/okhsunrog/realty-aggregator)

A Rust/Axum/PostgreSQL/S3 service that regularly collects listings and runs batch LLM analysis of their text and photos, with bounded concurrency, retries, and recovery after failures.

::: details Details
*   Implemented incremental collection from an external API: pagination, overlapping time windows, and a checkpoint that advances only after every page is saved. Listings and photos are saved transactionally, and stale data cannot overwrite newer data.
*   Photos are stored in S3-compatible storage (MinIO, later RustFS). Implemented two-tier LLM vision analysis in JSON mode: validation of response completeness and score ranges, bounded retries with delays, rate limiting, and configurable concurrency. Import, image download, and analysis resume independently.
*   Scheduled background jobs skip missed ticks instead of building a backlog. Job status is streamed over WebSocket. SQL queries are checked at compile time (SQLx), and integration tests run against separate PostgreSQL databases in CI.
:::

##### [Floppa VPN](https://github.com/okhsunrog/floppa-vpn)

A VPN service with an Axum/PostgreSQL backend, Telegram bot, subscription payments, and a Tauri 2 client for Linux, Windows, and Android. **In production since 2026, with hundreds of users, including paying customers.**

::: details Details
*   Implemented JWT authentication, subscriptions and payments, transactional device-management operations, and an admin panel.
*   Built a shared asynchronous connection-management core with typed IPC/RPC, protocol selection, cancellation, and reconnection. Implemented a network-change journal to restore routes and DNS after a process crash.
*   Integrated WireGuard, AmneziaWG, and VLESS+REALITY, VictoriaMetrics monitoring, and component synchronization through PostgreSQL LISTEN/NOTIFY. The service runs on several VPS in different regions, with separate staging and production configurations.
:::

##### Personal infrastructure

Manage infrastructure of several VPS and a home server as code: Ansible, NixOS, WireGuard, PostgreSQL, and monitoring.

::: details Details
*   Wrote Ansible roles for VPN nodes, reverse proxies (nginx, HAProxy), PostgreSQL, VictoriaMetrics, Forgejo with CI runners, a TURN server, and my own applications. Secrets are kept in Ansible Vault, and regions are connected through WireGuard tunnels.
*   Migrate services between servers using documented procedures: consistent dumps, data verification, pre-publication checks, and a rollback plan.
*   Maintain declarative NixOS configurations for my work laptop and a Raspberry Pi, with SOPS-managed secrets and VM tests. Remotely migrated a device from Debian to NixOS while preserving its data.
:::

##### [Arctern](https://github.com/okhsunrog/arctern)

An asynchronous ZFS replication daemon in Rust with multiplexed SSH transport, tarpc RPC, and a Vue/TypeScript web console.

::: details Details
*   Implemented incremental and resumable transfers, reconnection with backoff, bandwidth limiting, and ACLs.
*   Added Unix-socket authorization based on peer process credentials, SSE event replay, and ZFS/SSH integration scenarios.
:::

##### [Tangleaf](https://github.com/okhsunrog/tangleaf)

A local-first knowledge base in Rust/Tauri/React with desktop and Android clients, synchronization, and a server with search and an agent.

::: details Details
*   Implemented SQLite storage, FTS5 search, and HTTP/WebSocket synchronization with an operation log, an offline outbox, and HLC/LWW conflict resolution.
*   Implemented document indexing, embeddings, hybrid retrieval with reranking, entity extraction, and streaming agent chat on an Axum server. Added authenticated MCP access to notes with revision checks on writes.
:::

**Systems software, Android, and embedded**

##### [vpnhide](https://github.com/okhsunrog/vpnhide) ![](https://img.shields.io/github/stars/okhsunrog/vpnhide?style=social)

Tools for hiding an active VPN from selected Android apps: LSPosed, Linux kernel modules, and native Rust/C hooks.

::: details Details
*   Implemented framework API filtering in system_server through LSPosed, Linux kernel modules using kprobe/kretprobe, and native Rust/C hooks through Zygisk.
*   Connected a Kotlin/Jetpack Compose app to Rust components through JNI, implemented diagnostics and report export, and added native logic tests and QEMU scenarios for kernel modules.
*   In the ongoing 2.0 rewrite, implemented communication between the Kotlin app and a privileged Rust daemon through UniFFI and tarpc over Unix sockets, UID authorization, and operation recovery after restart.
:::

##### [Archinstall-ZFS](https://github.com/okhsunrog/archinstall_zfs) ![](https://img.shields.io/github/stars/okhsunrog/archinstall_zfs?style=social)

An Arch Linux installer in Rust with ZFS, encryption, ZFSBootMenu, a Slint/LinuxKMS GUI, and a ratatui TUI.

::: details Details
*   Implemented libalpm package management, parallel resumable downloads with mirror failover and checksum verification, and installation cancellation with resource cleanup.
*   Added QEMU scenarios for installation and boot verification.
:::

##### [OxiFOC](https://github.com/okhsunrog/oxifoc) ![](https://img.shields.io/github/stars/okhsunrog/oxifoc?style=social)

Brushless motor-control firmware in Rust/Embassy with a hardware-independent no_std FOC core for STM32. The basis of my RustCon 2026 talk.

::: details Details
*   Separated the ADC ISR control loop from asynchronous command and telemetry handling through a lock-free queue.
*   Built a BASEPRI-based priority-ceiling mutex for Cortex-M to synchronize the networking stack while preserving high-priority motor-control interrupts. Use hardware profiling and a virtual motor sharing the firmware's control and protection code.
:::

##### POWER-Z KM003C: protocol reverse engineering and [km003c-rs](https://github.com/okhsunrog/km003c-rs) ![](https://img.shields.io/github/stars/okhsunrog/km003c-rs?style=social)

Reverse-engineered the analyzer's undocumented USB protocol and built a Rust library on top of it, with a CLI, GUIs, Python bindings, and a browser client.

::: details Details
*   Correlated USB captures with official software exports, analyzed Mtools.exe in Ghidra, and examined decrypted device firmware. Reconstructed command and data formats, AES authentication, and encrypted log retrieval. Validated implemented workflows on hardware. [Research materials](https://github.com/okhsunrog/km003c-protocol-research).
*   Built USB transaction analysis tools in Python/Polars and a Rust pcapng-to-Parquet converter. Documented the protocol, distinguishing capture-backed and hardware-validated findings from static analysis conclusions.
*   Built a typed async Rust library with nusb communication, measurement acquisition, and USB Power Delivery parsing, plus a CLI, egui GUI, and experimental Slint interface for desktop and Android. Published the library on crates.io and Python bindings through PyO3, with CI-built wheels.
*   Added a browser client using WebAssembly and a shared wgpu renderer with compute processing of measurements. Implemented CSV/Parquet recording with a journal for crash recovery.
:::

##### [Foilfern](https://github.com/okhsunrog/foilfern)

An electronics design system in Rust with a Slint editor, CLI, and MCP server for agent-driven project editing.

::: details Details
*   Implemented schematic and PCB editing, ERC/DRC, autorouting, 3D previews, and manufacturing exports.
*   Designed MCP tools for agent-driven project editing over stdio and Streamable HTTP. Implemented change previews, revision checks, atomic operations, and undo/redo. Check file compatibility and validation results against LibrePCB.
:::

##### MCP tools

MCP servers that let AI agents work with microcontrollers, hardware documentation, and the KDE desktop.

::: details Details
*   Built [Flashprobe MCP](https://github.com/okhsunrog/flashprobe-mcp) for flashing and monitoring microcontrollers through probe-rs/espflash, and [STM32 Data MCP](https://github.com/okhsunrog/stm32-data-mcp) for querying pin mappings, registers, and peripheral data.
*   Maintain a [KWin MCP fork](https://github.com/okhsunrog/kwin-mcp) for KDE/Wayland automation through AT-SPI2 and libei. Fix input handling, isolated-session management, and error reporting.
:::

#### Speaking

*   **RustCon 2026, Moscow, December 4, 2026 (upcoming).** [“50 Microseconds for Everything: Async Rust and Field-Oriented Motor Control”](https://rustcon.ru/50-mikrosekund-na-vsyo-async-rust-i-vektornoe-upravlenie-motorom). The talk is in Russian and covers OxiFOC, separating time-critical interrupts from Embassy tasks, hardware-independent architecture, and virtual-motor testing.

#### Open Source Contributions

*   **ergot maintainer:** embedded networking stack — transports, routing, connection recovery, and memory-safety and concurrency fixes with Miri checks. [My PRs](https://github.com/jamesmunns/ergot/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **Embassy contributor:** STM32 peripheral support, DMA hang fixes, CORDIC call time reduced from 35 to 22 cycles. [My PRs](https://github.com/embassy-rs/embassy/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **esp-hal and esp-pacs contributor:** ESP32-C5 CAN FD driver with hardware tests, USB Serial and clock configuration fixes. [esp-hal](https://github.com/esp-rs/esp-hal/pulls?q=is%3Apr+author%3Aokhsunrog), [esp-pacs](https://github.com/esp-rs/esp-pacs/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **Slint contributor:** Linux KMS backend, software renderer, input handling. [My PRs](https://github.com/slint-ui/slint/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **Apache Arrow contributor:** fixed dictionary-key overflow panics in concat/interleave, including nested types. [My PRs](https://github.com/apache/arrow-rs/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **Tarantool contributor:** supervised failover fix. [Merged PR](https://github.com/tarantool/tarantool/pull/13000).

::: details More about contributions
*   **ergot:** develop transport architecture, routing, addressing, and connection recovery. Fix memory-safety and concurrency issues, with regression tests and Miri checks.
*   **Embassy:** G0/G4 async flash, comparators, timer configuration, and CORDIC. Fixed DMA hangs and reduced CORDIC call time from 35 to 22 cycles in an STM32G474 benchmark.
*   **esp-hal and esp-pacs:** added an ESP32-C5 CAN FD driver with blocking/async APIs and hardware tests, fixed USB Serial data loss and clock configuration issues, and added peripheral register definitions.
*   **Slint:** develop the Linux KMS backend and fix software rendering and input handling. Added big-endian RGB565 support for SPI displays and support for dirty-region alignment.
*   **Apache Arrow:** work on dictionary-array handling.
*   **Tarantool:** fixed a bug that could make a rejoined replica become a second writable node.
*   Publish libraries on crates.io, maintain AUR packages, and write technical articles. More projects are available on [GitHub](https://github.com/okhsunrog).
:::

#### Technical Skills

*   **Rust** - async/await, unsafe, FFI, no_std, lifetimes, Send/Sync, atomics, synchronization primitives, macros. Tokio, Serde, tracing, Criterion.
*   **Backend and data** - Axum, SQLx, PostgreSQL, SQLite, S3/MinIO, etcd, Apache Arrow, DataFusion, Polars, Parquet. REST, gRPC/Protobuf, Arrow Flight SQL, WebSocket, SSE, OpenAPI, PostgreSQL LISTEN/NOTIFY.
*   **LLMs and agent tools** - OpenAI/Anthropic APIs, streaming responses, tool calling, MCP, token and cost accounting. RAG, embeddings, hybrid retrieval, reranking.
*   **Authentication and IPC** - OAuth, JWT, access keys and quotas, tarpc, Unix domain sockets, UniFFI.
*   **Infrastructure and operations** - Linux, systemd, Docker/Compose, Ansible, NixOS, nginx, HAProxy, WireGuard. GitLab CI, GitHub Actions, Forgejo Actions.
*   **Monitoring** - Grafana, Prometheus, VictoriaMetrics, tracing.
*   **Other languages and frontend** - Python, C, Bash, TypeScript, Vue 3, React, Go (learning), basic C++ and Ruby.

::: details Embedded, systems software, and desktop
*   **Embedded** - STM32, ESP32, nRF52, RP2040, AVR, Embassy, esp-hal, FreeRTOS, ESP-IDF. CAN/CAN FD, USB/USB PD, BLE, Ethernet, I2C, SPI, UART, RS-485.
*   **Linux and networking** - ZFS, SSH, TUN, policy routing, nftables/iptables, AmneziaWG, netlink/ioctl, kprobe/kretprobe, application packaging.
*   **Desktop, Android, and graphics** - Tauri 2, Slint, egui, GTK4, ratatui, Kotlin, Jetpack Compose, JNI, wgpu, WebAssembly, PyO3.
*   **Debugging and validation** - GDB, strace, Valgrind, perf/flamegraph, Miri, QEMU, hardware-in-the-loop tests, Linux network namespaces, pytest, Playwright. probe-rs, defmt, RTT, JTAG/SWD, Wireshark, usbmon, Ghidra.
*   **Hardware** - circuit design, PCB layout, SMD/QFN assembly, logic analyzers, and oscilloscopes.
:::

#### Education and Languages

*   **Education:** Incomplete higher education
*   **Languages:** Russian (native), English (C1, advanced) — fluent in reading and writing technical documentation, participating in discussions, and code review in English
