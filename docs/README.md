# 🔗 BLAGO Core — Decentralized Need-Based Economic System

This repository contains the smart contracts, Telegram bot, backend services, and AI engine powering the **BLAGO Network**, built on the TON blockchain.

---

## 🧩 Overview

BLAGO is a decentralized infrastructure where:
- Users create NEEDs (requests like "MacBook Pro")
- A Telegram bot helps define the parameters and price
- NEEDs are turned into NFTs
- xBLAGO tokens are issued based on the NEED’s cost (in BTC terms)
- xBLAGO tokens are listed on a DEX
- When purchased, real assets are transferred, and the NFT goes to the buyer

---

## ⚙️ Components

- `contracts/` — Smart contracts for xBLAGO and NFT
- `bot/` — Telegram bot to manage user interaction
- `backend/oracle/` — Price oracle for BTC/RUB
- `web/` — Dashboard for monitoring status
- `ai/` — AI logic for classifying needs

---

## 🚀 Quickstart

```bash
pip install -r requirements.txt
python bot/bot_logic.py
python web/app.py
