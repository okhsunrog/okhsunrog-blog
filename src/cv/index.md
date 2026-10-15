---
title: CV
icon: file-lines
article: false
---

### Danila Gornushko
Rust Developer

#### Contacts
*   Telegram: t.me/okhsunrog (preferred contact method)
*   Email: me@okhsunrog.dev
*   Personal website: okhsunrog.dev
*   GitHub: github.com/okhsunrog
*   LinkedIn: https://www.linkedin.com/in/danila-gornushko-130152379/
*   Habr: https://habr.com/ru/users/okhsunrog/
*   Location: Moscow
*   Citizenship: Russia

---

#### Summary

Rust developer with <Duration start="2020-06" format="years-plus" /> years of software engineering experience and <Duration start="2023-03" format="years-decimal" /> years of Rust development. I specialize in systems software, database components, and embedded systems. I work on Tarantool Column Store at VK Tech and build services and tools for Linux and Android. My contributions have been merged into Apache Arrow, Embassy, esp-hal, ergot, and Slint.

---

#### Work Experience

##### Rust Developer / Senior Backend Developer | Tarantool Column Store, VK Tech, Moscow
<Duration start="2025-08" locale="en" />

Worked through USETECH until April 2026, then joined VK Tech as an in-house developer in May 2026. Continued with the same team and project.

*   Developing high-performance database components and storage systems in Rust.
*   Contributing to the columnar storage engine implementation in Rust.

##### Rust/C Programmer | Minimax-94, Moscow
<Duration start="2024-03" end="2025-07" locale="en" />

*   Developed and debugged firmware for STM32 microcontrollers in C and Rust.
*   Created test utilities and scripts for data analysis in Python.
*   Designed console and GUI applications (GTK4, Tauri) in Rust for interacting with hardware.

##### Rust/Embedded Developer | Korotkov (Sole Proprietorship), Moscow
<Duration start="2023-03" end="2024-02" locale="en" />

*   Developed a full cycle of electronic modules for escape rooms: circuit design, programming (AVR, ESP32 in C/C++/Rust), assembly, and debugging.
*   Implemented a distributed system of devices with network communication over CAN bus and a custom protocol.
*   Created a backend in Rust (Axum) for quest management and real-time device monitoring.
*   Introduced an OTA firmware update system over CAN bus using Raspberry Pi.

##### Junior DevOps | Rostelecom Information Technologies, Moscow
<Duration start="2021-11" end="2023-02" locale="en" />

*   Developed a web service for server monitoring (Ruby, Sinatra, Bootstrap).
*   Participated in service migrations and implemented containerization (Docker, docker-compose).
*   Set up CI/CD pipelines and deployment automation.

##### Programmer, System Administrator | Freelance, Moscow
<Duration start="2020-06" end="2021-09" locale="en" />

*   Administered Linux servers, deployed web services, developed projects on Arduino and Python, and native Android applications (Kotlin) for controlling devices via BLE.

---

#### Selected Projects

##### [Floppa VPN](https://github.com/okhsunrog/floppa-vpn)

*   Built a VPN service with an Axum/PostgreSQL backend, VPN management daemon, Telegram bot, admin panel, and Tauri 2 client for Linux, Windows, and Android.
*   Implemented a shared Rust connection-management core with protocol selection, failure recovery, attempt cancellation, and rollback of network changes. Integrated WireGuard, AmneziaWG, and VLESS+REALITY, VictoriaMetrics monitoring, and PostgreSQL LISTEN/NOTIFY synchronization.

##### [vpnhide](https://github.com/okhsunrog/vpnhide)

*   Built tools to hide an active VPN from selected Android apps: framework API filtering in system_server through LSPosed, Linux kernel modules, and a Zygisk module.
*   Connected a Kotlin/Jetpack Compose app to Rust components through JNI, implemented diagnostics and report export, and added native logic tests and QEMU scenarios for kernel modules.

##### POWER-Z KM003C: protocol reverse engineering and [km003c-rs](https://github.com/okhsunrog/km003c-rs)

