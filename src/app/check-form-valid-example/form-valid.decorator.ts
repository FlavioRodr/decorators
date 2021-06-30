import { FormGroup } from "@angular/forms";

export function formValid(formGroupName: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {        
        const method = descriptor.value;

        descriptor.value = function () {
            debugger;
            if ((this[formGroupName] instanceof FormGroup) === false) return;
            const formGroup: FormGroup = this[formGroupName];

            if (formGroup?.invalid) return;
            method.apply(this, arguments);
        };

        return descriptor;
    }
}