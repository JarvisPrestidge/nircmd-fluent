/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Handles logging method entry and exit
 *
 * @Decorator
 * @returns {MethodDecorator}
 */
export const AnnotateMethodName = (): MethodDecorator => (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
): PropertyDescriptor => {
    // Reference to original method
    const method = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const prevMethodName = target.methodName;
        target.methodName = propertyKey;
        const result = method.apply(this, args);
        target.methodName = prevMethodName;
        return result;
    };

    return descriptor;
};
