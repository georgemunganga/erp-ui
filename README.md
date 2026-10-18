# ERP UI

Shared React controls for Amizopower ERP modules. Core Branding owns tenant colors and font; these components consume the semantic Tailwind tokens provided by each ERP frontend.

Use a pinned Git commit in consuming applications. Tailwind v4 consumers must include this package in their source scan, for example `@source "../node_modules/@amizopower/erp-ui/dist";` from their CSS entrypoint. The package exports buttons, inputs, textareas, cards, Radix selects and switches, table primitives, a top bar frame, and a sidebar header. Procurement-specific filters, row actions, and navigation links remain in Procurement.
