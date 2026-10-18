import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select.js";
import { cn } from "./utils.js";
const EMPTY_VALUE = "__erp_empty_select_value__";
function choicesFrom(children) {
    const choices = [];
    React.Children.forEach(children, (child) => {
        if (!React.isValidElement(child))
            return;
        if (child.type === "option") {
            const label = child.props.children;
            choices.push({ value: String(child.props.value ?? label ?? ""), label, disabled: Boolean(child.props.disabled) });
        }
        else if (child.type === React.Fragment || child.type === "optgroup") {
            choices.push(...choicesFrom(child.props.children));
        }
    });
    return choices;
}
/** A floating select that keeps the value/onChange contract of existing forms. */
export function FormSelect({ children, className, value, defaultValue, onChange, disabled, required, id, name, ...props }) {
    const choices = choicesFrom(children);
    const selected = value === undefined ? undefined : String(value);
    const displayed = selected === undefined ? undefined : choices.some((choice) => choice.value === selected) ? selected : choices[0]?.value ?? "";
    const emptyKey = choices.some((choice) => choice.value === EMPTY_VALUE) ? `${EMPTY_VALUE}_reserved` : EMPTY_VALUE;
    const encode = (next) => next === "" ? emptyKey : next;
    const decode = (next) => next === emptyKey ? "" : next;
    const change = (next) => {
        const decoded = decode(next);
        onChange?.({ target: { value: decoded, name }, currentTarget: { value: decoded, name } });
    };
    return _jsxs(Select, { value: displayed, defaultValue: selected === undefined ? String(defaultValue ?? choices[0]?.value ?? "") : undefined, onValueChange: change, disabled: disabled, required: required, name: name, children: [_jsx(SelectTrigger, { id: id, "aria-label": props["aria-label"], "aria-describedby": props["aria-describedby"], title: props.title, className: cn("h-11 w-full rounded-lg border-input bg-background px-4 text-sm shadow-sm focus:ring-2 focus:ring-ring/30", className), children: _jsx(SelectValue, { placeholder: choices.find((choice) => choice.value === "")?.label ?? "Select an option" }) }), _jsx(SelectContent, { children: choices.map((choice, index) => _jsx(SelectItem, { value: encode(choice.value), disabled: choice.disabled, children: choice.label }, `${choice.value}-${index}`)) })] });
}
