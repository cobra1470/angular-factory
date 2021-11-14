import { Provider, Type } from '@angular/core';

export function createObjectMock<T>(type: Type<T>): jest.Mocked<T> {
  const target: any = {};
  target.propSpies = {} as { [key: string]: jest.SpyInstance<any, []> };

  function installProtoMethods(proto: any) {
    if (proto === null || proto === Object.prototype) {
      return;
    }

    for (const key of Object.getOwnPropertyNames(proto)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const descriptor = Object.getOwnPropertyDescriptor(proto, key)!;

      if (typeof descriptor.value === 'function' && key !== 'constructor') {
        target[key] = jest.fn();
      } else if (typeof descriptor.get === 'function' && key !== 'constructor') {
        Object.defineProperty(target, key, descriptor);
        target.propSpies[key] = jest.spyOn(target, key, 'get');
      }
    }

    installProtoMethods(Object.getPrototypeOf(proto));
  }

  installProtoMethods(type.prototype);

  return target;
}

export function provideMockObject<T>(type: Type<T>): Provider {
  return {
    provide: type,
    useFactory: () => createObjectMock(type),
  };
}
