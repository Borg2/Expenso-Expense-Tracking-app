# Expenso

A lightweight client-side expense tracker built with plain HTML, CSS and JavaScript. Stores data in the browser's `localStorage` so you can track monthly budgets and expenses without a server.

## Features

- Track expenses by name, category, price and date.
- Set a monthly budget and see used / available amounts with a visual progress bar.
- Add, list and delete expenses.
- Filter and sort transactions by category, date, price and name.
- Simple reports: monthly pie chart by category and a yearly budget vs spending line chart (powered by Chart.js).

## Short Description

Expenso is a minimal, client-side expense management app that helps you set monthly budgets, add expenses and visualize spending using charts. It is intended for local use (no backend) and persists data in the browser so you can quickly track and review personal expenses.

## Getting Started

1. Clone or download this repository to your machine.
2. Open `index.html` in a browser (Chrome, Edge, Firefox). No build step required.

Optional: to serve files over a local HTTP server (helpful for some browser features), run in the project folder:

```
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Usage

- Use the left menu to switch between My Budget, Transactions and Track Spending.
- Set a monthly budget using the month picker and the budget input field.
- Add new expenses on the Add New Expense form — the app prevents adding expenses that would immediately exceed the selected month's budget.
- View or delete expenses in the Transactions page; sort and filter using the controls.
- Use the Reports page to view category breakdowns (pie chart) and a yearly Budget vs Spending chart.

## File Structure

- `index.html` — main UI and static markup.
- `script.js` — application logic, localStorage handling, charts and UI interactions.
- `style.css` — styles for the UI.
- `data.json` — (present in repo) placeholder for structured data if needed.

## Data Storage

All data (expenses and monthly budgets) are stored in the browser's `localStorage` under the keys `expenses` and `monthlyBudgets` respectively. No remote data is sent anywhere.

## Limitations & Notes

- This is a client-side demo app intended for local/personal use. Data stored in `localStorage` may be cleared by the browser.
- There is no authentication, sync, or backup. Consider exporting data manually if needed.

## Contributing

Feel free to open issues or submit pull requests. For small improvements, styling tweaks, or translations, open a PR with a clear description of the change.

## License

Include a license file if you want to publish this repository publicly (e.g., `MIT`).
