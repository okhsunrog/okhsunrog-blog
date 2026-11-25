---
title: CV
icon: file-lines
article: false
pageInfo: false
---

### Danila Gornushko
Rust engineer · databases, systems software and embedded development

Moscow · [Telegram (preferred)](https://t.me/okhsunrog) · [me@okhsunrog.dev](mailto:me@okhsunrog.dev) · [GitHub](https://github.com/okhsunrog)

#### Summary

I’ve worked in Rust since 2023. At VK Tech I develop Tarantool Column Store, a distributed columnar database. I previously wrote firmware and hardware tools for STM32 and ESP32 devices. I maintain the ergot embedded networking stack and contribute to Embassy.

#### Work Experience

##### Rust Developer / Senior Backend Developer | Tarantool Column Store, VK Tech, Moscow
<Duration start="2025-08" locale="en" />

I joined the product team through USETECH in August 2025 and moved in-house to VK Tech in May 2026. The project uses Rust, C, DataFusion, Apache Arrow, etcd and Arrow Flight SQL.

*   Implemented SQL options for per-column compression and dictionary encoding of strings. Extended the write and read paths, including queries spanning multiple shards. Both features shipped in TCS 1.3.0. [Release notes](https://tarantool.io/docs/tcs/ru/1_x/rn)
*   Fixed a Tarantool core bug that allowed a recovered replica and the leader to accept writes at the same time. [Merged change](https://github.com/tarantool/tarantool/pull/13000)
*   Fixed query routing after a lost connection to etcd. On reconnect, the scheduler rebuilds its view of which nodes can serve reads and writes.
*   Fixed memory retention in long-lived Arrow Flight SQL sessions. A query now holds its data snapshot only for the duration of that query, preserving consistent reads.

##### Rust/C Programmer | Minimax-94, Moscow
<Duration start="2024-03" end="2025-07" locale="en" />

*   Rewrote an internal device flashing tool from C to Rust and built its graphical interface. The tool communicates with the hardware over a proprietary protocol.
*   Developed and debugged STM32 firmware in C and Rust. Wrote Python tools for testing hardware and analysing measurements.

##### Rust/Embedded Developer | Korotkov (Sole Proprietorship), Moscow
<Duration start="2023-03" end="2024-02" locale="en" />

*   Designed a CAN protocol for escape room devices and implemented debugging and firmware updates over the same bus from a Raspberry Pi.
*   Designed schematics and PCBs in EasyEDA, assembled the boards and wrote firmware for AVR and ESP32.
*   Built an HTTP service in Rust and Axum to control devices and monitor their status.

##### Junior DevOps | Rostelecom Information Technologies, Moscow
<Duration start="2021-11" end="2023-02" locale="en" />

*   Migrated a service from Debian 6 to Debian 9.
*   Set up builds and automated test runs in GitLab CI.
*   Added features to the web interface of a server monitoring service built with Ruby, Sinatra and Bootstrap.

##### Programmer, System Administrator | Freelance, Moscow
<Duration start="2020-06" end="2021-09" locale="en" />

*   Administered Linux servers and deployed web services. Built Arduino devices, wrote Python tools and developed Android apps in Kotlin to control hardware over Bluetooth LE.

#### Selected Projects

##### [vpnhide](https://github.com/okhsunrog/vpnhide)

An Android tool that hides active VPN connections from selected apps. I wrote the Linux kernel modules in C and the userspace daemon in Rust. I maintain support for multiple kernel versions and test the modules in QEMU. As of November 2026, the project has over 700 GitHub stars and roughly 70,000 release asset downloads.

##### [Arctern](https://github.com/okhsunrog/arctern)

A ZFS replication daemon written in Rust. It transfers incremental snapshots over SSH and resumes interrupted transfers. I implemented bandwidth limits and access controls, with a Vue and TypeScript console for monitoring replication.

##### [zbm-rs](https://github.com/okhsunrog/zbm-rs)

A Linux boot manager for ZFS written in Rust. I implemented NixOS generation selection, boot from a writable snapshot clone, and verification of the kernel, initramfs and arguments before kexec. On a Framework Laptop 13 I tested Secure Boot and experimental hibernation with TPM-authenticated memory image restoration. [Verification results](https://github.com/okhsunrog/zbm-rs/blob/main/docs/verification.md)

##### [claude-proxy-rs](https://github.com/okhsunrog/claude-proxy-rs) and [llm-relay](https://github.com/okhsunrog/llm-relay)

An LLM proxy built with Rust, Axum and PostgreSQL, and a library for working with provider APIs. I’ve deployed and operated the service since February 2026. By November it had handled about 100,000 requests across more than 20 client keys. I implemented spending limits and usage accounting, including when a client cancels a streaming response.

##### [OxiFOC](https://github.com/okhsunrog/oxifoc)

Brushless motor control firmware for STM32. The control loop runs in an interrupt while Embassy tasks handle commands and telemetry. The hardware and virtual motor share the same control and protection code. The 50-microsecond control budget is the subject of my [RustCon talk (in Russian)](https://rustcon.ru/50-mikrosekund-na-vsyo-async-rust-i-vektornoe-upravlenie-motorom) scheduled for 4 December 2026.

#### Open Source Contributions

*   **ergot maintainer:** embedded networking stack — transports, routing, connection recovery, and memory-safety and concurrency fixes with Miri checks. [My PRs](https://github.com/jamesmunns/ergot/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **Embassy contributor:** STM32 peripheral support, DMA hang fixes, CORDIC call time reduced from 35 to 22 cycles on STM32G474. [My PRs](https://github.com/embassy-rs/embassy/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **esp-hal and esp-pacs contributor:** ESP32-C5 CAN FD driver with hardware tests, USB Serial and clock configuration fixes. [esp-hal](https://github.com/esp-rs/esp-hal/pulls?q=is%3Apr+author%3Aokhsunrog), [esp-pacs](https://github.com/esp-rs/esp-pacs/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **Slint contributor:** Linux KMS backend, software renderer, input handling. [My PRs](https://github.com/slint-ui/slint/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **Apache Arrow contributor:** fixed dictionary-key overflow panics in concat/interleave, including nested types. [My PRs](https://github.com/apache/arrow-rs/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **Tarantool contributor:** supervised failover fix. [Merged PR](https://github.com/tarantool/tarantool/pull/13000).

::: details Other projects
*   [km003c-rs](https://github.com/okhsunrog/km003c-rs) — I reverse-engineered the POWER-Z KM003C meter’s USB protocol and published a Rust library, CLI and Python bindings.
*   [Archinstall-ZFS](https://github.com/okhsunrog/archinstall_zfs) — an Arch Linux installer for encrypted ZFS systems, with boot tests in QEMU.
*   [Tangleaf](https://github.com/okhsunrog/tangleaf) — a local-first knowledge base with desktop and Android sync.
*   [realty-aggregator](https://github.com/okhsunrog/realty-aggregator) — batch processing for property listings and photos using PostgreSQL and S3, with resumable jobs.
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

#### Languages

Russian (native), English (C1, advanced) — fluent in reading and writing technical documentation, participating in discussions, and code review in English