*   Reverse-engineered the analyzer's undocumented USB protocol by correlating USB captures with official software exports, analyzing Mtools.exe in Ghidra, and examining decrypted device firmware. Reconstructed command and data formats, AES authentication, and encrypted log retrieval; validated implemented workflows on hardware. [Research materials](https://github.com/okhsunrog/km003c-protocol-research).
*   Built USB transaction analysis tools in Python/Polars and a Rust pcapng-to-Parquet converter. Documented the protocol, distinguishing capture-backed and hardware-validated findings from static analysis conclusions.
*   Turned the research into a typed async Rust library with nusb communication, measurement acquisition, and USB Power Delivery parsing, plus a CLI, egui GUI, and experimental Slint interface for desktop and Android. Published the library on crates.io and Python bindings through PyO3, with CI-built wheels.

---

#### Open Source Contributions

*   **ergot maintainer:** develop the embedded networking stack, including transport architecture, routing, addressing, and connection recovery. Fix memory-safety and concurrency issues, with regression tests and Miri checks. [My PRs](https://github.com/jamesmunns/ergot/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **Embassy contributor:** develop STM32 peripheral support, including G0/G4 async flash, comparators, timer configuration, and CORDIC. Fixed DMA hangs and reduced CORDIC call time from 35 to 22 cycles in an STM32G474 benchmark. [My PRs](https://github.com/embassy-rs/embassy/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **esp-hal and esp-pacs contributor:** added an ESP32-C5 CAN FD driver with blocking/async APIs and hardware tests, fixed USB Serial data loss and clock configuration issues, and added peripheral register definitions. [esp-hal](https://github.com/esp-rs/esp-hal/pulls?q=is%3Apr+author%3Aokhsunrog), [esp-pacs](https://github.com/esp-rs/esp-pacs/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **Slint contributor:** develop the Linux KMS backend and fix software rendering and input handling. Added big-endian RGB565 support for SPI displays and aligned dirty-region support. [My PRs](https://github.com/slint-ui/slint/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **Apache Arrow contributor:** work on dictionary-array handling; fixed dictionary-key overflow panics in concat/interleave, including nested types. [My PRs](https://github.com/apache/arrow-rs/pulls?q=is%3Apr+author%3Aokhsunrog).
*   **Tarantool open-source core contributor:** fixed a supervised failover bug that could make a rejoined replica become a second writable node. [Merged PR](https://github.com/tarantool/tarantool/pull/13000).
*   Publish libraries on crates.io, maintain AUR packages, and write technical articles. More projects are available on [GitHub](https://github.com/okhsunrog).

---

#### Technical Skills

*   **Rust:** async/await, unsafe, FFI, no_std/no_alloc, lifetimes, Send/Sync, atomics, declarative and procedural macros; Tokio, Serde, tracing, Criterion.
*   **Backend and data:** Axum, SQLx, PostgreSQL, SQLite, Redis, Apache Arrow, DataFusion; REST, gRPC/Protobuf, WebSockets, SSE, OpenAPI, PostgreSQL LISTEN/NOTIFY.
*   **Linux and networking:** systemd, ZFS, SSH, TUN, policy routing, nftables/iptables, WireGuard/AmneziaWG; server administration and application packaging.
*   **Monitoring:** VictoriaMetrics, Grafana, Prometheus, InfluxDB, Prometheus-compatible metrics, tracing.
*   **Embedded:** STM32, ESP32, nRF52, RP2040, AVR; Embassy, esp-hal, FreeRTOS, ESP-IDF; CAN/CAN FD, USB/USB PD, BLE, Ethernet, I2C, SPI, UART, RS-485.
*   **Desktop and Android:** Tauri 2, Slint, egui, GTK4; Kotlin, Jetpack Compose, JNI; nusb, PyO3.
*   **Debugging and validation:** GDB, strace, Valgrind, perf/flamegraph, Miri, hardware-in-the-loop tests, integration tests, pytest, Playwright; probe-rs, defmt, RTT, JTAG/SWD, Wireshark, usbmon, Ghidra.
*   **Build and infrastructure:** GitHub Actions, GitLab CI, Forgejo, Docker Compose, Ansible, cross-compilation, CMake, Make.
*   **Other languages and frontend:** C, Python, Bash, TypeScript/JavaScript, Vue 3, React, Pinia, Vite, Tailwind CSS; basic C++ and Ruby.
*   **Hardware:** circuit design, PCB layout, SMD/QFN assembly, logic analyzers, and oscilloscopes.

---

#### Education and Languages

*   **Education:** Incomplete higher education
*   **Languages:** Russian (native), English (C1, advanced) — fluent in reading and writing technical documentation, participating in discussions, and code review in English
