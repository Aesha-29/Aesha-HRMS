
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model ExEmployee
 * 
 */
export type ExEmployee = $Result.DefaultSelection<Prisma.$ExEmployeePayload>
/**
 * Model Manager
 * 
 */
export type Manager = $Result.DefaultSelection<Prisma.$ManagerPayload>
/**
 * Model Offboarding
 * 
 */
export type Offboarding = $Result.DefaultSelection<Prisma.$OffboardingPayload>
/**
 * Model ExitChecklist
 * 
 */
export type ExitChecklist = $Result.DefaultSelection<Prisma.$ExitChecklistPayload>
/**
 * Model Finance
 * 
 */
export type Finance = $Result.DefaultSelection<Prisma.$FinancePayload>
/**
 * Model Onboarding
 * 
 */
export type Onboarding = $Result.DefaultSelection<Prisma.$OnboardingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Employees
 * const employees = await prisma.employee.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exEmployee`: Exposes CRUD operations for the **ExEmployee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExEmployees
    * const exEmployees = await prisma.exEmployee.findMany()
    * ```
    */
  get exEmployee(): Prisma.ExEmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.manager`: Exposes CRUD operations for the **Manager** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Managers
    * const managers = await prisma.manager.findMany()
    * ```
    */
  get manager(): Prisma.ManagerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.offboarding`: Exposes CRUD operations for the **Offboarding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Offboardings
    * const offboardings = await prisma.offboarding.findMany()
    * ```
    */
  get offboarding(): Prisma.OffboardingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exitChecklist`: Exposes CRUD operations for the **ExitChecklist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExitChecklists
    * const exitChecklists = await prisma.exitChecklist.findMany()
    * ```
    */
  get exitChecklist(): Prisma.ExitChecklistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.finance`: Exposes CRUD operations for the **Finance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Finances
    * const finances = await prisma.finance.findMany()
    * ```
    */
  get finance(): Prisma.FinanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.onboarding`: Exposes CRUD operations for the **Onboarding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Onboardings
    * const onboardings = await prisma.onboarding.findMany()
    * ```
    */
  get onboarding(): Prisma.OnboardingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Employee: 'Employee',
    ExEmployee: 'ExEmployee',
    Manager: 'Manager',
    Offboarding: 'Offboarding',
    ExitChecklist: 'ExitChecklist',
    Finance: 'Finance',
    Onboarding: 'Onboarding'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "employee" | "exEmployee" | "manager" | "offboarding" | "exitChecklist" | "finance" | "onboarding"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      ExEmployee: {
        payload: Prisma.$ExEmployeePayload<ExtArgs>
        fields: Prisma.ExEmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExEmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExEmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExEmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExEmployeePayload>
          }
          findFirst: {
            args: Prisma.ExEmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExEmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExEmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExEmployeePayload>
          }
          findMany: {
            args: Prisma.ExEmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExEmployeePayload>[]
          }
          create: {
            args: Prisma.ExEmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExEmployeePayload>
          }
          createMany: {
            args: Prisma.ExEmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExEmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExEmployeePayload>
          }
          update: {
            args: Prisma.ExEmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExEmployeePayload>
          }
          deleteMany: {
            args: Prisma.ExEmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExEmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExEmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExEmployeePayload>
          }
          aggregate: {
            args: Prisma.ExEmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExEmployee>
          }
          groupBy: {
            args: Prisma.ExEmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExEmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExEmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<ExEmployeeCountAggregateOutputType> | number
          }
        }
      }
      Manager: {
        payload: Prisma.$ManagerPayload<ExtArgs>
        fields: Prisma.ManagerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManagerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManagerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          findFirst: {
            args: Prisma.ManagerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManagerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          findMany: {
            args: Prisma.ManagerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>[]
          }
          create: {
            args: Prisma.ManagerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          createMany: {
            args: Prisma.ManagerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ManagerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          update: {
            args: Prisma.ManagerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          deleteMany: {
            args: Prisma.ManagerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManagerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ManagerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          aggregate: {
            args: Prisma.ManagerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManager>
          }
          groupBy: {
            args: Prisma.ManagerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManagerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManagerCountArgs<ExtArgs>
            result: $Utils.Optional<ManagerCountAggregateOutputType> | number
          }
        }
      }
      Offboarding: {
        payload: Prisma.$OffboardingPayload<ExtArgs>
        fields: Prisma.OffboardingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OffboardingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffboardingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OffboardingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffboardingPayload>
          }
          findFirst: {
            args: Prisma.OffboardingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffboardingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OffboardingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffboardingPayload>
          }
          findMany: {
            args: Prisma.OffboardingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffboardingPayload>[]
          }
          create: {
            args: Prisma.OffboardingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffboardingPayload>
          }
          createMany: {
            args: Prisma.OffboardingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OffboardingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffboardingPayload>
          }
          update: {
            args: Prisma.OffboardingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffboardingPayload>
          }
          deleteMany: {
            args: Prisma.OffboardingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OffboardingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OffboardingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffboardingPayload>
          }
          aggregate: {
            args: Prisma.OffboardingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOffboarding>
          }
          groupBy: {
            args: Prisma.OffboardingGroupByArgs<ExtArgs>
            result: $Utils.Optional<OffboardingGroupByOutputType>[]
          }
          count: {
            args: Prisma.OffboardingCountArgs<ExtArgs>
            result: $Utils.Optional<OffboardingCountAggregateOutputType> | number
          }
        }
      }
      ExitChecklist: {
        payload: Prisma.$ExitChecklistPayload<ExtArgs>
        fields: Prisma.ExitChecklistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExitChecklistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExitChecklistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExitChecklistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExitChecklistPayload>
          }
          findFirst: {
            args: Prisma.ExitChecklistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExitChecklistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExitChecklistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExitChecklistPayload>
          }
          findMany: {
            args: Prisma.ExitChecklistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExitChecklistPayload>[]
          }
          create: {
            args: Prisma.ExitChecklistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExitChecklistPayload>
          }
          createMany: {
            args: Prisma.ExitChecklistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExitChecklistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExitChecklistPayload>
          }
          update: {
            args: Prisma.ExitChecklistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExitChecklistPayload>
          }
          deleteMany: {
            args: Prisma.ExitChecklistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExitChecklistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExitChecklistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExitChecklistPayload>
          }
          aggregate: {
            args: Prisma.ExitChecklistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExitChecklist>
          }
          groupBy: {
            args: Prisma.ExitChecklistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExitChecklistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExitChecklistCountArgs<ExtArgs>
            result: $Utils.Optional<ExitChecklistCountAggregateOutputType> | number
          }
        }
      }
      Finance: {
        payload: Prisma.$FinancePayload<ExtArgs>
        fields: Prisma.FinanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          findFirst: {
            args: Prisma.FinanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          findMany: {
            args: Prisma.FinanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>[]
          }
          create: {
            args: Prisma.FinanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          createMany: {
            args: Prisma.FinanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FinanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          update: {
            args: Prisma.FinanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          deleteMany: {
            args: Prisma.FinanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FinanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          aggregate: {
            args: Prisma.FinanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinance>
          }
          groupBy: {
            args: Prisma.FinanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinanceCountArgs<ExtArgs>
            result: $Utils.Optional<FinanceCountAggregateOutputType> | number
          }
        }
      }
      Onboarding: {
        payload: Prisma.$OnboardingPayload<ExtArgs>
        fields: Prisma.OnboardingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OnboardingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OnboardingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingPayload>
          }
          findFirst: {
            args: Prisma.OnboardingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OnboardingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingPayload>
          }
          findMany: {
            args: Prisma.OnboardingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingPayload>[]
          }
          create: {
            args: Prisma.OnboardingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingPayload>
          }
          createMany: {
            args: Prisma.OnboardingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OnboardingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingPayload>
          }
          update: {
            args: Prisma.OnboardingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingPayload>
          }
          deleteMany: {
            args: Prisma.OnboardingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OnboardingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OnboardingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingPayload>
          }
          aggregate: {
            args: Prisma.OnboardingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOnboarding>
          }
          groupBy: {
            args: Prisma.OnboardingGroupByArgs<ExtArgs>
            result: $Utils.Optional<OnboardingGroupByOutputType>[]
          }
          count: {
            args: Prisma.OnboardingCountArgs<ExtArgs>
            result: $Utils.Optional<OnboardingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    employee?: EmployeeOmit
    exEmployee?: ExEmployeeOmit
    manager?: ManagerOmit
    offboarding?: OffboardingOmit
    exitChecklist?: ExitChecklistOmit
    finance?: FinanceOmit
    onboarding?: OnboardingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    offboardings: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offboardings?: boolean | EmployeeCountOutputTypeCountOffboardingsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountOffboardingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OffboardingWhereInput
  }


  /**
   * Count Type ManagerCountOutputType
   */

  export type ManagerCountOutputType = {
    employees: number
  }

  export type ManagerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | ManagerCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes
  /**
   * ManagerCountOutputType without action
   */
  export type ManagerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerCountOutputType
     */
    select?: ManagerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ManagerCountOutputType without action
   */
  export type ManagerCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Count Type OffboardingCountOutputType
   */

  export type OffboardingCountOutputType = {
    checklists: number
  }

  export type OffboardingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checklists?: boolean | OffboardingCountOutputTypeCountChecklistsArgs
  }

  // Custom InputTypes
  /**
   * OffboardingCountOutputType without action
   */
  export type OffboardingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffboardingCountOutputType
     */
    select?: OffboardingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OffboardingCountOutputType without action
   */
  export type OffboardingCountOutputTypeCountChecklistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExitChecklistWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    id: number | null
    probationDays: number | null
    managerId: number | null
    retirementAge: number | null
    familyMembers: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    id: number | null
    probationDays: number | null
    managerId: number | null
    retirementAge: number | null
    familyMembers: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: number | null
    employeeId: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    mobile: string | null
    dob: Date | null
    bloodGroup: string | null
    gender: string | null
    cvUrl: string | null
    idProofUrl: string | null
    welcomeSent: boolean | null
    designation: string | null
    branch: string | null
    department: string | null
    subDepartment: string | null
    grade: string | null
    employeeType: string | null
    zone: string | null
    level: string | null
    shift: string | null
    email: string | null
    doj: Date | null
    probationDays: number | null
    trainingCompletionDate: Date | null
    permanentDate: Date | null
    sisterCompany: string | null
    location: string | null
    managerId: number | null
    insuranceNo: string | null
    insuranceCompany: string | null
    insuranceExpiry: Date | null
    retirementAge: number | null
    jobDescription: string | null
    whatsapp: string | null
    altPhone: string | null
    emergencyNumber: string | null
    companyMobile: string | null
    currentAddress: string | null
    permanentAddress: string | null
    personalEmail: string | null
    socialLinks: string | null
    skills: string | null
    hobbies: string | null
    languages: string | null
    specialSkills: string | null
    maritalStatus: string | null
    familyMembers: number | null
    nationality: string | null
    bankHolder: string | null
    bankName: string | null
    bankBranch: string | null
    accountType: string | null
    accountNo: string | null
    ifscCode: string | null
    crnNo: string | null
    esicNo: string | null
    panNo: string | null
    pfNo: string | null
    uanNo: string | null
    micrNo: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: number | null
    employeeId: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    mobile: string | null
    dob: Date | null
    bloodGroup: string | null
    gender: string | null
    cvUrl: string | null
    idProofUrl: string | null
    welcomeSent: boolean | null
    designation: string | null
    branch: string | null
    department: string | null
    subDepartment: string | null
    grade: string | null
    employeeType: string | null
    zone: string | null
    level: string | null
    shift: string | null
    email: string | null
    doj: Date | null
    probationDays: number | null
    trainingCompletionDate: Date | null
    permanentDate: Date | null
    sisterCompany: string | null
    location: string | null
    managerId: number | null
    insuranceNo: string | null
    insuranceCompany: string | null
    insuranceExpiry: Date | null
    retirementAge: number | null
    jobDescription: string | null
    whatsapp: string | null
    altPhone: string | null
    emergencyNumber: string | null
    companyMobile: string | null
    currentAddress: string | null
    permanentAddress: string | null
    personalEmail: string | null
    socialLinks: string | null
    skills: string | null
    hobbies: string | null
    languages: string | null
    specialSkills: string | null
    maritalStatus: string | null
    familyMembers: number | null
    nationality: string | null
    bankHolder: string | null
    bankName: string | null
    bankBranch: string | null
    accountType: string | null
    accountNo: string | null
    ifscCode: string | null
    crnNo: string | null
    esicNo: string | null
    panNo: string | null
    pfNo: string | null
    uanNo: string | null
    micrNo: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    employeeId: number
    firstName: number
    middleName: number
    lastName: number
    mobile: number
    dob: number
    bloodGroup: number
    gender: number
    cvUrl: number
    idProofUrl: number
    welcomeSent: number
    designation: number
    branch: number
    department: number
    subDepartment: number
    grade: number
    employeeType: number
    zone: number
    level: number
    shift: number
    email: number
    doj: number
    probationDays: number
    trainingCompletionDate: number
    permanentDate: number
    sisterCompany: number
    location: number
    managerId: number
    insuranceNo: number
    insuranceCompany: number
    insuranceExpiry: number
    retirementAge: number
    jobDescription: number
    whatsapp: number
    altPhone: number
    emergencyNumber: number
    companyMobile: number
    currentAddress: number
    permanentAddress: number
    personalEmail: number
    socialLinks: number
    skills: number
    hobbies: number
    languages: number
    specialSkills: number
    maritalStatus: number
    familyMembers: number
    nationality: number
    bankHolder: number
    bankName: number
    bankBranch: number
    accountType: number
    accountNo: number
    ifscCode: number
    crnNo: number
    esicNo: number
    panNo: number
    pfNo: number
    uanNo: number
    micrNo: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    id?: true
    probationDays?: true
    managerId?: true
    retirementAge?: true
    familyMembers?: true
  }

  export type EmployeeSumAggregateInputType = {
    id?: true
    probationDays?: true
    managerId?: true
    retirementAge?: true
    familyMembers?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    employeeId?: true
    firstName?: true
    middleName?: true
    lastName?: true
    mobile?: true
    dob?: true
    bloodGroup?: true
    gender?: true
    cvUrl?: true
    idProofUrl?: true
    welcomeSent?: true
    designation?: true
    branch?: true
    department?: true
    subDepartment?: true
    grade?: true
    employeeType?: true
    zone?: true
    level?: true
    shift?: true
    email?: true
    doj?: true
    probationDays?: true
    trainingCompletionDate?: true
    permanentDate?: true
    sisterCompany?: true
    location?: true
    managerId?: true
    insuranceNo?: true
    insuranceCompany?: true
    insuranceExpiry?: true
    retirementAge?: true
    jobDescription?: true
    whatsapp?: true
    altPhone?: true
    emergencyNumber?: true
    companyMobile?: true
    currentAddress?: true
    permanentAddress?: true
    personalEmail?: true
    socialLinks?: true
    skills?: true
    hobbies?: true
    languages?: true
    specialSkills?: true
    maritalStatus?: true
    familyMembers?: true
    nationality?: true
    bankHolder?: true
    bankName?: true
    bankBranch?: true
    accountType?: true
    accountNo?: true
    ifscCode?: true
    crnNo?: true
    esicNo?: true
    panNo?: true
    pfNo?: true
    uanNo?: true
    micrNo?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    employeeId?: true
    firstName?: true
    middleName?: true
    lastName?: true
    mobile?: true
    dob?: true
    bloodGroup?: true
    gender?: true
    cvUrl?: true
    idProofUrl?: true
    welcomeSent?: true
    designation?: true
    branch?: true
    department?: true
    subDepartment?: true
    grade?: true
    employeeType?: true
    zone?: true
    level?: true
    shift?: true
    email?: true
    doj?: true
    probationDays?: true
    trainingCompletionDate?: true
    permanentDate?: true
    sisterCompany?: true
    location?: true
    managerId?: true
    insuranceNo?: true
    insuranceCompany?: true
    insuranceExpiry?: true
    retirementAge?: true
    jobDescription?: true
    whatsapp?: true
    altPhone?: true
    emergencyNumber?: true
    companyMobile?: true
    currentAddress?: true
    permanentAddress?: true
    personalEmail?: true
    socialLinks?: true
    skills?: true
    hobbies?: true
    languages?: true
    specialSkills?: true
    maritalStatus?: true
    familyMembers?: true
    nationality?: true
    bankHolder?: true
    bankName?: true
    bankBranch?: true
    accountType?: true
    accountNo?: true
    ifscCode?: true
    crnNo?: true
    esicNo?: true
    panNo?: true
    pfNo?: true
    uanNo?: true
    micrNo?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    employeeId?: true
    firstName?: true
    middleName?: true
    lastName?: true
    mobile?: true
    dob?: true
    bloodGroup?: true
    gender?: true
    cvUrl?: true
    idProofUrl?: true
    welcomeSent?: true
    designation?: true
    branch?: true
    department?: true
    subDepartment?: true
    grade?: true
    employeeType?: true
    zone?: true
    level?: true
    shift?: true
    email?: true
    doj?: true
    probationDays?: true
    trainingCompletionDate?: true
    permanentDate?: true
    sisterCompany?: true
    location?: true
    managerId?: true
    insuranceNo?: true
    insuranceCompany?: true
    insuranceExpiry?: true
    retirementAge?: true
    jobDescription?: true
    whatsapp?: true
    altPhone?: true
    emergencyNumber?: true
    companyMobile?: true
    currentAddress?: true
    permanentAddress?: true
    personalEmail?: true
    socialLinks?: true
    skills?: true
    hobbies?: true
    languages?: true
    specialSkills?: true
    maritalStatus?: true
    familyMembers?: true
    nationality?: true
    bankHolder?: true
    bankName?: true
    bankBranch?: true
    accountType?: true
    accountNo?: true
    ifscCode?: true
    crnNo?: true
    esicNo?: true
    panNo?: true
    pfNo?: true
    uanNo?: true
    micrNo?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: number
    employeeId: string
    firstName: string | null
    middleName: string | null
    lastName: string | null
    mobile: string | null
    dob: Date | null
    bloodGroup: string | null
    gender: string | null
    cvUrl: string | null
    idProofUrl: string | null
    welcomeSent: boolean
    designation: string | null
    branch: string | null
    department: string | null
    subDepartment: string | null
    grade: string | null
    employeeType: string | null
    zone: string | null
    level: string | null
    shift: string | null
    email: string | null
    doj: Date | null
    probationDays: number | null
    trainingCompletionDate: Date | null
    permanentDate: Date | null
    sisterCompany: string | null
    location: string | null
    managerId: number | null
    insuranceNo: string | null
    insuranceCompany: string | null
    insuranceExpiry: Date | null
    retirementAge: number | null
    jobDescription: string | null
    whatsapp: string | null
    altPhone: string | null
    emergencyNumber: string | null
    companyMobile: string | null
    currentAddress: string | null
    permanentAddress: string | null
    personalEmail: string | null
    socialLinks: string | null
    skills: string | null
    hobbies: string | null
    languages: string | null
    specialSkills: string | null
    maritalStatus: string | null
    familyMembers: number | null
    nationality: string | null
    bankHolder: string | null
    bankName: string | null
    bankBranch: string | null
    accountType: string | null
    accountNo: string | null
    ifscCode: string | null
    crnNo: string | null
    esicNo: string | null
    panNo: string | null
    pfNo: string | null
    uanNo: string | null
    micrNo: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    mobile?: boolean
    dob?: boolean
    bloodGroup?: boolean
    gender?: boolean
    cvUrl?: boolean
    idProofUrl?: boolean
    welcomeSent?: boolean
    designation?: boolean
    branch?: boolean
    department?: boolean
    subDepartment?: boolean
    grade?: boolean
    employeeType?: boolean
    zone?: boolean
    level?: boolean
    shift?: boolean
    email?: boolean
    doj?: boolean
    probationDays?: boolean
    trainingCompletionDate?: boolean
    permanentDate?: boolean
    sisterCompany?: boolean
    location?: boolean
    managerId?: boolean
    insuranceNo?: boolean
    insuranceCompany?: boolean
    insuranceExpiry?: boolean
    retirementAge?: boolean
    jobDescription?: boolean
    whatsapp?: boolean
    altPhone?: boolean
    emergencyNumber?: boolean
    companyMobile?: boolean
    currentAddress?: boolean
    permanentAddress?: boolean
    personalEmail?: boolean
    socialLinks?: boolean
    skills?: boolean
    hobbies?: boolean
    languages?: boolean
    specialSkills?: boolean
    maritalStatus?: boolean
    familyMembers?: boolean
    nationality?: boolean
    bankHolder?: boolean
    bankName?: boolean
    bankBranch?: boolean
    accountType?: boolean
    accountNo?: boolean
    ifscCode?: boolean
    crnNo?: boolean
    esicNo?: boolean
    panNo?: boolean
    pfNo?: boolean
    uanNo?: boolean
    micrNo?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    manager?: boolean | Employee$managerArgs<ExtArgs>
    offboardings?: boolean | Employee$offboardingsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>



  export type EmployeeSelectScalar = {
    id?: boolean
    employeeId?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    mobile?: boolean
    dob?: boolean
    bloodGroup?: boolean
    gender?: boolean
    cvUrl?: boolean
    idProofUrl?: boolean
    welcomeSent?: boolean
    designation?: boolean
    branch?: boolean
    department?: boolean
    subDepartment?: boolean
    grade?: boolean
    employeeType?: boolean
    zone?: boolean
    level?: boolean
    shift?: boolean
    email?: boolean
    doj?: boolean
    probationDays?: boolean
    trainingCompletionDate?: boolean
    permanentDate?: boolean
    sisterCompany?: boolean
    location?: boolean
    managerId?: boolean
    insuranceNo?: boolean
    insuranceCompany?: boolean
    insuranceExpiry?: boolean
    retirementAge?: boolean
    jobDescription?: boolean
    whatsapp?: boolean
    altPhone?: boolean
    emergencyNumber?: boolean
    companyMobile?: boolean
    currentAddress?: boolean
    permanentAddress?: boolean
    personalEmail?: boolean
    socialLinks?: boolean
    skills?: boolean
    hobbies?: boolean
    languages?: boolean
    specialSkills?: boolean
    maritalStatus?: boolean
    familyMembers?: boolean
    nationality?: boolean
    bankHolder?: boolean
    bankName?: boolean
    bankBranch?: boolean
    accountType?: boolean
    accountNo?: boolean
    ifscCode?: boolean
    crnNo?: boolean
    esicNo?: boolean
    panNo?: boolean
    pfNo?: boolean
    uanNo?: boolean
    micrNo?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "firstName" | "middleName" | "lastName" | "mobile" | "dob" | "bloodGroup" | "gender" | "cvUrl" | "idProofUrl" | "welcomeSent" | "designation" | "branch" | "department" | "subDepartment" | "grade" | "employeeType" | "zone" | "level" | "shift" | "email" | "doj" | "probationDays" | "trainingCompletionDate" | "permanentDate" | "sisterCompany" | "location" | "managerId" | "insuranceNo" | "insuranceCompany" | "insuranceExpiry" | "retirementAge" | "jobDescription" | "whatsapp" | "altPhone" | "emergencyNumber" | "companyMobile" | "currentAddress" | "permanentAddress" | "personalEmail" | "socialLinks" | "skills" | "hobbies" | "languages" | "specialSkills" | "maritalStatus" | "familyMembers" | "nationality" | "bankHolder" | "bankName" | "bankBranch" | "accountType" | "accountNo" | "ifscCode" | "crnNo" | "esicNo" | "panNo" | "pfNo" | "uanNo" | "micrNo" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | Employee$managerArgs<ExtArgs>
    offboardings?: boolean | Employee$offboardingsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      manager: Prisma.$ManagerPayload<ExtArgs> | null
      offboardings: Prisma.$OffboardingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employeeId: string
      firstName: string | null
      middleName: string | null
      lastName: string | null
      mobile: string | null
      dob: Date | null
      bloodGroup: string | null
      gender: string | null
      cvUrl: string | null
      idProofUrl: string | null
      welcomeSent: boolean
      designation: string | null
      branch: string | null
      department: string | null
      subDepartment: string | null
      grade: string | null
      employeeType: string | null
      zone: string | null
      level: string | null
      shift: string | null
      email: string | null
      doj: Date | null
      probationDays: number | null
      trainingCompletionDate: Date | null
      permanentDate: Date | null
      sisterCompany: string | null
      location: string | null
      managerId: number | null
      insuranceNo: string | null
      insuranceCompany: string | null
      insuranceExpiry: Date | null
      retirementAge: number | null
      jobDescription: string | null
      whatsapp: string | null
      altPhone: string | null
      emergencyNumber: string | null
      companyMobile: string | null
      currentAddress: string | null
      permanentAddress: string | null
      personalEmail: string | null
      socialLinks: string | null
      skills: string | null
      hobbies: string | null
      languages: string | null
      specialSkills: string | null
      maritalStatus: string | null
      familyMembers: number | null
      nationality: string | null
      bankHolder: string | null
      bankName: string | null
      bankBranch: string | null
      accountType: string | null
      accountNo: string | null
      ifscCode: string | null
      crnNo: string | null
      esicNo: string | null
      panNo: string | null
      pfNo: string | null
      uanNo: string | null
      micrNo: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    manager<T extends Employee$managerArgs<ExtArgs> = {}>(args?: Subset<T, Employee$managerArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    offboardings<T extends Employee$offboardingsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$offboardingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OffboardingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'Int'>
    readonly employeeId: FieldRef<"Employee", 'String'>
    readonly firstName: FieldRef<"Employee", 'String'>
    readonly middleName: FieldRef<"Employee", 'String'>
    readonly lastName: FieldRef<"Employee", 'String'>
    readonly mobile: FieldRef<"Employee", 'String'>
    readonly dob: FieldRef<"Employee", 'DateTime'>
    readonly bloodGroup: FieldRef<"Employee", 'String'>
    readonly gender: FieldRef<"Employee", 'String'>
    readonly cvUrl: FieldRef<"Employee", 'String'>
    readonly idProofUrl: FieldRef<"Employee", 'String'>
    readonly welcomeSent: FieldRef<"Employee", 'Boolean'>
    readonly designation: FieldRef<"Employee", 'String'>
    readonly branch: FieldRef<"Employee", 'String'>
    readonly department: FieldRef<"Employee", 'String'>
    readonly subDepartment: FieldRef<"Employee", 'String'>
    readonly grade: FieldRef<"Employee", 'String'>
    readonly employeeType: FieldRef<"Employee", 'String'>
    readonly zone: FieldRef<"Employee", 'String'>
    readonly level: FieldRef<"Employee", 'String'>
    readonly shift: FieldRef<"Employee", 'String'>
    readonly email: FieldRef<"Employee", 'String'>
    readonly doj: FieldRef<"Employee", 'DateTime'>
    readonly probationDays: FieldRef<"Employee", 'Int'>
    readonly trainingCompletionDate: FieldRef<"Employee", 'DateTime'>
    readonly permanentDate: FieldRef<"Employee", 'DateTime'>
    readonly sisterCompany: FieldRef<"Employee", 'String'>
    readonly location: FieldRef<"Employee", 'String'>
    readonly managerId: FieldRef<"Employee", 'Int'>
    readonly insuranceNo: FieldRef<"Employee", 'String'>
    readonly insuranceCompany: FieldRef<"Employee", 'String'>
    readonly insuranceExpiry: FieldRef<"Employee", 'DateTime'>
    readonly retirementAge: FieldRef<"Employee", 'Int'>
    readonly jobDescription: FieldRef<"Employee", 'String'>
    readonly whatsapp: FieldRef<"Employee", 'String'>
    readonly altPhone: FieldRef<"Employee", 'String'>
    readonly emergencyNumber: FieldRef<"Employee", 'String'>
    readonly companyMobile: FieldRef<"Employee", 'String'>
    readonly currentAddress: FieldRef<"Employee", 'String'>
    readonly permanentAddress: FieldRef<"Employee", 'String'>
    readonly personalEmail: FieldRef<"Employee", 'String'>
    readonly socialLinks: FieldRef<"Employee", 'String'>
    readonly skills: FieldRef<"Employee", 'String'>
    readonly hobbies: FieldRef<"Employee", 'String'>
    readonly languages: FieldRef<"Employee", 'String'>
    readonly specialSkills: FieldRef<"Employee", 'String'>
    readonly maritalStatus: FieldRef<"Employee", 'String'>
    readonly familyMembers: FieldRef<"Employee", 'Int'>
    readonly nationality: FieldRef<"Employee", 'String'>
    readonly bankHolder: FieldRef<"Employee", 'String'>
    readonly bankName: FieldRef<"Employee", 'String'>
    readonly bankBranch: FieldRef<"Employee", 'String'>
    readonly accountType: FieldRef<"Employee", 'String'>
    readonly accountNo: FieldRef<"Employee", 'String'>
    readonly ifscCode: FieldRef<"Employee", 'String'>
    readonly crnNo: FieldRef<"Employee", 'String'>
    readonly esicNo: FieldRef<"Employee", 'String'>
    readonly panNo: FieldRef<"Employee", 'String'>
    readonly pfNo: FieldRef<"Employee", 'String'>
    readonly uanNo: FieldRef<"Employee", 'String'>
    readonly micrNo: FieldRef<"Employee", 'String'>
    readonly status: FieldRef<"Employee", 'String'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.manager
   */
  export type Employee$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    where?: ManagerWhereInput
  }

  /**
   * Employee.offboardings
   */
  export type Employee$offboardingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offboarding
     */
    select?: OffboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offboarding
     */
    omit?: OffboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffboardingInclude<ExtArgs> | null
    where?: OffboardingWhereInput
    orderBy?: OffboardingOrderByWithRelationInput | OffboardingOrderByWithRelationInput[]
    cursor?: OffboardingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OffboardingScalarFieldEnum | OffboardingScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model ExEmployee
   */

  export type AggregateExEmployee = {
    _count: ExEmployeeCountAggregateOutputType | null
    _avg: ExEmployeeAvgAggregateOutputType | null
    _sum: ExEmployeeSumAggregateOutputType | null
    _min: ExEmployeeMinAggregateOutputType | null
    _max: ExEmployeeMaxAggregateOutputType | null
  }

  export type ExEmployeeAvgAggregateOutputType = {
    id: number | null
  }

  export type ExEmployeeSumAggregateOutputType = {
    id: number | null
  }

  export type ExEmployeeMinAggregateOutputType = {
    id: number | null
    employeeId: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    email: string | null
    mobile: string | null
    designation: string | null
    department: string | null
    branch: string | null
    exitDate: Date | null
    reason: string | null
    eligibleForRehire: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExEmployeeMaxAggregateOutputType = {
    id: number | null
    employeeId: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    email: string | null
    mobile: string | null
    designation: string | null
    department: string | null
    branch: string | null
    exitDate: Date | null
    reason: string | null
    eligibleForRehire: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExEmployeeCountAggregateOutputType = {
    id: number
    employeeId: number
    firstName: number
    middleName: number
    lastName: number
    email: number
    mobile: number
    designation: number
    department: number
    branch: number
    exitDate: number
    reason: number
    eligibleForRehire: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExEmployeeAvgAggregateInputType = {
    id?: true
  }

  export type ExEmployeeSumAggregateInputType = {
    id?: true
  }

  export type ExEmployeeMinAggregateInputType = {
    id?: true
    employeeId?: true
    firstName?: true
    middleName?: true
    lastName?: true
    email?: true
    mobile?: true
    designation?: true
    department?: true
    branch?: true
    exitDate?: true
    reason?: true
    eligibleForRehire?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExEmployeeMaxAggregateInputType = {
    id?: true
    employeeId?: true
    firstName?: true
    middleName?: true
    lastName?: true
    email?: true
    mobile?: true
    designation?: true
    department?: true
    branch?: true
    exitDate?: true
    reason?: true
    eligibleForRehire?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExEmployeeCountAggregateInputType = {
    id?: true
    employeeId?: true
    firstName?: true
    middleName?: true
    lastName?: true
    email?: true
    mobile?: true
    designation?: true
    department?: true
    branch?: true
    exitDate?: true
    reason?: true
    eligibleForRehire?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExEmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExEmployee to aggregate.
     */
    where?: ExEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExEmployees to fetch.
     */
    orderBy?: ExEmployeeOrderByWithRelationInput | ExEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExEmployees
    **/
    _count?: true | ExEmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExEmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExEmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExEmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExEmployeeMaxAggregateInputType
  }

  export type GetExEmployeeAggregateType<T extends ExEmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateExEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExEmployee[P]>
      : GetScalarType<T[P], AggregateExEmployee[P]>
  }




  export type ExEmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExEmployeeWhereInput
    orderBy?: ExEmployeeOrderByWithAggregationInput | ExEmployeeOrderByWithAggregationInput[]
    by: ExEmployeeScalarFieldEnum[] | ExEmployeeScalarFieldEnum
    having?: ExEmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExEmployeeCountAggregateInputType | true
    _avg?: ExEmployeeAvgAggregateInputType
    _sum?: ExEmployeeSumAggregateInputType
    _min?: ExEmployeeMinAggregateInputType
    _max?: ExEmployeeMaxAggregateInputType
  }

  export type ExEmployeeGroupByOutputType = {
    id: number
    employeeId: string
    firstName: string | null
    middleName: string | null
    lastName: string | null
    email: string | null
    mobile: string | null
    designation: string | null
    department: string | null
    branch: string | null
    exitDate: Date | null
    reason: string | null
    eligibleForRehire: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: ExEmployeeCountAggregateOutputType | null
    _avg: ExEmployeeAvgAggregateOutputType | null
    _sum: ExEmployeeSumAggregateOutputType | null
    _min: ExEmployeeMinAggregateOutputType | null
    _max: ExEmployeeMaxAggregateOutputType | null
  }

  type GetExEmployeeGroupByPayload<T extends ExEmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExEmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExEmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExEmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], ExEmployeeGroupByOutputType[P]>
        }
      >
    >


  export type ExEmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    email?: boolean
    mobile?: boolean
    designation?: boolean
    department?: boolean
    branch?: boolean
    exitDate?: boolean
    reason?: boolean
    eligibleForRehire?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["exEmployee"]>



  export type ExEmployeeSelectScalar = {
    id?: boolean
    employeeId?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    email?: boolean
    mobile?: boolean
    designation?: boolean
    department?: boolean
    branch?: boolean
    exitDate?: boolean
    reason?: boolean
    eligibleForRehire?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExEmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "firstName" | "middleName" | "lastName" | "email" | "mobile" | "designation" | "department" | "branch" | "exitDate" | "reason" | "eligibleForRehire" | "createdAt" | "updatedAt", ExtArgs["result"]["exEmployee"]>

  export type $ExEmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExEmployee"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employeeId: string
      firstName: string | null
      middleName: string | null
      lastName: string | null
      email: string | null
      mobile: string | null
      designation: string | null
      department: string | null
      branch: string | null
      exitDate: Date | null
      reason: string | null
      eligibleForRehire: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["exEmployee"]>
    composites: {}
  }

  type ExEmployeeGetPayload<S extends boolean | null | undefined | ExEmployeeDefaultArgs> = $Result.GetResult<Prisma.$ExEmployeePayload, S>

  type ExEmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExEmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExEmployeeCountAggregateInputType | true
    }

  export interface ExEmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExEmployee'], meta: { name: 'ExEmployee' } }
    /**
     * Find zero or one ExEmployee that matches the filter.
     * @param {ExEmployeeFindUniqueArgs} args - Arguments to find a ExEmployee
     * @example
     * // Get one ExEmployee
     * const exEmployee = await prisma.exEmployee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExEmployeeFindUniqueArgs>(args: SelectSubset<T, ExEmployeeFindUniqueArgs<ExtArgs>>): Prisma__ExEmployeeClient<$Result.GetResult<Prisma.$ExEmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExEmployee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExEmployeeFindUniqueOrThrowArgs} args - Arguments to find a ExEmployee
     * @example
     * // Get one ExEmployee
     * const exEmployee = await prisma.exEmployee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExEmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, ExEmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExEmployeeClient<$Result.GetResult<Prisma.$ExEmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExEmployee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExEmployeeFindFirstArgs} args - Arguments to find a ExEmployee
     * @example
     * // Get one ExEmployee
     * const exEmployee = await prisma.exEmployee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExEmployeeFindFirstArgs>(args?: SelectSubset<T, ExEmployeeFindFirstArgs<ExtArgs>>): Prisma__ExEmployeeClient<$Result.GetResult<Prisma.$ExEmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExEmployee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExEmployeeFindFirstOrThrowArgs} args - Arguments to find a ExEmployee
     * @example
     * // Get one ExEmployee
     * const exEmployee = await prisma.exEmployee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExEmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, ExEmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExEmployeeClient<$Result.GetResult<Prisma.$ExEmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExEmployees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExEmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExEmployees
     * const exEmployees = await prisma.exEmployee.findMany()
     * 
     * // Get first 10 ExEmployees
     * const exEmployees = await prisma.exEmployee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exEmployeeWithIdOnly = await prisma.exEmployee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExEmployeeFindManyArgs>(args?: SelectSubset<T, ExEmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExEmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExEmployee.
     * @param {ExEmployeeCreateArgs} args - Arguments to create a ExEmployee.
     * @example
     * // Create one ExEmployee
     * const ExEmployee = await prisma.exEmployee.create({
     *   data: {
     *     // ... data to create a ExEmployee
     *   }
     * })
     * 
     */
    create<T extends ExEmployeeCreateArgs>(args: SelectSubset<T, ExEmployeeCreateArgs<ExtArgs>>): Prisma__ExEmployeeClient<$Result.GetResult<Prisma.$ExEmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExEmployees.
     * @param {ExEmployeeCreateManyArgs} args - Arguments to create many ExEmployees.
     * @example
     * // Create many ExEmployees
     * const exEmployee = await prisma.exEmployee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExEmployeeCreateManyArgs>(args?: SelectSubset<T, ExEmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExEmployee.
     * @param {ExEmployeeDeleteArgs} args - Arguments to delete one ExEmployee.
     * @example
     * // Delete one ExEmployee
     * const ExEmployee = await prisma.exEmployee.delete({
     *   where: {
     *     // ... filter to delete one ExEmployee
     *   }
     * })
     * 
     */
    delete<T extends ExEmployeeDeleteArgs>(args: SelectSubset<T, ExEmployeeDeleteArgs<ExtArgs>>): Prisma__ExEmployeeClient<$Result.GetResult<Prisma.$ExEmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExEmployee.
     * @param {ExEmployeeUpdateArgs} args - Arguments to update one ExEmployee.
     * @example
     * // Update one ExEmployee
     * const exEmployee = await prisma.exEmployee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExEmployeeUpdateArgs>(args: SelectSubset<T, ExEmployeeUpdateArgs<ExtArgs>>): Prisma__ExEmployeeClient<$Result.GetResult<Prisma.$ExEmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExEmployees.
     * @param {ExEmployeeDeleteManyArgs} args - Arguments to filter ExEmployees to delete.
     * @example
     * // Delete a few ExEmployees
     * const { count } = await prisma.exEmployee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExEmployeeDeleteManyArgs>(args?: SelectSubset<T, ExEmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExEmployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExEmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExEmployees
     * const exEmployee = await prisma.exEmployee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExEmployeeUpdateManyArgs>(args: SelectSubset<T, ExEmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExEmployee.
     * @param {ExEmployeeUpsertArgs} args - Arguments to update or create a ExEmployee.
     * @example
     * // Update or create a ExEmployee
     * const exEmployee = await prisma.exEmployee.upsert({
     *   create: {
     *     // ... data to create a ExEmployee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExEmployee we want to update
     *   }
     * })
     */
    upsert<T extends ExEmployeeUpsertArgs>(args: SelectSubset<T, ExEmployeeUpsertArgs<ExtArgs>>): Prisma__ExEmployeeClient<$Result.GetResult<Prisma.$ExEmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExEmployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExEmployeeCountArgs} args - Arguments to filter ExEmployees to count.
     * @example
     * // Count the number of ExEmployees
     * const count = await prisma.exEmployee.count({
     *   where: {
     *     // ... the filter for the ExEmployees we want to count
     *   }
     * })
    **/
    count<T extends ExEmployeeCountArgs>(
      args?: Subset<T, ExEmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExEmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExEmployee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExEmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExEmployeeAggregateArgs>(args: Subset<T, ExEmployeeAggregateArgs>): Prisma.PrismaPromise<GetExEmployeeAggregateType<T>>

    /**
     * Group by ExEmployee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExEmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExEmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExEmployeeGroupByArgs['orderBy'] }
        : { orderBy?: ExEmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExEmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExEmployee model
   */
  readonly fields: ExEmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExEmployee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExEmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExEmployee model
   */
  interface ExEmployeeFieldRefs {
    readonly id: FieldRef<"ExEmployee", 'Int'>
    readonly employeeId: FieldRef<"ExEmployee", 'String'>
    readonly firstName: FieldRef<"ExEmployee", 'String'>
    readonly middleName: FieldRef<"ExEmployee", 'String'>
    readonly lastName: FieldRef<"ExEmployee", 'String'>
    readonly email: FieldRef<"ExEmployee", 'String'>
    readonly mobile: FieldRef<"ExEmployee", 'String'>
    readonly designation: FieldRef<"ExEmployee", 'String'>
    readonly department: FieldRef<"ExEmployee", 'String'>
    readonly branch: FieldRef<"ExEmployee", 'String'>
    readonly exitDate: FieldRef<"ExEmployee", 'DateTime'>
    readonly reason: FieldRef<"ExEmployee", 'String'>
    readonly eligibleForRehire: FieldRef<"ExEmployee", 'Boolean'>
    readonly createdAt: FieldRef<"ExEmployee", 'DateTime'>
    readonly updatedAt: FieldRef<"ExEmployee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExEmployee findUnique
   */
  export type ExEmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExEmployee
     */
    select?: ExEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExEmployee
     */
    omit?: ExEmployeeOmit<ExtArgs> | null
    /**
     * Filter, which ExEmployee to fetch.
     */
    where: ExEmployeeWhereUniqueInput
  }

  /**
   * ExEmployee findUniqueOrThrow
   */
  export type ExEmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExEmployee
     */
    select?: ExEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExEmployee
     */
    omit?: ExEmployeeOmit<ExtArgs> | null
    /**
     * Filter, which ExEmployee to fetch.
     */
    where: ExEmployeeWhereUniqueInput
  }

  /**
   * ExEmployee findFirst
   */
  export type ExEmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExEmployee
     */
    select?: ExEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExEmployee
     */
    omit?: ExEmployeeOmit<ExtArgs> | null
    /**
     * Filter, which ExEmployee to fetch.
     */
    where?: ExEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExEmployees to fetch.
     */
    orderBy?: ExEmployeeOrderByWithRelationInput | ExEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExEmployees.
     */
    cursor?: ExEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExEmployees.
     */
    distinct?: ExEmployeeScalarFieldEnum | ExEmployeeScalarFieldEnum[]
  }

  /**
   * ExEmployee findFirstOrThrow
   */
  export type ExEmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExEmployee
     */
    select?: ExEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExEmployee
     */
    omit?: ExEmployeeOmit<ExtArgs> | null
    /**
     * Filter, which ExEmployee to fetch.
     */
    where?: ExEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExEmployees to fetch.
     */
    orderBy?: ExEmployeeOrderByWithRelationInput | ExEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExEmployees.
     */
    cursor?: ExEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExEmployees.
     */
    distinct?: ExEmployeeScalarFieldEnum | ExEmployeeScalarFieldEnum[]
  }

  /**
   * ExEmployee findMany
   */
  export type ExEmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExEmployee
     */
    select?: ExEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExEmployee
     */
    omit?: ExEmployeeOmit<ExtArgs> | null
    /**
     * Filter, which ExEmployees to fetch.
     */
    where?: ExEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExEmployees to fetch.
     */
    orderBy?: ExEmployeeOrderByWithRelationInput | ExEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExEmployees.
     */
    cursor?: ExEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExEmployees.
     */
    skip?: number
    distinct?: ExEmployeeScalarFieldEnum | ExEmployeeScalarFieldEnum[]
  }

  /**
   * ExEmployee create
   */
  export type ExEmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExEmployee
     */
    select?: ExEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExEmployee
     */
    omit?: ExEmployeeOmit<ExtArgs> | null
    /**
     * The data needed to create a ExEmployee.
     */
    data: XOR<ExEmployeeCreateInput, ExEmployeeUncheckedCreateInput>
  }

  /**
   * ExEmployee createMany
   */
  export type ExEmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExEmployees.
     */
    data: ExEmployeeCreateManyInput | ExEmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExEmployee update
   */
  export type ExEmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExEmployee
     */
    select?: ExEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExEmployee
     */
    omit?: ExEmployeeOmit<ExtArgs> | null
    /**
     * The data needed to update a ExEmployee.
     */
    data: XOR<ExEmployeeUpdateInput, ExEmployeeUncheckedUpdateInput>
    /**
     * Choose, which ExEmployee to update.
     */
    where: ExEmployeeWhereUniqueInput
  }

  /**
   * ExEmployee updateMany
   */
  export type ExEmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExEmployees.
     */
    data: XOR<ExEmployeeUpdateManyMutationInput, ExEmployeeUncheckedUpdateManyInput>
    /**
     * Filter which ExEmployees to update
     */
    where?: ExEmployeeWhereInput
    /**
     * Limit how many ExEmployees to update.
     */
    limit?: number
  }

  /**
   * ExEmployee upsert
   */
  export type ExEmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExEmployee
     */
    select?: ExEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExEmployee
     */
    omit?: ExEmployeeOmit<ExtArgs> | null
    /**
     * The filter to search for the ExEmployee to update in case it exists.
     */
    where: ExEmployeeWhereUniqueInput
    /**
     * In case the ExEmployee found by the `where` argument doesn't exist, create a new ExEmployee with this data.
     */
    create: XOR<ExEmployeeCreateInput, ExEmployeeUncheckedCreateInput>
    /**
     * In case the ExEmployee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExEmployeeUpdateInput, ExEmployeeUncheckedUpdateInput>
  }

  /**
   * ExEmployee delete
   */
  export type ExEmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExEmployee
     */
    select?: ExEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExEmployee
     */
    omit?: ExEmployeeOmit<ExtArgs> | null
    /**
     * Filter which ExEmployee to delete.
     */
    where: ExEmployeeWhereUniqueInput
  }

  /**
   * ExEmployee deleteMany
   */
  export type ExEmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExEmployees to delete
     */
    where?: ExEmployeeWhereInput
    /**
     * Limit how many ExEmployees to delete.
     */
    limit?: number
  }

  /**
   * ExEmployee without action
   */
  export type ExEmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExEmployee
     */
    select?: ExEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExEmployee
     */
    omit?: ExEmployeeOmit<ExtArgs> | null
  }


  /**
   * Model Manager
   */

  export type AggregateManager = {
    _count: ManagerCountAggregateOutputType | null
    _avg: ManagerAvgAggregateOutputType | null
    _sum: ManagerSumAggregateOutputType | null
    _min: ManagerMinAggregateOutputType | null
    _max: ManagerMaxAggregateOutputType | null
  }

  export type ManagerAvgAggregateOutputType = {
    id: number | null
  }

  export type ManagerSumAggregateOutputType = {
    id: number | null
  }

  export type ManagerMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    mobile: string | null
    department: string | null
    branch: string | null
    level: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ManagerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    mobile: string | null
    department: string | null
    branch: string | null
    level: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ManagerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    mobile: number
    department: number
    branch: number
    level: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ManagerAvgAggregateInputType = {
    id?: true
  }

  export type ManagerSumAggregateInputType = {
    id?: true
  }

  export type ManagerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    mobile?: true
    department?: true
    branch?: true
    level?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ManagerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    mobile?: true
    department?: true
    branch?: true
    level?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ManagerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    mobile?: true
    department?: true
    branch?: true
    level?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ManagerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manager to aggregate.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Managers
    **/
    _count?: true | ManagerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ManagerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ManagerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManagerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManagerMaxAggregateInputType
  }

  export type GetManagerAggregateType<T extends ManagerAggregateArgs> = {
        [P in keyof T & keyof AggregateManager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManager[P]>
      : GetScalarType<T[P], AggregateManager[P]>
  }




  export type ManagerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagerWhereInput
    orderBy?: ManagerOrderByWithAggregationInput | ManagerOrderByWithAggregationInput[]
    by: ManagerScalarFieldEnum[] | ManagerScalarFieldEnum
    having?: ManagerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManagerCountAggregateInputType | true
    _avg?: ManagerAvgAggregateInputType
    _sum?: ManagerSumAggregateInputType
    _min?: ManagerMinAggregateInputType
    _max?: ManagerMaxAggregateInputType
  }

  export type ManagerGroupByOutputType = {
    id: number
    name: string | null
    email: string | null
    mobile: string | null
    department: string | null
    branch: string | null
    level: string | null
    active: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: ManagerCountAggregateOutputType | null
    _avg: ManagerAvgAggregateOutputType | null
    _sum: ManagerSumAggregateOutputType | null
    _min: ManagerMinAggregateOutputType | null
    _max: ManagerMaxAggregateOutputType | null
  }

  type GetManagerGroupByPayload<T extends ManagerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManagerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManagerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManagerGroupByOutputType[P]>
            : GetScalarType<T[P], ManagerGroupByOutputType[P]>
        }
      >
    >


  export type ManagerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    mobile?: boolean
    department?: boolean
    branch?: boolean
    level?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employees?: boolean | Manager$employeesArgs<ExtArgs>
    _count?: boolean | ManagerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manager"]>



  export type ManagerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    mobile?: boolean
    department?: boolean
    branch?: boolean
    level?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ManagerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "mobile" | "department" | "branch" | "level" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["manager"]>
  export type ManagerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | Manager$employeesArgs<ExtArgs>
    _count?: boolean | ManagerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ManagerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Manager"
    objects: {
      employees: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string | null
      mobile: string | null
      department: string | null
      branch: string | null
      level: string | null
      active: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["manager"]>
    composites: {}
  }

  type ManagerGetPayload<S extends boolean | null | undefined | ManagerDefaultArgs> = $Result.GetResult<Prisma.$ManagerPayload, S>

  type ManagerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ManagerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManagerCountAggregateInputType | true
    }

  export interface ManagerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Manager'], meta: { name: 'Manager' } }
    /**
     * Find zero or one Manager that matches the filter.
     * @param {ManagerFindUniqueArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManagerFindUniqueArgs>(args: SelectSubset<T, ManagerFindUniqueArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Manager that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManagerFindUniqueOrThrowArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManagerFindUniqueOrThrowArgs>(args: SelectSubset<T, ManagerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerFindFirstArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManagerFindFirstArgs>(args?: SelectSubset<T, ManagerFindFirstArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerFindFirstOrThrowArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManagerFindFirstOrThrowArgs>(args?: SelectSubset<T, ManagerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Managers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Managers
     * const managers = await prisma.manager.findMany()
     * 
     * // Get first 10 Managers
     * const managers = await prisma.manager.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const managerWithIdOnly = await prisma.manager.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ManagerFindManyArgs>(args?: SelectSubset<T, ManagerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Manager.
     * @param {ManagerCreateArgs} args - Arguments to create a Manager.
     * @example
     * // Create one Manager
     * const Manager = await prisma.manager.create({
     *   data: {
     *     // ... data to create a Manager
     *   }
     * })
     * 
     */
    create<T extends ManagerCreateArgs>(args: SelectSubset<T, ManagerCreateArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Managers.
     * @param {ManagerCreateManyArgs} args - Arguments to create many Managers.
     * @example
     * // Create many Managers
     * const manager = await prisma.manager.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManagerCreateManyArgs>(args?: SelectSubset<T, ManagerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Manager.
     * @param {ManagerDeleteArgs} args - Arguments to delete one Manager.
     * @example
     * // Delete one Manager
     * const Manager = await prisma.manager.delete({
     *   where: {
     *     // ... filter to delete one Manager
     *   }
     * })
     * 
     */
    delete<T extends ManagerDeleteArgs>(args: SelectSubset<T, ManagerDeleteArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Manager.
     * @param {ManagerUpdateArgs} args - Arguments to update one Manager.
     * @example
     * // Update one Manager
     * const manager = await prisma.manager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManagerUpdateArgs>(args: SelectSubset<T, ManagerUpdateArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Managers.
     * @param {ManagerDeleteManyArgs} args - Arguments to filter Managers to delete.
     * @example
     * // Delete a few Managers
     * const { count } = await prisma.manager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManagerDeleteManyArgs>(args?: SelectSubset<T, ManagerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Managers
     * const manager = await prisma.manager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManagerUpdateManyArgs>(args: SelectSubset<T, ManagerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Manager.
     * @param {ManagerUpsertArgs} args - Arguments to update or create a Manager.
     * @example
     * // Update or create a Manager
     * const manager = await prisma.manager.upsert({
     *   create: {
     *     // ... data to create a Manager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manager we want to update
     *   }
     * })
     */
    upsert<T extends ManagerUpsertArgs>(args: SelectSubset<T, ManagerUpsertArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerCountArgs} args - Arguments to filter Managers to count.
     * @example
     * // Count the number of Managers
     * const count = await prisma.manager.count({
     *   where: {
     *     // ... the filter for the Managers we want to count
     *   }
     * })
    **/
    count<T extends ManagerCountArgs>(
      args?: Subset<T, ManagerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManagerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ManagerAggregateArgs>(args: Subset<T, ManagerAggregateArgs>): Prisma.PrismaPromise<GetManagerAggregateType<T>>

    /**
     * Group by Manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ManagerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManagerGroupByArgs['orderBy'] }
        : { orderBy?: ManagerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ManagerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManagerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Manager model
   */
  readonly fields: ManagerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Manager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManagerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends Manager$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Manager$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Manager model
   */
  interface ManagerFieldRefs {
    readonly id: FieldRef<"Manager", 'Int'>
    readonly name: FieldRef<"Manager", 'String'>
    readonly email: FieldRef<"Manager", 'String'>
    readonly mobile: FieldRef<"Manager", 'String'>
    readonly department: FieldRef<"Manager", 'String'>
    readonly branch: FieldRef<"Manager", 'String'>
    readonly level: FieldRef<"Manager", 'String'>
    readonly active: FieldRef<"Manager", 'Boolean'>
    readonly createdAt: FieldRef<"Manager", 'DateTime'>
    readonly updatedAt: FieldRef<"Manager", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Manager findUnique
   */
  export type ManagerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where: ManagerWhereUniqueInput
  }

  /**
   * Manager findUniqueOrThrow
   */
  export type ManagerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where: ManagerWhereUniqueInput
  }

  /**
   * Manager findFirst
   */
  export type ManagerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Managers.
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Managers.
     */
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[]
  }

  /**
   * Manager findFirstOrThrow
   */
  export type ManagerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Managers.
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Managers.
     */
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[]
  }

  /**
   * Manager findMany
   */
  export type ManagerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Managers to fetch.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Managers.
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[]
  }

  /**
   * Manager create
   */
  export type ManagerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * The data needed to create a Manager.
     */
    data: XOR<ManagerCreateInput, ManagerUncheckedCreateInput>
  }

  /**
   * Manager createMany
   */
  export type ManagerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Managers.
     */
    data: ManagerCreateManyInput | ManagerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Manager update
   */
  export type ManagerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * The data needed to update a Manager.
     */
    data: XOR<ManagerUpdateInput, ManagerUncheckedUpdateInput>
    /**
     * Choose, which Manager to update.
     */
    where: ManagerWhereUniqueInput
  }

  /**
   * Manager updateMany
   */
  export type ManagerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Managers.
     */
    data: XOR<ManagerUpdateManyMutationInput, ManagerUncheckedUpdateManyInput>
    /**
     * Filter which Managers to update
     */
    where?: ManagerWhereInput
    /**
     * Limit how many Managers to update.
     */
    limit?: number
  }

  /**
   * Manager upsert
   */
  export type ManagerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * The filter to search for the Manager to update in case it exists.
     */
    where: ManagerWhereUniqueInput
    /**
     * In case the Manager found by the `where` argument doesn't exist, create a new Manager with this data.
     */
    create: XOR<ManagerCreateInput, ManagerUncheckedCreateInput>
    /**
     * In case the Manager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManagerUpdateInput, ManagerUncheckedUpdateInput>
  }

  /**
   * Manager delete
   */
  export type ManagerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter which Manager to delete.
     */
    where: ManagerWhereUniqueInput
  }

  /**
   * Manager deleteMany
   */
  export type ManagerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Managers to delete
     */
    where?: ManagerWhereInput
    /**
     * Limit how many Managers to delete.
     */
    limit?: number
  }

  /**
   * Manager.employees
   */
  export type Manager$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Manager without action
   */
  export type ManagerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manager
     */
    omit?: ManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerInclude<ExtArgs> | null
  }


  /**
   * Model Offboarding
   */

  export type AggregateOffboarding = {
    _count: OffboardingCountAggregateOutputType | null
    _avg: OffboardingAvgAggregateOutputType | null
    _sum: OffboardingSumAggregateOutputType | null
    _min: OffboardingMinAggregateOutputType | null
    _max: OffboardingMaxAggregateOutputType | null
  }

  export type OffboardingAvgAggregateOutputType = {
    id: number | null
    employeeId: number | null
  }

  export type OffboardingSumAggregateOutputType = {
    id: number | null
    employeeId: number | null
  }

  export type OffboardingMinAggregateOutputType = {
    id: number | null
    employeeId: number | null
    lastWorkingDate: Date | null
    reason: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OffboardingMaxAggregateOutputType = {
    id: number | null
    employeeId: number | null
    lastWorkingDate: Date | null
    reason: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OffboardingCountAggregateOutputType = {
    id: number
    employeeId: number
    lastWorkingDate: number
    reason: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OffboardingAvgAggregateInputType = {
    id?: true
    employeeId?: true
  }

  export type OffboardingSumAggregateInputType = {
    id?: true
    employeeId?: true
  }

  export type OffboardingMinAggregateInputType = {
    id?: true
    employeeId?: true
    lastWorkingDate?: true
    reason?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OffboardingMaxAggregateInputType = {
    id?: true
    employeeId?: true
    lastWorkingDate?: true
    reason?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OffboardingCountAggregateInputType = {
    id?: true
    employeeId?: true
    lastWorkingDate?: true
    reason?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OffboardingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offboarding to aggregate.
     */
    where?: OffboardingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offboardings to fetch.
     */
    orderBy?: OffboardingOrderByWithRelationInput | OffboardingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OffboardingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offboardings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offboardings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Offboardings
    **/
    _count?: true | OffboardingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OffboardingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OffboardingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OffboardingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OffboardingMaxAggregateInputType
  }

  export type GetOffboardingAggregateType<T extends OffboardingAggregateArgs> = {
        [P in keyof T & keyof AggregateOffboarding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffboarding[P]>
      : GetScalarType<T[P], AggregateOffboarding[P]>
  }




  export type OffboardingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OffboardingWhereInput
    orderBy?: OffboardingOrderByWithAggregationInput | OffboardingOrderByWithAggregationInput[]
    by: OffboardingScalarFieldEnum[] | OffboardingScalarFieldEnum
    having?: OffboardingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OffboardingCountAggregateInputType | true
    _avg?: OffboardingAvgAggregateInputType
    _sum?: OffboardingSumAggregateInputType
    _min?: OffboardingMinAggregateInputType
    _max?: OffboardingMaxAggregateInputType
  }

  export type OffboardingGroupByOutputType = {
    id: number
    employeeId: number
    lastWorkingDate: Date | null
    reason: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: OffboardingCountAggregateOutputType | null
    _avg: OffboardingAvgAggregateOutputType | null
    _sum: OffboardingSumAggregateOutputType | null
    _min: OffboardingMinAggregateOutputType | null
    _max: OffboardingMaxAggregateOutputType | null
  }

  type GetOffboardingGroupByPayload<T extends OffboardingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OffboardingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OffboardingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OffboardingGroupByOutputType[P]>
            : GetScalarType<T[P], OffboardingGroupByOutputType[P]>
        }
      >
    >


  export type OffboardingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    lastWorkingDate?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    checklists?: boolean | Offboarding$checklistsArgs<ExtArgs>
    _count?: boolean | OffboardingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offboarding"]>



  export type OffboardingSelectScalar = {
    id?: boolean
    employeeId?: boolean
    lastWorkingDate?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OffboardingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "lastWorkingDate" | "reason" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["offboarding"]>
  export type OffboardingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    checklists?: boolean | Offboarding$checklistsArgs<ExtArgs>
    _count?: boolean | OffboardingCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OffboardingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Offboarding"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      checklists: Prisma.$ExitChecklistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employeeId: number
      lastWorkingDate: Date | null
      reason: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["offboarding"]>
    composites: {}
  }

  type OffboardingGetPayload<S extends boolean | null | undefined | OffboardingDefaultArgs> = $Result.GetResult<Prisma.$OffboardingPayload, S>

  type OffboardingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OffboardingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OffboardingCountAggregateInputType | true
    }

  export interface OffboardingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Offboarding'], meta: { name: 'Offboarding' } }
    /**
     * Find zero or one Offboarding that matches the filter.
     * @param {OffboardingFindUniqueArgs} args - Arguments to find a Offboarding
     * @example
     * // Get one Offboarding
     * const offboarding = await prisma.offboarding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OffboardingFindUniqueArgs>(args: SelectSubset<T, OffboardingFindUniqueArgs<ExtArgs>>): Prisma__OffboardingClient<$Result.GetResult<Prisma.$OffboardingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Offboarding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OffboardingFindUniqueOrThrowArgs} args - Arguments to find a Offboarding
     * @example
     * // Get one Offboarding
     * const offboarding = await prisma.offboarding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OffboardingFindUniqueOrThrowArgs>(args: SelectSubset<T, OffboardingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OffboardingClient<$Result.GetResult<Prisma.$OffboardingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offboarding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffboardingFindFirstArgs} args - Arguments to find a Offboarding
     * @example
     * // Get one Offboarding
     * const offboarding = await prisma.offboarding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OffboardingFindFirstArgs>(args?: SelectSubset<T, OffboardingFindFirstArgs<ExtArgs>>): Prisma__OffboardingClient<$Result.GetResult<Prisma.$OffboardingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offboarding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffboardingFindFirstOrThrowArgs} args - Arguments to find a Offboarding
     * @example
     * // Get one Offboarding
     * const offboarding = await prisma.offboarding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OffboardingFindFirstOrThrowArgs>(args?: SelectSubset<T, OffboardingFindFirstOrThrowArgs<ExtArgs>>): Prisma__OffboardingClient<$Result.GetResult<Prisma.$OffboardingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Offboardings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffboardingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Offboardings
     * const offboardings = await prisma.offboarding.findMany()
     * 
     * // Get first 10 Offboardings
     * const offboardings = await prisma.offboarding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offboardingWithIdOnly = await prisma.offboarding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OffboardingFindManyArgs>(args?: SelectSubset<T, OffboardingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OffboardingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Offboarding.
     * @param {OffboardingCreateArgs} args - Arguments to create a Offboarding.
     * @example
     * // Create one Offboarding
     * const Offboarding = await prisma.offboarding.create({
     *   data: {
     *     // ... data to create a Offboarding
     *   }
     * })
     * 
     */
    create<T extends OffboardingCreateArgs>(args: SelectSubset<T, OffboardingCreateArgs<ExtArgs>>): Prisma__OffboardingClient<$Result.GetResult<Prisma.$OffboardingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Offboardings.
     * @param {OffboardingCreateManyArgs} args - Arguments to create many Offboardings.
     * @example
     * // Create many Offboardings
     * const offboarding = await prisma.offboarding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OffboardingCreateManyArgs>(args?: SelectSubset<T, OffboardingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Offboarding.
     * @param {OffboardingDeleteArgs} args - Arguments to delete one Offboarding.
     * @example
     * // Delete one Offboarding
     * const Offboarding = await prisma.offboarding.delete({
     *   where: {
     *     // ... filter to delete one Offboarding
     *   }
     * })
     * 
     */
    delete<T extends OffboardingDeleteArgs>(args: SelectSubset<T, OffboardingDeleteArgs<ExtArgs>>): Prisma__OffboardingClient<$Result.GetResult<Prisma.$OffboardingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Offboarding.
     * @param {OffboardingUpdateArgs} args - Arguments to update one Offboarding.
     * @example
     * // Update one Offboarding
     * const offboarding = await prisma.offboarding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OffboardingUpdateArgs>(args: SelectSubset<T, OffboardingUpdateArgs<ExtArgs>>): Prisma__OffboardingClient<$Result.GetResult<Prisma.$OffboardingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Offboardings.
     * @param {OffboardingDeleteManyArgs} args - Arguments to filter Offboardings to delete.
     * @example
     * // Delete a few Offboardings
     * const { count } = await prisma.offboarding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OffboardingDeleteManyArgs>(args?: SelectSubset<T, OffboardingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offboardings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffboardingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Offboardings
     * const offboarding = await prisma.offboarding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OffboardingUpdateManyArgs>(args: SelectSubset<T, OffboardingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Offboarding.
     * @param {OffboardingUpsertArgs} args - Arguments to update or create a Offboarding.
     * @example
     * // Update or create a Offboarding
     * const offboarding = await prisma.offboarding.upsert({
     *   create: {
     *     // ... data to create a Offboarding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Offboarding we want to update
     *   }
     * })
     */
    upsert<T extends OffboardingUpsertArgs>(args: SelectSubset<T, OffboardingUpsertArgs<ExtArgs>>): Prisma__OffboardingClient<$Result.GetResult<Prisma.$OffboardingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Offboardings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffboardingCountArgs} args - Arguments to filter Offboardings to count.
     * @example
     * // Count the number of Offboardings
     * const count = await prisma.offboarding.count({
     *   where: {
     *     // ... the filter for the Offboardings we want to count
     *   }
     * })
    **/
    count<T extends OffboardingCountArgs>(
      args?: Subset<T, OffboardingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OffboardingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Offboarding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffboardingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OffboardingAggregateArgs>(args: Subset<T, OffboardingAggregateArgs>): Prisma.PrismaPromise<GetOffboardingAggregateType<T>>

    /**
     * Group by Offboarding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffboardingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OffboardingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OffboardingGroupByArgs['orderBy'] }
        : { orderBy?: OffboardingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OffboardingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOffboardingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Offboarding model
   */
  readonly fields: OffboardingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Offboarding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OffboardingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    checklists<T extends Offboarding$checklistsArgs<ExtArgs> = {}>(args?: Subset<T, Offboarding$checklistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExitChecklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Offboarding model
   */
  interface OffboardingFieldRefs {
    readonly id: FieldRef<"Offboarding", 'Int'>
    readonly employeeId: FieldRef<"Offboarding", 'Int'>
    readonly lastWorkingDate: FieldRef<"Offboarding", 'DateTime'>
    readonly reason: FieldRef<"Offboarding", 'String'>
    readonly status: FieldRef<"Offboarding", 'String'>
    readonly createdAt: FieldRef<"Offboarding", 'DateTime'>
    readonly updatedAt: FieldRef<"Offboarding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Offboarding findUnique
   */
  export type OffboardingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offboarding
     */
    select?: OffboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offboarding
     */
    omit?: OffboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffboardingInclude<ExtArgs> | null
    /**
     * Filter, which Offboarding to fetch.
     */
    where: OffboardingWhereUniqueInput
  }

  /**
   * Offboarding findUniqueOrThrow
   */
  export type OffboardingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offboarding
     */
    select?: OffboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offboarding
     */
    omit?: OffboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffboardingInclude<ExtArgs> | null
    /**
     * Filter, which Offboarding to fetch.
     */
    where: OffboardingWhereUniqueInput
  }

  /**
   * Offboarding findFirst
   */
  export type OffboardingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offboarding
     */
    select?: OffboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offboarding
     */
    omit?: OffboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffboardingInclude<ExtArgs> | null
    /**
     * Filter, which Offboarding to fetch.
     */
    where?: OffboardingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offboardings to fetch.
     */
    orderBy?: OffboardingOrderByWithRelationInput | OffboardingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offboardings.
     */
    cursor?: OffboardingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offboardings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offboardings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offboardings.
     */
    distinct?: OffboardingScalarFieldEnum | OffboardingScalarFieldEnum[]
  }

  /**
   * Offboarding findFirstOrThrow
   */
  export type OffboardingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offboarding
     */
    select?: OffboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offboarding
     */
    omit?: OffboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffboardingInclude<ExtArgs> | null
    /**
     * Filter, which Offboarding to fetch.
     */
    where?: OffboardingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offboardings to fetch.
     */
    orderBy?: OffboardingOrderByWithRelationInput | OffboardingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offboardings.
     */
    cursor?: OffboardingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offboardings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offboardings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offboardings.
     */
    distinct?: OffboardingScalarFieldEnum | OffboardingScalarFieldEnum[]
  }

  /**
   * Offboarding findMany
   */
  export type OffboardingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offboarding
     */
    select?: OffboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offboarding
     */
    omit?: OffboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffboardingInclude<ExtArgs> | null
    /**
     * Filter, which Offboardings to fetch.
     */
    where?: OffboardingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offboardings to fetch.
     */
    orderBy?: OffboardingOrderByWithRelationInput | OffboardingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Offboardings.
     */
    cursor?: OffboardingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offboardings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offboardings.
     */
    skip?: number
    distinct?: OffboardingScalarFieldEnum | OffboardingScalarFieldEnum[]
  }

  /**
   * Offboarding create
   */
  export type OffboardingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offboarding
     */
    select?: OffboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offboarding
     */
    omit?: OffboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffboardingInclude<ExtArgs> | null
    /**
     * The data needed to create a Offboarding.
     */
    data: XOR<OffboardingCreateInput, OffboardingUncheckedCreateInput>
  }

  /**
   * Offboarding createMany
   */
  export type OffboardingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Offboardings.
     */
    data: OffboardingCreateManyInput | OffboardingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Offboarding update
   */
  export type OffboardingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offboarding
     */
    select?: OffboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offboarding
     */
    omit?: OffboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffboardingInclude<ExtArgs> | null
    /**
     * The data needed to update a Offboarding.
     */
    data: XOR<OffboardingUpdateInput, OffboardingUncheckedUpdateInput>
    /**
     * Choose, which Offboarding to update.
     */
    where: OffboardingWhereUniqueInput
  }

  /**
   * Offboarding updateMany
   */
  export type OffboardingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Offboardings.
     */
    data: XOR<OffboardingUpdateManyMutationInput, OffboardingUncheckedUpdateManyInput>
    /**
     * Filter which Offboardings to update
     */
    where?: OffboardingWhereInput
    /**
     * Limit how many Offboardings to update.
     */
    limit?: number
  }

  /**
   * Offboarding upsert
   */
  export type OffboardingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offboarding
     */
    select?: OffboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offboarding
     */
    omit?: OffboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffboardingInclude<ExtArgs> | null
    /**
     * The filter to search for the Offboarding to update in case it exists.
     */
    where: OffboardingWhereUniqueInput
    /**
     * In case the Offboarding found by the `where` argument doesn't exist, create a new Offboarding with this data.
     */
    create: XOR<OffboardingCreateInput, OffboardingUncheckedCreateInput>
    /**
     * In case the Offboarding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OffboardingUpdateInput, OffboardingUncheckedUpdateInput>
  }

  /**
   * Offboarding delete
   */
  export type OffboardingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offboarding
     */
    select?: OffboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offboarding
     */
    omit?: OffboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffboardingInclude<ExtArgs> | null
    /**
     * Filter which Offboarding to delete.
     */
    where: OffboardingWhereUniqueInput
  }

  /**
   * Offboarding deleteMany
   */
  export type OffboardingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offboardings to delete
     */
    where?: OffboardingWhereInput
    /**
     * Limit how many Offboardings to delete.
     */
    limit?: number
  }

  /**
   * Offboarding.checklists
   */
  export type Offboarding$checklistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExitChecklist
     */
    select?: ExitChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExitChecklist
     */
    omit?: ExitChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExitChecklistInclude<ExtArgs> | null
    where?: ExitChecklistWhereInput
    orderBy?: ExitChecklistOrderByWithRelationInput | ExitChecklistOrderByWithRelationInput[]
    cursor?: ExitChecklistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExitChecklistScalarFieldEnum | ExitChecklistScalarFieldEnum[]
  }

  /**
   * Offboarding without action
   */
  export type OffboardingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offboarding
     */
    select?: OffboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offboarding
     */
    omit?: OffboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffboardingInclude<ExtArgs> | null
  }


  /**
   * Model ExitChecklist
   */

  export type AggregateExitChecklist = {
    _count: ExitChecklistCountAggregateOutputType | null
    _avg: ExitChecklistAvgAggregateOutputType | null
    _sum: ExitChecklistSumAggregateOutputType | null
    _min: ExitChecklistMinAggregateOutputType | null
    _max: ExitChecklistMaxAggregateOutputType | null
  }

  export type ExitChecklistAvgAggregateOutputType = {
    id: number | null
    offboardingId: number | null
  }

  export type ExitChecklistSumAggregateOutputType = {
    id: number | null
    offboardingId: number | null
  }

  export type ExitChecklistMinAggregateOutputType = {
    id: number | null
    offboardingId: number | null
    department: string | null
    taskName: string | null
    assignedTo: string | null
    status: string | null
    completionDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExitChecklistMaxAggregateOutputType = {
    id: number | null
    offboardingId: number | null
    department: string | null
    taskName: string | null
    assignedTo: string | null
    status: string | null
    completionDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExitChecklistCountAggregateOutputType = {
    id: number
    offboardingId: number
    department: number
    taskName: number
    assignedTo: number
    status: number
    completionDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExitChecklistAvgAggregateInputType = {
    id?: true
    offboardingId?: true
  }

  export type ExitChecklistSumAggregateInputType = {
    id?: true
    offboardingId?: true
  }

  export type ExitChecklistMinAggregateInputType = {
    id?: true
    offboardingId?: true
    department?: true
    taskName?: true
    assignedTo?: true
    status?: true
    completionDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExitChecklistMaxAggregateInputType = {
    id?: true
    offboardingId?: true
    department?: true
    taskName?: true
    assignedTo?: true
    status?: true
    completionDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExitChecklistCountAggregateInputType = {
    id?: true
    offboardingId?: true
    department?: true
    taskName?: true
    assignedTo?: true
    status?: true
    completionDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExitChecklistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExitChecklist to aggregate.
     */
    where?: ExitChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExitChecklists to fetch.
     */
    orderBy?: ExitChecklistOrderByWithRelationInput | ExitChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExitChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExitChecklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExitChecklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExitChecklists
    **/
    _count?: true | ExitChecklistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExitChecklistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExitChecklistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExitChecklistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExitChecklistMaxAggregateInputType
  }

  export type GetExitChecklistAggregateType<T extends ExitChecklistAggregateArgs> = {
        [P in keyof T & keyof AggregateExitChecklist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExitChecklist[P]>
      : GetScalarType<T[P], AggregateExitChecklist[P]>
  }




  export type ExitChecklistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExitChecklistWhereInput
    orderBy?: ExitChecklistOrderByWithAggregationInput | ExitChecklistOrderByWithAggregationInput[]
    by: ExitChecklistScalarFieldEnum[] | ExitChecklistScalarFieldEnum
    having?: ExitChecklistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExitChecklistCountAggregateInputType | true
    _avg?: ExitChecklistAvgAggregateInputType
    _sum?: ExitChecklistSumAggregateInputType
    _min?: ExitChecklistMinAggregateInputType
    _max?: ExitChecklistMaxAggregateInputType
  }

  export type ExitChecklistGroupByOutputType = {
    id: number
    offboardingId: number
    department: string
    taskName: string
    assignedTo: string | null
    status: string
    completionDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ExitChecklistCountAggregateOutputType | null
    _avg: ExitChecklistAvgAggregateOutputType | null
    _sum: ExitChecklistSumAggregateOutputType | null
    _min: ExitChecklistMinAggregateOutputType | null
    _max: ExitChecklistMaxAggregateOutputType | null
  }

  type GetExitChecklistGroupByPayload<T extends ExitChecklistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExitChecklistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExitChecklistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExitChecklistGroupByOutputType[P]>
            : GetScalarType<T[P], ExitChecklistGroupByOutputType[P]>
        }
      >
    >


  export type ExitChecklistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    offboardingId?: boolean
    department?: boolean
    taskName?: boolean
    assignedTo?: boolean
    status?: boolean
    completionDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    offboarding?: boolean | OffboardingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exitChecklist"]>



  export type ExitChecklistSelectScalar = {
    id?: boolean
    offboardingId?: boolean
    department?: boolean
    taskName?: boolean
    assignedTo?: boolean
    status?: boolean
    completionDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExitChecklistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "offboardingId" | "department" | "taskName" | "assignedTo" | "status" | "completionDate" | "createdAt" | "updatedAt", ExtArgs["result"]["exitChecklist"]>
  export type ExitChecklistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offboarding?: boolean | OffboardingDefaultArgs<ExtArgs>
  }

  export type $ExitChecklistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExitChecklist"
    objects: {
      offboarding: Prisma.$OffboardingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      offboardingId: number
      department: string
      taskName: string
      assignedTo: string | null
      status: string
      completionDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["exitChecklist"]>
    composites: {}
  }

  type ExitChecklistGetPayload<S extends boolean | null | undefined | ExitChecklistDefaultArgs> = $Result.GetResult<Prisma.$ExitChecklistPayload, S>

  type ExitChecklistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExitChecklistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExitChecklistCountAggregateInputType | true
    }

  export interface ExitChecklistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExitChecklist'], meta: { name: 'ExitChecklist' } }
    /**
     * Find zero or one ExitChecklist that matches the filter.
     * @param {ExitChecklistFindUniqueArgs} args - Arguments to find a ExitChecklist
     * @example
     * // Get one ExitChecklist
     * const exitChecklist = await prisma.exitChecklist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExitChecklistFindUniqueArgs>(args: SelectSubset<T, ExitChecklistFindUniqueArgs<ExtArgs>>): Prisma__ExitChecklistClient<$Result.GetResult<Prisma.$ExitChecklistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExitChecklist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExitChecklistFindUniqueOrThrowArgs} args - Arguments to find a ExitChecklist
     * @example
     * // Get one ExitChecklist
     * const exitChecklist = await prisma.exitChecklist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExitChecklistFindUniqueOrThrowArgs>(args: SelectSubset<T, ExitChecklistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExitChecklistClient<$Result.GetResult<Prisma.$ExitChecklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExitChecklist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExitChecklistFindFirstArgs} args - Arguments to find a ExitChecklist
     * @example
     * // Get one ExitChecklist
     * const exitChecklist = await prisma.exitChecklist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExitChecklistFindFirstArgs>(args?: SelectSubset<T, ExitChecklistFindFirstArgs<ExtArgs>>): Prisma__ExitChecklistClient<$Result.GetResult<Prisma.$ExitChecklistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExitChecklist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExitChecklistFindFirstOrThrowArgs} args - Arguments to find a ExitChecklist
     * @example
     * // Get one ExitChecklist
     * const exitChecklist = await prisma.exitChecklist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExitChecklistFindFirstOrThrowArgs>(args?: SelectSubset<T, ExitChecklistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExitChecklistClient<$Result.GetResult<Prisma.$ExitChecklistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExitChecklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExitChecklistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExitChecklists
     * const exitChecklists = await prisma.exitChecklist.findMany()
     * 
     * // Get first 10 ExitChecklists
     * const exitChecklists = await prisma.exitChecklist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exitChecklistWithIdOnly = await prisma.exitChecklist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExitChecklistFindManyArgs>(args?: SelectSubset<T, ExitChecklistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExitChecklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExitChecklist.
     * @param {ExitChecklistCreateArgs} args - Arguments to create a ExitChecklist.
     * @example
     * // Create one ExitChecklist
     * const ExitChecklist = await prisma.exitChecklist.create({
     *   data: {
     *     // ... data to create a ExitChecklist
     *   }
     * })
     * 
     */
    create<T extends ExitChecklistCreateArgs>(args: SelectSubset<T, ExitChecklistCreateArgs<ExtArgs>>): Prisma__ExitChecklistClient<$Result.GetResult<Prisma.$ExitChecklistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExitChecklists.
     * @param {ExitChecklistCreateManyArgs} args - Arguments to create many ExitChecklists.
     * @example
     * // Create many ExitChecklists
     * const exitChecklist = await prisma.exitChecklist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExitChecklistCreateManyArgs>(args?: SelectSubset<T, ExitChecklistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExitChecklist.
     * @param {ExitChecklistDeleteArgs} args - Arguments to delete one ExitChecklist.
     * @example
     * // Delete one ExitChecklist
     * const ExitChecklist = await prisma.exitChecklist.delete({
     *   where: {
     *     // ... filter to delete one ExitChecklist
     *   }
     * })
     * 
     */
    delete<T extends ExitChecklistDeleteArgs>(args: SelectSubset<T, ExitChecklistDeleteArgs<ExtArgs>>): Prisma__ExitChecklistClient<$Result.GetResult<Prisma.$ExitChecklistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExitChecklist.
     * @param {ExitChecklistUpdateArgs} args - Arguments to update one ExitChecklist.
     * @example
     * // Update one ExitChecklist
     * const exitChecklist = await prisma.exitChecklist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExitChecklistUpdateArgs>(args: SelectSubset<T, ExitChecklistUpdateArgs<ExtArgs>>): Prisma__ExitChecklistClient<$Result.GetResult<Prisma.$ExitChecklistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExitChecklists.
     * @param {ExitChecklistDeleteManyArgs} args - Arguments to filter ExitChecklists to delete.
     * @example
     * // Delete a few ExitChecklists
     * const { count } = await prisma.exitChecklist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExitChecklistDeleteManyArgs>(args?: SelectSubset<T, ExitChecklistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExitChecklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExitChecklistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExitChecklists
     * const exitChecklist = await prisma.exitChecklist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExitChecklistUpdateManyArgs>(args: SelectSubset<T, ExitChecklistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExitChecklist.
     * @param {ExitChecklistUpsertArgs} args - Arguments to update or create a ExitChecklist.
     * @example
     * // Update or create a ExitChecklist
     * const exitChecklist = await prisma.exitChecklist.upsert({
     *   create: {
     *     // ... data to create a ExitChecklist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExitChecklist we want to update
     *   }
     * })
     */
    upsert<T extends ExitChecklistUpsertArgs>(args: SelectSubset<T, ExitChecklistUpsertArgs<ExtArgs>>): Prisma__ExitChecklistClient<$Result.GetResult<Prisma.$ExitChecklistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExitChecklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExitChecklistCountArgs} args - Arguments to filter ExitChecklists to count.
     * @example
     * // Count the number of ExitChecklists
     * const count = await prisma.exitChecklist.count({
     *   where: {
     *     // ... the filter for the ExitChecklists we want to count
     *   }
     * })
    **/
    count<T extends ExitChecklistCountArgs>(
      args?: Subset<T, ExitChecklistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExitChecklistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExitChecklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExitChecklistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExitChecklistAggregateArgs>(args: Subset<T, ExitChecklistAggregateArgs>): Prisma.PrismaPromise<GetExitChecklistAggregateType<T>>

    /**
     * Group by ExitChecklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExitChecklistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExitChecklistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExitChecklistGroupByArgs['orderBy'] }
        : { orderBy?: ExitChecklistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExitChecklistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExitChecklistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExitChecklist model
   */
  readonly fields: ExitChecklistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExitChecklist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExitChecklistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    offboarding<T extends OffboardingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OffboardingDefaultArgs<ExtArgs>>): Prisma__OffboardingClient<$Result.GetResult<Prisma.$OffboardingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExitChecklist model
   */
  interface ExitChecklistFieldRefs {
    readonly id: FieldRef<"ExitChecklist", 'Int'>
    readonly offboardingId: FieldRef<"ExitChecklist", 'Int'>
    readonly department: FieldRef<"ExitChecklist", 'String'>
    readonly taskName: FieldRef<"ExitChecklist", 'String'>
    readonly assignedTo: FieldRef<"ExitChecklist", 'String'>
    readonly status: FieldRef<"ExitChecklist", 'String'>
    readonly completionDate: FieldRef<"ExitChecklist", 'DateTime'>
    readonly createdAt: FieldRef<"ExitChecklist", 'DateTime'>
    readonly updatedAt: FieldRef<"ExitChecklist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExitChecklist findUnique
   */
  export type ExitChecklistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExitChecklist
     */
    select?: ExitChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExitChecklist
     */
    omit?: ExitChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExitChecklistInclude<ExtArgs> | null
    /**
     * Filter, which ExitChecklist to fetch.
     */
    where: ExitChecklistWhereUniqueInput
  }

  /**
   * ExitChecklist findUniqueOrThrow
   */
  export type ExitChecklistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExitChecklist
     */
    select?: ExitChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExitChecklist
     */
    omit?: ExitChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExitChecklistInclude<ExtArgs> | null
    /**
     * Filter, which ExitChecklist to fetch.
     */
    where: ExitChecklistWhereUniqueInput
  }

  /**
   * ExitChecklist findFirst
   */
  export type ExitChecklistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExitChecklist
     */
    select?: ExitChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExitChecklist
     */
    omit?: ExitChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExitChecklistInclude<ExtArgs> | null
    /**
     * Filter, which ExitChecklist to fetch.
     */
    where?: ExitChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExitChecklists to fetch.
     */
    orderBy?: ExitChecklistOrderByWithRelationInput | ExitChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExitChecklists.
     */
    cursor?: ExitChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExitChecklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExitChecklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExitChecklists.
     */
    distinct?: ExitChecklistScalarFieldEnum | ExitChecklistScalarFieldEnum[]
  }

  /**
   * ExitChecklist findFirstOrThrow
   */
  export type ExitChecklistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExitChecklist
     */
    select?: ExitChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExitChecklist
     */
    omit?: ExitChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExitChecklistInclude<ExtArgs> | null
    /**
     * Filter, which ExitChecklist to fetch.
     */
    where?: ExitChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExitChecklists to fetch.
     */
    orderBy?: ExitChecklistOrderByWithRelationInput | ExitChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExitChecklists.
     */
    cursor?: ExitChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExitChecklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExitChecklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExitChecklists.
     */
    distinct?: ExitChecklistScalarFieldEnum | ExitChecklistScalarFieldEnum[]
  }

  /**
   * ExitChecklist findMany
   */
  export type ExitChecklistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExitChecklist
     */
    select?: ExitChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExitChecklist
     */
    omit?: ExitChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExitChecklistInclude<ExtArgs> | null
    /**
     * Filter, which ExitChecklists to fetch.
     */
    where?: ExitChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExitChecklists to fetch.
     */
    orderBy?: ExitChecklistOrderByWithRelationInput | ExitChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExitChecklists.
     */
    cursor?: ExitChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExitChecklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExitChecklists.
     */
    skip?: number
    distinct?: ExitChecklistScalarFieldEnum | ExitChecklistScalarFieldEnum[]
  }

  /**
   * ExitChecklist create
   */
  export type ExitChecklistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExitChecklist
     */
    select?: ExitChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExitChecklist
     */
    omit?: ExitChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExitChecklistInclude<ExtArgs> | null
    /**
     * The data needed to create a ExitChecklist.
     */
    data: XOR<ExitChecklistCreateInput, ExitChecklistUncheckedCreateInput>
  }

  /**
   * ExitChecklist createMany
   */
  export type ExitChecklistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExitChecklists.
     */
    data: ExitChecklistCreateManyInput | ExitChecklistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExitChecklist update
   */
  export type ExitChecklistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExitChecklist
     */
    select?: ExitChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExitChecklist
     */
    omit?: ExitChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExitChecklistInclude<ExtArgs> | null
    /**
     * The data needed to update a ExitChecklist.
     */
    data: XOR<ExitChecklistUpdateInput, ExitChecklistUncheckedUpdateInput>
    /**
     * Choose, which ExitChecklist to update.
     */
    where: ExitChecklistWhereUniqueInput
  }

  /**
   * ExitChecklist updateMany
   */
  export type ExitChecklistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExitChecklists.
     */
    data: XOR<ExitChecklistUpdateManyMutationInput, ExitChecklistUncheckedUpdateManyInput>
    /**
     * Filter which ExitChecklists to update
     */
    where?: ExitChecklistWhereInput
    /**
     * Limit how many ExitChecklists to update.
     */
    limit?: number
  }

  /**
   * ExitChecklist upsert
   */
  export type ExitChecklistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExitChecklist
     */
    select?: ExitChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExitChecklist
     */
    omit?: ExitChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExitChecklistInclude<ExtArgs> | null
    /**
     * The filter to search for the ExitChecklist to update in case it exists.
     */
    where: ExitChecklistWhereUniqueInput
    /**
     * In case the ExitChecklist found by the `where` argument doesn't exist, create a new ExitChecklist with this data.
     */
    create: XOR<ExitChecklistCreateInput, ExitChecklistUncheckedCreateInput>
    /**
     * In case the ExitChecklist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExitChecklistUpdateInput, ExitChecklistUncheckedUpdateInput>
  }

  /**
   * ExitChecklist delete
   */
  export type ExitChecklistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExitChecklist
     */
    select?: ExitChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExitChecklist
     */
    omit?: ExitChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExitChecklistInclude<ExtArgs> | null
    /**
     * Filter which ExitChecklist to delete.
     */
    where: ExitChecklistWhereUniqueInput
  }

  /**
   * ExitChecklist deleteMany
   */
  export type ExitChecklistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExitChecklists to delete
     */
    where?: ExitChecklistWhereInput
    /**
     * Limit how many ExitChecklists to delete.
     */
    limit?: number
  }

  /**
   * ExitChecklist without action
   */
  export type ExitChecklistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExitChecklist
     */
    select?: ExitChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExitChecklist
     */
    omit?: ExitChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExitChecklistInclude<ExtArgs> | null
  }


  /**
   * Model Finance
   */

  export type AggregateFinance = {
    _count: FinanceCountAggregateOutputType | null
    _avg: FinanceAvgAggregateOutputType | null
    _sum: FinanceSumAggregateOutputType | null
    _min: FinanceMinAggregateOutputType | null
    _max: FinanceMaxAggregateOutputType | null
  }

  export type FinanceAvgAggregateOutputType = {
    id: number | null
    salary: number | null
    bonus: number | null
    deductions: number | null
    year: number | null
  }

  export type FinanceSumAggregateOutputType = {
    id: number | null
    salary: number | null
    bonus: number | null
    deductions: number | null
    year: number | null
  }

  export type FinanceMinAggregateOutputType = {
    id: number | null
    employeeId: string | null
    salary: number | null
    bonus: number | null
    deductions: number | null
    month: string | null
    year: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinanceMaxAggregateOutputType = {
    id: number | null
    employeeId: string | null
    salary: number | null
    bonus: number | null
    deductions: number | null
    month: string | null
    year: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinanceCountAggregateOutputType = {
    id: number
    employeeId: number
    salary: number
    bonus: number
    deductions: number
    month: number
    year: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FinanceAvgAggregateInputType = {
    id?: true
    salary?: true
    bonus?: true
    deductions?: true
    year?: true
  }

  export type FinanceSumAggregateInputType = {
    id?: true
    salary?: true
    bonus?: true
    deductions?: true
    year?: true
  }

  export type FinanceMinAggregateInputType = {
    id?: true
    employeeId?: true
    salary?: true
    bonus?: true
    deductions?: true
    month?: true
    year?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinanceMaxAggregateInputType = {
    id?: true
    employeeId?: true
    salary?: true
    bonus?: true
    deductions?: true
    month?: true
    year?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinanceCountAggregateInputType = {
    id?: true
    employeeId?: true
    salary?: true
    bonus?: true
    deductions?: true
    month?: true
    year?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FinanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Finance to aggregate.
     */
    where?: FinanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finances to fetch.
     */
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Finances
    **/
    _count?: true | FinanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinanceMaxAggregateInputType
  }

  export type GetFinanceAggregateType<T extends FinanceAggregateArgs> = {
        [P in keyof T & keyof AggregateFinance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinance[P]>
      : GetScalarType<T[P], AggregateFinance[P]>
  }




  export type FinanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinanceWhereInput
    orderBy?: FinanceOrderByWithAggregationInput | FinanceOrderByWithAggregationInput[]
    by: FinanceScalarFieldEnum[] | FinanceScalarFieldEnum
    having?: FinanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinanceCountAggregateInputType | true
    _avg?: FinanceAvgAggregateInputType
    _sum?: FinanceSumAggregateInputType
    _min?: FinanceMinAggregateInputType
    _max?: FinanceMaxAggregateInputType
  }

  export type FinanceGroupByOutputType = {
    id: number
    employeeId: string
    salary: number | null
    bonus: number | null
    deductions: number | null
    month: string | null
    year: number | null
    createdAt: Date
    updatedAt: Date
    _count: FinanceCountAggregateOutputType | null
    _avg: FinanceAvgAggregateOutputType | null
    _sum: FinanceSumAggregateOutputType | null
    _min: FinanceMinAggregateOutputType | null
    _max: FinanceMaxAggregateOutputType | null
  }

  type GetFinanceGroupByPayload<T extends FinanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinanceGroupByOutputType[P]>
            : GetScalarType<T[P], FinanceGroupByOutputType[P]>
        }
      >
    >


  export type FinanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    salary?: boolean
    bonus?: boolean
    deductions?: boolean
    month?: boolean
    year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["finance"]>



  export type FinanceSelectScalar = {
    id?: boolean
    employeeId?: boolean
    salary?: boolean
    bonus?: boolean
    deductions?: boolean
    month?: boolean
    year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FinanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "salary" | "bonus" | "deductions" | "month" | "year" | "createdAt" | "updatedAt", ExtArgs["result"]["finance"]>

  export type $FinancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Finance"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employeeId: string
      salary: number | null
      bonus: number | null
      deductions: number | null
      month: string | null
      year: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["finance"]>
    composites: {}
  }

  type FinanceGetPayload<S extends boolean | null | undefined | FinanceDefaultArgs> = $Result.GetResult<Prisma.$FinancePayload, S>

  type FinanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinanceCountAggregateInputType | true
    }

  export interface FinanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Finance'], meta: { name: 'Finance' } }
    /**
     * Find zero or one Finance that matches the filter.
     * @param {FinanceFindUniqueArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinanceFindUniqueArgs>(args: SelectSubset<T, FinanceFindUniqueArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Finance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinanceFindUniqueOrThrowArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinanceFindUniqueOrThrowArgs>(args: SelectSubset<T, FinanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Finance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceFindFirstArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinanceFindFirstArgs>(args?: SelectSubset<T, FinanceFindFirstArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Finance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceFindFirstOrThrowArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinanceFindFirstOrThrowArgs>(args?: SelectSubset<T, FinanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Finances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Finances
     * const finances = await prisma.finance.findMany()
     * 
     * // Get first 10 Finances
     * const finances = await prisma.finance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financeWithIdOnly = await prisma.finance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinanceFindManyArgs>(args?: SelectSubset<T, FinanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Finance.
     * @param {FinanceCreateArgs} args - Arguments to create a Finance.
     * @example
     * // Create one Finance
     * const Finance = await prisma.finance.create({
     *   data: {
     *     // ... data to create a Finance
     *   }
     * })
     * 
     */
    create<T extends FinanceCreateArgs>(args: SelectSubset<T, FinanceCreateArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Finances.
     * @param {FinanceCreateManyArgs} args - Arguments to create many Finances.
     * @example
     * // Create many Finances
     * const finance = await prisma.finance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinanceCreateManyArgs>(args?: SelectSubset<T, FinanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Finance.
     * @param {FinanceDeleteArgs} args - Arguments to delete one Finance.
     * @example
     * // Delete one Finance
     * const Finance = await prisma.finance.delete({
     *   where: {
     *     // ... filter to delete one Finance
     *   }
     * })
     * 
     */
    delete<T extends FinanceDeleteArgs>(args: SelectSubset<T, FinanceDeleteArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Finance.
     * @param {FinanceUpdateArgs} args - Arguments to update one Finance.
     * @example
     * // Update one Finance
     * const finance = await prisma.finance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinanceUpdateArgs>(args: SelectSubset<T, FinanceUpdateArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Finances.
     * @param {FinanceDeleteManyArgs} args - Arguments to filter Finances to delete.
     * @example
     * // Delete a few Finances
     * const { count } = await prisma.finance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinanceDeleteManyArgs>(args?: SelectSubset<T, FinanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Finances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Finances
     * const finance = await prisma.finance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinanceUpdateManyArgs>(args: SelectSubset<T, FinanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Finance.
     * @param {FinanceUpsertArgs} args - Arguments to update or create a Finance.
     * @example
     * // Update or create a Finance
     * const finance = await prisma.finance.upsert({
     *   create: {
     *     // ... data to create a Finance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Finance we want to update
     *   }
     * })
     */
    upsert<T extends FinanceUpsertArgs>(args: SelectSubset<T, FinanceUpsertArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Finances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceCountArgs} args - Arguments to filter Finances to count.
     * @example
     * // Count the number of Finances
     * const count = await prisma.finance.count({
     *   where: {
     *     // ... the filter for the Finances we want to count
     *   }
     * })
    **/
    count<T extends FinanceCountArgs>(
      args?: Subset<T, FinanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Finance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FinanceAggregateArgs>(args: Subset<T, FinanceAggregateArgs>): Prisma.PrismaPromise<GetFinanceAggregateType<T>>

    /**
     * Group by Finance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FinanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinanceGroupByArgs['orderBy'] }
        : { orderBy?: FinanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FinanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Finance model
   */
  readonly fields: FinanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Finance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Finance model
   */
  interface FinanceFieldRefs {
    readonly id: FieldRef<"Finance", 'Int'>
    readonly employeeId: FieldRef<"Finance", 'String'>
    readonly salary: FieldRef<"Finance", 'Float'>
    readonly bonus: FieldRef<"Finance", 'Float'>
    readonly deductions: FieldRef<"Finance", 'Float'>
    readonly month: FieldRef<"Finance", 'String'>
    readonly year: FieldRef<"Finance", 'Int'>
    readonly createdAt: FieldRef<"Finance", 'DateTime'>
    readonly updatedAt: FieldRef<"Finance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Finance findUnique
   */
  export type FinanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Filter, which Finance to fetch.
     */
    where: FinanceWhereUniqueInput
  }

  /**
   * Finance findUniqueOrThrow
   */
  export type FinanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Filter, which Finance to fetch.
     */
    where: FinanceWhereUniqueInput
  }

  /**
   * Finance findFirst
   */
  export type FinanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Filter, which Finance to fetch.
     */
    where?: FinanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finances to fetch.
     */
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Finances.
     */
    cursor?: FinanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Finances.
     */
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[]
  }

  /**
   * Finance findFirstOrThrow
   */
  export type FinanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Filter, which Finance to fetch.
     */
    where?: FinanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finances to fetch.
     */
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Finances.
     */
    cursor?: FinanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Finances.
     */
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[]
  }

  /**
   * Finance findMany
   */
  export type FinanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Filter, which Finances to fetch.
     */
    where?: FinanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finances to fetch.
     */
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Finances.
     */
    cursor?: FinanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finances.
     */
    skip?: number
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[]
  }

  /**
   * Finance create
   */
  export type FinanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * The data needed to create a Finance.
     */
    data: XOR<FinanceCreateInput, FinanceUncheckedCreateInput>
  }

  /**
   * Finance createMany
   */
  export type FinanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Finances.
     */
    data: FinanceCreateManyInput | FinanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Finance update
   */
  export type FinanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * The data needed to update a Finance.
     */
    data: XOR<FinanceUpdateInput, FinanceUncheckedUpdateInput>
    /**
     * Choose, which Finance to update.
     */
    where: FinanceWhereUniqueInput
  }

  /**
   * Finance updateMany
   */
  export type FinanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Finances.
     */
    data: XOR<FinanceUpdateManyMutationInput, FinanceUncheckedUpdateManyInput>
    /**
     * Filter which Finances to update
     */
    where?: FinanceWhereInput
    /**
     * Limit how many Finances to update.
     */
    limit?: number
  }

  /**
   * Finance upsert
   */
  export type FinanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * The filter to search for the Finance to update in case it exists.
     */
    where: FinanceWhereUniqueInput
    /**
     * In case the Finance found by the `where` argument doesn't exist, create a new Finance with this data.
     */
    create: XOR<FinanceCreateInput, FinanceUncheckedCreateInput>
    /**
     * In case the Finance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinanceUpdateInput, FinanceUncheckedUpdateInput>
  }

  /**
   * Finance delete
   */
  export type FinanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Filter which Finance to delete.
     */
    where: FinanceWhereUniqueInput
  }

  /**
   * Finance deleteMany
   */
  export type FinanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Finances to delete
     */
    where?: FinanceWhereInput
    /**
     * Limit how many Finances to delete.
     */
    limit?: number
  }

  /**
   * Finance without action
   */
  export type FinanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
  }


  /**
   * Model Onboarding
   */

  export type AggregateOnboarding = {
    _count: OnboardingCountAggregateOutputType | null
    _avg: OnboardingAvgAggregateOutputType | null
    _sum: OnboardingSumAggregateOutputType | null
    _min: OnboardingMinAggregateOutputType | null
    _max: OnboardingMaxAggregateOutputType | null
  }

  export type OnboardingAvgAggregateOutputType = {
    id: number | null
  }

  export type OnboardingSumAggregateOutputType = {
    id: number | null
  }

  export type OnboardingMinAggregateOutputType = {
    id: number | null
    employeeId: string | null
    documentsSubmitted: boolean | null
    trainingCompleted: boolean | null
    orientationDone: boolean | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OnboardingMaxAggregateOutputType = {
    id: number | null
    employeeId: string | null
    documentsSubmitted: boolean | null
    trainingCompleted: boolean | null
    orientationDone: boolean | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OnboardingCountAggregateOutputType = {
    id: number
    employeeId: number
    documentsSubmitted: number
    trainingCompleted: number
    orientationDone: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OnboardingAvgAggregateInputType = {
    id?: true
  }

  export type OnboardingSumAggregateInputType = {
    id?: true
  }

  export type OnboardingMinAggregateInputType = {
    id?: true
    employeeId?: true
    documentsSubmitted?: true
    trainingCompleted?: true
    orientationDone?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OnboardingMaxAggregateInputType = {
    id?: true
    employeeId?: true
    documentsSubmitted?: true
    trainingCompleted?: true
    orientationDone?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OnboardingCountAggregateInputType = {
    id?: true
    employeeId?: true
    documentsSubmitted?: true
    trainingCompleted?: true
    orientationDone?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OnboardingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Onboarding to aggregate.
     */
    where?: OnboardingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Onboardings to fetch.
     */
    orderBy?: OnboardingOrderByWithRelationInput | OnboardingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OnboardingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Onboardings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Onboardings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Onboardings
    **/
    _count?: true | OnboardingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OnboardingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OnboardingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OnboardingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OnboardingMaxAggregateInputType
  }

  export type GetOnboardingAggregateType<T extends OnboardingAggregateArgs> = {
        [P in keyof T & keyof AggregateOnboarding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOnboarding[P]>
      : GetScalarType<T[P], AggregateOnboarding[P]>
  }




  export type OnboardingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OnboardingWhereInput
    orderBy?: OnboardingOrderByWithAggregationInput | OnboardingOrderByWithAggregationInput[]
    by: OnboardingScalarFieldEnum[] | OnboardingScalarFieldEnum
    having?: OnboardingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OnboardingCountAggregateInputType | true
    _avg?: OnboardingAvgAggregateInputType
    _sum?: OnboardingSumAggregateInputType
    _min?: OnboardingMinAggregateInputType
    _max?: OnboardingMaxAggregateInputType
  }

  export type OnboardingGroupByOutputType = {
    id: number
    employeeId: string
    documentsSubmitted: boolean | null
    trainingCompleted: boolean | null
    orientationDone: boolean | null
    status: string | null
    createdAt: Date
    updatedAt: Date
    _count: OnboardingCountAggregateOutputType | null
    _avg: OnboardingAvgAggregateOutputType | null
    _sum: OnboardingSumAggregateOutputType | null
    _min: OnboardingMinAggregateOutputType | null
    _max: OnboardingMaxAggregateOutputType | null
  }

  type GetOnboardingGroupByPayload<T extends OnboardingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OnboardingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OnboardingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OnboardingGroupByOutputType[P]>
            : GetScalarType<T[P], OnboardingGroupByOutputType[P]>
        }
      >
    >


  export type OnboardingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    documentsSubmitted?: boolean
    trainingCompleted?: boolean
    orientationDone?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["onboarding"]>



  export type OnboardingSelectScalar = {
    id?: boolean
    employeeId?: boolean
    documentsSubmitted?: boolean
    trainingCompleted?: boolean
    orientationDone?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OnboardingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "documentsSubmitted" | "trainingCompleted" | "orientationDone" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["onboarding"]>

  export type $OnboardingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Onboarding"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employeeId: string
      documentsSubmitted: boolean | null
      trainingCompleted: boolean | null
      orientationDone: boolean | null
      status: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["onboarding"]>
    composites: {}
  }

  type OnboardingGetPayload<S extends boolean | null | undefined | OnboardingDefaultArgs> = $Result.GetResult<Prisma.$OnboardingPayload, S>

  type OnboardingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OnboardingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OnboardingCountAggregateInputType | true
    }

  export interface OnboardingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Onboarding'], meta: { name: 'Onboarding' } }
    /**
     * Find zero or one Onboarding that matches the filter.
     * @param {OnboardingFindUniqueArgs} args - Arguments to find a Onboarding
     * @example
     * // Get one Onboarding
     * const onboarding = await prisma.onboarding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OnboardingFindUniqueArgs>(args: SelectSubset<T, OnboardingFindUniqueArgs<ExtArgs>>): Prisma__OnboardingClient<$Result.GetResult<Prisma.$OnboardingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Onboarding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OnboardingFindUniqueOrThrowArgs} args - Arguments to find a Onboarding
     * @example
     * // Get one Onboarding
     * const onboarding = await prisma.onboarding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OnboardingFindUniqueOrThrowArgs>(args: SelectSubset<T, OnboardingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OnboardingClient<$Result.GetResult<Prisma.$OnboardingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Onboarding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingFindFirstArgs} args - Arguments to find a Onboarding
     * @example
     * // Get one Onboarding
     * const onboarding = await prisma.onboarding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OnboardingFindFirstArgs>(args?: SelectSubset<T, OnboardingFindFirstArgs<ExtArgs>>): Prisma__OnboardingClient<$Result.GetResult<Prisma.$OnboardingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Onboarding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingFindFirstOrThrowArgs} args - Arguments to find a Onboarding
     * @example
     * // Get one Onboarding
     * const onboarding = await prisma.onboarding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OnboardingFindFirstOrThrowArgs>(args?: SelectSubset<T, OnboardingFindFirstOrThrowArgs<ExtArgs>>): Prisma__OnboardingClient<$Result.GetResult<Prisma.$OnboardingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Onboardings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Onboardings
     * const onboardings = await prisma.onboarding.findMany()
     * 
     * // Get first 10 Onboardings
     * const onboardings = await prisma.onboarding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const onboardingWithIdOnly = await prisma.onboarding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OnboardingFindManyArgs>(args?: SelectSubset<T, OnboardingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnboardingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Onboarding.
     * @param {OnboardingCreateArgs} args - Arguments to create a Onboarding.
     * @example
     * // Create one Onboarding
     * const Onboarding = await prisma.onboarding.create({
     *   data: {
     *     // ... data to create a Onboarding
     *   }
     * })
     * 
     */
    create<T extends OnboardingCreateArgs>(args: SelectSubset<T, OnboardingCreateArgs<ExtArgs>>): Prisma__OnboardingClient<$Result.GetResult<Prisma.$OnboardingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Onboardings.
     * @param {OnboardingCreateManyArgs} args - Arguments to create many Onboardings.
     * @example
     * // Create many Onboardings
     * const onboarding = await prisma.onboarding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OnboardingCreateManyArgs>(args?: SelectSubset<T, OnboardingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Onboarding.
     * @param {OnboardingDeleteArgs} args - Arguments to delete one Onboarding.
     * @example
     * // Delete one Onboarding
     * const Onboarding = await prisma.onboarding.delete({
     *   where: {
     *     // ... filter to delete one Onboarding
     *   }
     * })
     * 
     */
    delete<T extends OnboardingDeleteArgs>(args: SelectSubset<T, OnboardingDeleteArgs<ExtArgs>>): Prisma__OnboardingClient<$Result.GetResult<Prisma.$OnboardingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Onboarding.
     * @param {OnboardingUpdateArgs} args - Arguments to update one Onboarding.
     * @example
     * // Update one Onboarding
     * const onboarding = await prisma.onboarding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OnboardingUpdateArgs>(args: SelectSubset<T, OnboardingUpdateArgs<ExtArgs>>): Prisma__OnboardingClient<$Result.GetResult<Prisma.$OnboardingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Onboardings.
     * @param {OnboardingDeleteManyArgs} args - Arguments to filter Onboardings to delete.
     * @example
     * // Delete a few Onboardings
     * const { count } = await prisma.onboarding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OnboardingDeleteManyArgs>(args?: SelectSubset<T, OnboardingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Onboardings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Onboardings
     * const onboarding = await prisma.onboarding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OnboardingUpdateManyArgs>(args: SelectSubset<T, OnboardingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Onboarding.
     * @param {OnboardingUpsertArgs} args - Arguments to update or create a Onboarding.
     * @example
     * // Update or create a Onboarding
     * const onboarding = await prisma.onboarding.upsert({
     *   create: {
     *     // ... data to create a Onboarding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Onboarding we want to update
     *   }
     * })
     */
    upsert<T extends OnboardingUpsertArgs>(args: SelectSubset<T, OnboardingUpsertArgs<ExtArgs>>): Prisma__OnboardingClient<$Result.GetResult<Prisma.$OnboardingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Onboardings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingCountArgs} args - Arguments to filter Onboardings to count.
     * @example
     * // Count the number of Onboardings
     * const count = await prisma.onboarding.count({
     *   where: {
     *     // ... the filter for the Onboardings we want to count
     *   }
     * })
    **/
    count<T extends OnboardingCountArgs>(
      args?: Subset<T, OnboardingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OnboardingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Onboarding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OnboardingAggregateArgs>(args: Subset<T, OnboardingAggregateArgs>): Prisma.PrismaPromise<GetOnboardingAggregateType<T>>

    /**
     * Group by Onboarding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OnboardingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OnboardingGroupByArgs['orderBy'] }
        : { orderBy?: OnboardingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OnboardingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOnboardingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Onboarding model
   */
  readonly fields: OnboardingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Onboarding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OnboardingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Onboarding model
   */
  interface OnboardingFieldRefs {
    readonly id: FieldRef<"Onboarding", 'Int'>
    readonly employeeId: FieldRef<"Onboarding", 'String'>
    readonly documentsSubmitted: FieldRef<"Onboarding", 'Boolean'>
    readonly trainingCompleted: FieldRef<"Onboarding", 'Boolean'>
    readonly orientationDone: FieldRef<"Onboarding", 'Boolean'>
    readonly status: FieldRef<"Onboarding", 'String'>
    readonly createdAt: FieldRef<"Onboarding", 'DateTime'>
    readonly updatedAt: FieldRef<"Onboarding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Onboarding findUnique
   */
  export type OnboardingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboarding
     */
    select?: OnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboarding
     */
    omit?: OnboardingOmit<ExtArgs> | null
    /**
     * Filter, which Onboarding to fetch.
     */
    where: OnboardingWhereUniqueInput
  }

  /**
   * Onboarding findUniqueOrThrow
   */
  export type OnboardingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboarding
     */
    select?: OnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboarding
     */
    omit?: OnboardingOmit<ExtArgs> | null
    /**
     * Filter, which Onboarding to fetch.
     */
    where: OnboardingWhereUniqueInput
  }

  /**
   * Onboarding findFirst
   */
  export type OnboardingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboarding
     */
    select?: OnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboarding
     */
    omit?: OnboardingOmit<ExtArgs> | null
    /**
     * Filter, which Onboarding to fetch.
     */
    where?: OnboardingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Onboardings to fetch.
     */
    orderBy?: OnboardingOrderByWithRelationInput | OnboardingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Onboardings.
     */
    cursor?: OnboardingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Onboardings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Onboardings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Onboardings.
     */
    distinct?: OnboardingScalarFieldEnum | OnboardingScalarFieldEnum[]
  }

  /**
   * Onboarding findFirstOrThrow
   */
  export type OnboardingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboarding
     */
    select?: OnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboarding
     */
    omit?: OnboardingOmit<ExtArgs> | null
    /**
     * Filter, which Onboarding to fetch.
     */
    where?: OnboardingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Onboardings to fetch.
     */
    orderBy?: OnboardingOrderByWithRelationInput | OnboardingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Onboardings.
     */
    cursor?: OnboardingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Onboardings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Onboardings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Onboardings.
     */
    distinct?: OnboardingScalarFieldEnum | OnboardingScalarFieldEnum[]
  }

  /**
   * Onboarding findMany
   */
  export type OnboardingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboarding
     */
    select?: OnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboarding
     */
    omit?: OnboardingOmit<ExtArgs> | null
    /**
     * Filter, which Onboardings to fetch.
     */
    where?: OnboardingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Onboardings to fetch.
     */
    orderBy?: OnboardingOrderByWithRelationInput | OnboardingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Onboardings.
     */
    cursor?: OnboardingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Onboardings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Onboardings.
     */
    skip?: number
    distinct?: OnboardingScalarFieldEnum | OnboardingScalarFieldEnum[]
  }

  /**
   * Onboarding create
   */
  export type OnboardingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboarding
     */
    select?: OnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboarding
     */
    omit?: OnboardingOmit<ExtArgs> | null
    /**
     * The data needed to create a Onboarding.
     */
    data: XOR<OnboardingCreateInput, OnboardingUncheckedCreateInput>
  }

  /**
   * Onboarding createMany
   */
  export type OnboardingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Onboardings.
     */
    data: OnboardingCreateManyInput | OnboardingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Onboarding update
   */
  export type OnboardingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboarding
     */
    select?: OnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboarding
     */
    omit?: OnboardingOmit<ExtArgs> | null
    /**
     * The data needed to update a Onboarding.
     */
    data: XOR<OnboardingUpdateInput, OnboardingUncheckedUpdateInput>
    /**
     * Choose, which Onboarding to update.
     */
    where: OnboardingWhereUniqueInput
  }

  /**
   * Onboarding updateMany
   */
  export type OnboardingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Onboardings.
     */
    data: XOR<OnboardingUpdateManyMutationInput, OnboardingUncheckedUpdateManyInput>
    /**
     * Filter which Onboardings to update
     */
    where?: OnboardingWhereInput
    /**
     * Limit how many Onboardings to update.
     */
    limit?: number
  }

  /**
   * Onboarding upsert
   */
  export type OnboardingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboarding
     */
    select?: OnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboarding
     */
    omit?: OnboardingOmit<ExtArgs> | null
    /**
     * The filter to search for the Onboarding to update in case it exists.
     */
    where: OnboardingWhereUniqueInput
    /**
     * In case the Onboarding found by the `where` argument doesn't exist, create a new Onboarding with this data.
     */
    create: XOR<OnboardingCreateInput, OnboardingUncheckedCreateInput>
    /**
     * In case the Onboarding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OnboardingUpdateInput, OnboardingUncheckedUpdateInput>
  }

  /**
   * Onboarding delete
   */
  export type OnboardingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboarding
     */
    select?: OnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboarding
     */
    omit?: OnboardingOmit<ExtArgs> | null
    /**
     * Filter which Onboarding to delete.
     */
    where: OnboardingWhereUniqueInput
  }

  /**
   * Onboarding deleteMany
   */
  export type OnboardingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Onboardings to delete
     */
    where?: OnboardingWhereInput
    /**
     * Limit how many Onboardings to delete.
     */
    limit?: number
  }

  /**
   * Onboarding without action
   */
  export type OnboardingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboarding
     */
    select?: OnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboarding
     */
    omit?: OnboardingOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    mobile: 'mobile',
    dob: 'dob',
    bloodGroup: 'bloodGroup',
    gender: 'gender',
    cvUrl: 'cvUrl',
    idProofUrl: 'idProofUrl',
    welcomeSent: 'welcomeSent',
    designation: 'designation',
    branch: 'branch',
    department: 'department',
    subDepartment: 'subDepartment',
    grade: 'grade',
    employeeType: 'employeeType',
    zone: 'zone',
    level: 'level',
    shift: 'shift',
    email: 'email',
    doj: 'doj',
    probationDays: 'probationDays',
    trainingCompletionDate: 'trainingCompletionDate',
    permanentDate: 'permanentDate',
    sisterCompany: 'sisterCompany',
    location: 'location',
    managerId: 'managerId',
    insuranceNo: 'insuranceNo',
    insuranceCompany: 'insuranceCompany',
    insuranceExpiry: 'insuranceExpiry',
    retirementAge: 'retirementAge',
    jobDescription: 'jobDescription',
    whatsapp: 'whatsapp',
    altPhone: 'altPhone',
    emergencyNumber: 'emergencyNumber',
    companyMobile: 'companyMobile',
    currentAddress: 'currentAddress',
    permanentAddress: 'permanentAddress',
    personalEmail: 'personalEmail',
    socialLinks: 'socialLinks',
    skills: 'skills',
    hobbies: 'hobbies',
    languages: 'languages',
    specialSkills: 'specialSkills',
    maritalStatus: 'maritalStatus',
    familyMembers: 'familyMembers',
    nationality: 'nationality',
    bankHolder: 'bankHolder',
    bankName: 'bankName',
    bankBranch: 'bankBranch',
    accountType: 'accountType',
    accountNo: 'accountNo',
    ifscCode: 'ifscCode',
    crnNo: 'crnNo',
    esicNo: 'esicNo',
    panNo: 'panNo',
    pfNo: 'pfNo',
    uanNo: 'uanNo',
    micrNo: 'micrNo',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const ExEmployeeScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    email: 'email',
    mobile: 'mobile',
    designation: 'designation',
    department: 'department',
    branch: 'branch',
    exitDate: 'exitDate',
    reason: 'reason',
    eligibleForRehire: 'eligibleForRehire',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExEmployeeScalarFieldEnum = (typeof ExEmployeeScalarFieldEnum)[keyof typeof ExEmployeeScalarFieldEnum]


  export const ManagerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    mobile: 'mobile',
    department: 'department',
    branch: 'branch',
    level: 'level',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ManagerScalarFieldEnum = (typeof ManagerScalarFieldEnum)[keyof typeof ManagerScalarFieldEnum]


  export const OffboardingScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    lastWorkingDate: 'lastWorkingDate',
    reason: 'reason',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OffboardingScalarFieldEnum = (typeof OffboardingScalarFieldEnum)[keyof typeof OffboardingScalarFieldEnum]


  export const ExitChecklistScalarFieldEnum: {
    id: 'id',
    offboardingId: 'offboardingId',
    department: 'department',
    taskName: 'taskName',
    assignedTo: 'assignedTo',
    status: 'status',
    completionDate: 'completionDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExitChecklistScalarFieldEnum = (typeof ExitChecklistScalarFieldEnum)[keyof typeof ExitChecklistScalarFieldEnum]


  export const FinanceScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    salary: 'salary',
    bonus: 'bonus',
    deductions: 'deductions',
    month: 'month',
    year: 'year',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FinanceScalarFieldEnum = (typeof FinanceScalarFieldEnum)[keyof typeof FinanceScalarFieldEnum]


  export const OnboardingScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    documentsSubmitted: 'documentsSubmitted',
    trainingCompleted: 'trainingCompleted',
    orientationDone: 'orientationDone',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OnboardingScalarFieldEnum = (typeof OnboardingScalarFieldEnum)[keyof typeof OnboardingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const EmployeeOrderByRelevanceFieldEnum: {
    employeeId: 'employeeId',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    mobile: 'mobile',
    bloodGroup: 'bloodGroup',
    gender: 'gender',
    cvUrl: 'cvUrl',
    idProofUrl: 'idProofUrl',
    designation: 'designation',
    branch: 'branch',
    department: 'department',
    subDepartment: 'subDepartment',
    grade: 'grade',
    employeeType: 'employeeType',
    zone: 'zone',
    level: 'level',
    shift: 'shift',
    email: 'email',
    sisterCompany: 'sisterCompany',
    location: 'location',
    insuranceNo: 'insuranceNo',
    insuranceCompany: 'insuranceCompany',
    jobDescription: 'jobDescription',
    whatsapp: 'whatsapp',
    altPhone: 'altPhone',
    emergencyNumber: 'emergencyNumber',
    companyMobile: 'companyMobile',
    currentAddress: 'currentAddress',
    permanentAddress: 'permanentAddress',
    personalEmail: 'personalEmail',
    socialLinks: 'socialLinks',
    skills: 'skills',
    hobbies: 'hobbies',
    languages: 'languages',
    specialSkills: 'specialSkills',
    maritalStatus: 'maritalStatus',
    nationality: 'nationality',
    bankHolder: 'bankHolder',
    bankName: 'bankName',
    bankBranch: 'bankBranch',
    accountType: 'accountType',
    accountNo: 'accountNo',
    ifscCode: 'ifscCode',
    crnNo: 'crnNo',
    esicNo: 'esicNo',
    panNo: 'panNo',
    pfNo: 'pfNo',
    uanNo: 'uanNo',
    micrNo: 'micrNo',
    status: 'status'
  };

  export type EmployeeOrderByRelevanceFieldEnum = (typeof EmployeeOrderByRelevanceFieldEnum)[keyof typeof EmployeeOrderByRelevanceFieldEnum]


  export const ExEmployeeOrderByRelevanceFieldEnum: {
    employeeId: 'employeeId',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    email: 'email',
    mobile: 'mobile',
    designation: 'designation',
    department: 'department',
    branch: 'branch',
    reason: 'reason'
  };

  export type ExEmployeeOrderByRelevanceFieldEnum = (typeof ExEmployeeOrderByRelevanceFieldEnum)[keyof typeof ExEmployeeOrderByRelevanceFieldEnum]


  export const ManagerOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    mobile: 'mobile',
    department: 'department',
    branch: 'branch',
    level: 'level'
  };

  export type ManagerOrderByRelevanceFieldEnum = (typeof ManagerOrderByRelevanceFieldEnum)[keyof typeof ManagerOrderByRelevanceFieldEnum]


  export const OffboardingOrderByRelevanceFieldEnum: {
    reason: 'reason',
    status: 'status'
  };

  export type OffboardingOrderByRelevanceFieldEnum = (typeof OffboardingOrderByRelevanceFieldEnum)[keyof typeof OffboardingOrderByRelevanceFieldEnum]


  export const ExitChecklistOrderByRelevanceFieldEnum: {
    department: 'department',
    taskName: 'taskName',
    assignedTo: 'assignedTo',
    status: 'status'
  };

  export type ExitChecklistOrderByRelevanceFieldEnum = (typeof ExitChecklistOrderByRelevanceFieldEnum)[keyof typeof ExitChecklistOrderByRelevanceFieldEnum]


  export const FinanceOrderByRelevanceFieldEnum: {
    employeeId: 'employeeId',
    month: 'month'
  };

  export type FinanceOrderByRelevanceFieldEnum = (typeof FinanceOrderByRelevanceFieldEnum)[keyof typeof FinanceOrderByRelevanceFieldEnum]


  export const OnboardingOrderByRelevanceFieldEnum: {
    employeeId: 'employeeId',
    status: 'status'
  };

  export type OnboardingOrderByRelevanceFieldEnum = (typeof OnboardingOrderByRelevanceFieldEnum)[keyof typeof OnboardingOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: IntFilter<"Employee"> | number
    employeeId?: StringFilter<"Employee"> | string
    firstName?: StringNullableFilter<"Employee"> | string | null
    middleName?: StringNullableFilter<"Employee"> | string | null
    lastName?: StringNullableFilter<"Employee"> | string | null
    mobile?: StringNullableFilter<"Employee"> | string | null
    dob?: DateTimeNullableFilter<"Employee"> | Date | string | null
    bloodGroup?: StringNullableFilter<"Employee"> | string | null
    gender?: StringNullableFilter<"Employee"> | string | null
    cvUrl?: StringNullableFilter<"Employee"> | string | null
    idProofUrl?: StringNullableFilter<"Employee"> | string | null
    welcomeSent?: BoolFilter<"Employee"> | boolean
    designation?: StringNullableFilter<"Employee"> | string | null
    branch?: StringNullableFilter<"Employee"> | string | null
    department?: StringNullableFilter<"Employee"> | string | null
    subDepartment?: StringNullableFilter<"Employee"> | string | null
    grade?: StringNullableFilter<"Employee"> | string | null
    employeeType?: StringNullableFilter<"Employee"> | string | null
    zone?: StringNullableFilter<"Employee"> | string | null
    level?: StringNullableFilter<"Employee"> | string | null
    shift?: StringNullableFilter<"Employee"> | string | null
    email?: StringNullableFilter<"Employee"> | string | null
    doj?: DateTimeNullableFilter<"Employee"> | Date | string | null
    probationDays?: IntNullableFilter<"Employee"> | number | null
    trainingCompletionDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    permanentDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    sisterCompany?: StringNullableFilter<"Employee"> | string | null
    location?: StringNullableFilter<"Employee"> | string | null
    managerId?: IntNullableFilter<"Employee"> | number | null
    insuranceNo?: StringNullableFilter<"Employee"> | string | null
    insuranceCompany?: StringNullableFilter<"Employee"> | string | null
    insuranceExpiry?: DateTimeNullableFilter<"Employee"> | Date | string | null
    retirementAge?: IntNullableFilter<"Employee"> | number | null
    jobDescription?: StringNullableFilter<"Employee"> | string | null
    whatsapp?: StringNullableFilter<"Employee"> | string | null
    altPhone?: StringNullableFilter<"Employee"> | string | null
    emergencyNumber?: StringNullableFilter<"Employee"> | string | null
    companyMobile?: StringNullableFilter<"Employee"> | string | null
    currentAddress?: StringNullableFilter<"Employee"> | string | null
    permanentAddress?: StringNullableFilter<"Employee"> | string | null
    personalEmail?: StringNullableFilter<"Employee"> | string | null
    socialLinks?: StringNullableFilter<"Employee"> | string | null
    skills?: StringNullableFilter<"Employee"> | string | null
    hobbies?: StringNullableFilter<"Employee"> | string | null
    languages?: StringNullableFilter<"Employee"> | string | null
    specialSkills?: StringNullableFilter<"Employee"> | string | null
    maritalStatus?: StringNullableFilter<"Employee"> | string | null
    familyMembers?: IntNullableFilter<"Employee"> | number | null
    nationality?: StringNullableFilter<"Employee"> | string | null
    bankHolder?: StringNullableFilter<"Employee"> | string | null
    bankName?: StringNullableFilter<"Employee"> | string | null
    bankBranch?: StringNullableFilter<"Employee"> | string | null
    accountType?: StringNullableFilter<"Employee"> | string | null
    accountNo?: StringNullableFilter<"Employee"> | string | null
    ifscCode?: StringNullableFilter<"Employee"> | string | null
    crnNo?: StringNullableFilter<"Employee"> | string | null
    esicNo?: StringNullableFilter<"Employee"> | string | null
    panNo?: StringNullableFilter<"Employee"> | string | null
    pfNo?: StringNullableFilter<"Employee"> | string | null
    uanNo?: StringNullableFilter<"Employee"> | string | null
    micrNo?: StringNullableFilter<"Employee"> | string | null
    status?: StringFilter<"Employee"> | string
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    manager?: XOR<ManagerNullableScalarRelationFilter, ManagerWhereInput> | null
    offboardings?: OffboardingListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    cvUrl?: SortOrderInput | SortOrder
    idProofUrl?: SortOrderInput | SortOrder
    welcomeSent?: SortOrder
    designation?: SortOrderInput | SortOrder
    branch?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    subDepartment?: SortOrderInput | SortOrder
    grade?: SortOrderInput | SortOrder
    employeeType?: SortOrderInput | SortOrder
    zone?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    shift?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    doj?: SortOrderInput | SortOrder
    probationDays?: SortOrderInput | SortOrder
    trainingCompletionDate?: SortOrderInput | SortOrder
    permanentDate?: SortOrderInput | SortOrder
    sisterCompany?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    insuranceNo?: SortOrderInput | SortOrder
    insuranceCompany?: SortOrderInput | SortOrder
    insuranceExpiry?: SortOrderInput | SortOrder
    retirementAge?: SortOrderInput | SortOrder
    jobDescription?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    altPhone?: SortOrderInput | SortOrder
    emergencyNumber?: SortOrderInput | SortOrder
    companyMobile?: SortOrderInput | SortOrder
    currentAddress?: SortOrderInput | SortOrder
    permanentAddress?: SortOrderInput | SortOrder
    personalEmail?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    hobbies?: SortOrderInput | SortOrder
    languages?: SortOrderInput | SortOrder
    specialSkills?: SortOrderInput | SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    familyMembers?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    bankHolder?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    bankBranch?: SortOrderInput | SortOrder
    accountType?: SortOrderInput | SortOrder
    accountNo?: SortOrderInput | SortOrder
    ifscCode?: SortOrderInput | SortOrder
    crnNo?: SortOrderInput | SortOrder
    esicNo?: SortOrderInput | SortOrder
    panNo?: SortOrderInput | SortOrder
    pfNo?: SortOrderInput | SortOrder
    uanNo?: SortOrderInput | SortOrder
    micrNo?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    manager?: ManagerOrderByWithRelationInput
    offboardings?: OffboardingOrderByRelationAggregateInput
    _relevance?: EmployeeOrderByRelevanceInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    employeeId?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    firstName?: StringNullableFilter<"Employee"> | string | null
    middleName?: StringNullableFilter<"Employee"> | string | null
    lastName?: StringNullableFilter<"Employee"> | string | null
    mobile?: StringNullableFilter<"Employee"> | string | null
    dob?: DateTimeNullableFilter<"Employee"> | Date | string | null
    bloodGroup?: StringNullableFilter<"Employee"> | string | null
    gender?: StringNullableFilter<"Employee"> | string | null
    cvUrl?: StringNullableFilter<"Employee"> | string | null
    idProofUrl?: StringNullableFilter<"Employee"> | string | null
    welcomeSent?: BoolFilter<"Employee"> | boolean
    designation?: StringNullableFilter<"Employee"> | string | null
    branch?: StringNullableFilter<"Employee"> | string | null
    department?: StringNullableFilter<"Employee"> | string | null
    subDepartment?: StringNullableFilter<"Employee"> | string | null
    grade?: StringNullableFilter<"Employee"> | string | null
    employeeType?: StringNullableFilter<"Employee"> | string | null
    zone?: StringNullableFilter<"Employee"> | string | null
    level?: StringNullableFilter<"Employee"> | string | null
    shift?: StringNullableFilter<"Employee"> | string | null
    email?: StringNullableFilter<"Employee"> | string | null
    doj?: DateTimeNullableFilter<"Employee"> | Date | string | null
    probationDays?: IntNullableFilter<"Employee"> | number | null
    trainingCompletionDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    permanentDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    sisterCompany?: StringNullableFilter<"Employee"> | string | null
    location?: StringNullableFilter<"Employee"> | string | null
    managerId?: IntNullableFilter<"Employee"> | number | null
    insuranceNo?: StringNullableFilter<"Employee"> | string | null
    insuranceCompany?: StringNullableFilter<"Employee"> | string | null
    insuranceExpiry?: DateTimeNullableFilter<"Employee"> | Date | string | null
    retirementAge?: IntNullableFilter<"Employee"> | number | null
    jobDescription?: StringNullableFilter<"Employee"> | string | null
    whatsapp?: StringNullableFilter<"Employee"> | string | null
    altPhone?: StringNullableFilter<"Employee"> | string | null
    emergencyNumber?: StringNullableFilter<"Employee"> | string | null
    companyMobile?: StringNullableFilter<"Employee"> | string | null
    currentAddress?: StringNullableFilter<"Employee"> | string | null
    permanentAddress?: StringNullableFilter<"Employee"> | string | null
    personalEmail?: StringNullableFilter<"Employee"> | string | null
    socialLinks?: StringNullableFilter<"Employee"> | string | null
    skills?: StringNullableFilter<"Employee"> | string | null
    hobbies?: StringNullableFilter<"Employee"> | string | null
    languages?: StringNullableFilter<"Employee"> | string | null
    specialSkills?: StringNullableFilter<"Employee"> | string | null
    maritalStatus?: StringNullableFilter<"Employee"> | string | null
    familyMembers?: IntNullableFilter<"Employee"> | number | null
    nationality?: StringNullableFilter<"Employee"> | string | null
    bankHolder?: StringNullableFilter<"Employee"> | string | null
    bankName?: StringNullableFilter<"Employee"> | string | null
    bankBranch?: StringNullableFilter<"Employee"> | string | null
    accountType?: StringNullableFilter<"Employee"> | string | null
    accountNo?: StringNullableFilter<"Employee"> | string | null
    ifscCode?: StringNullableFilter<"Employee"> | string | null
    crnNo?: StringNullableFilter<"Employee"> | string | null
    esicNo?: StringNullableFilter<"Employee"> | string | null
    panNo?: StringNullableFilter<"Employee"> | string | null
    pfNo?: StringNullableFilter<"Employee"> | string | null
    uanNo?: StringNullableFilter<"Employee"> | string | null
    micrNo?: StringNullableFilter<"Employee"> | string | null
    status?: StringFilter<"Employee"> | string
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    manager?: XOR<ManagerNullableScalarRelationFilter, ManagerWhereInput> | null
    offboardings?: OffboardingListRelationFilter
  }, "id" | "employeeId">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    cvUrl?: SortOrderInput | SortOrder
    idProofUrl?: SortOrderInput | SortOrder
    welcomeSent?: SortOrder
    designation?: SortOrderInput | SortOrder
    branch?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    subDepartment?: SortOrderInput | SortOrder
    grade?: SortOrderInput | SortOrder
    employeeType?: SortOrderInput | SortOrder
    zone?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    shift?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    doj?: SortOrderInput | SortOrder
    probationDays?: SortOrderInput | SortOrder
    trainingCompletionDate?: SortOrderInput | SortOrder
    permanentDate?: SortOrderInput | SortOrder
    sisterCompany?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    insuranceNo?: SortOrderInput | SortOrder
    insuranceCompany?: SortOrderInput | SortOrder
    insuranceExpiry?: SortOrderInput | SortOrder
    retirementAge?: SortOrderInput | SortOrder
    jobDescription?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    altPhone?: SortOrderInput | SortOrder
    emergencyNumber?: SortOrderInput | SortOrder
    companyMobile?: SortOrderInput | SortOrder
    currentAddress?: SortOrderInput | SortOrder
    permanentAddress?: SortOrderInput | SortOrder
    personalEmail?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    hobbies?: SortOrderInput | SortOrder
    languages?: SortOrderInput | SortOrder
    specialSkills?: SortOrderInput | SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    familyMembers?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    bankHolder?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    bankBranch?: SortOrderInput | SortOrder
    accountType?: SortOrderInput | SortOrder
    accountNo?: SortOrderInput | SortOrder
    ifscCode?: SortOrderInput | SortOrder
    crnNo?: SortOrderInput | SortOrder
    esicNo?: SortOrderInput | SortOrder
    panNo?: SortOrderInput | SortOrder
    pfNo?: SortOrderInput | SortOrder
    uanNo?: SortOrderInput | SortOrder
    micrNo?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employee"> | number
    employeeId?: StringWithAggregatesFilter<"Employee"> | string
    firstName?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    middleName?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    mobile?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    dob?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    bloodGroup?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    gender?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    cvUrl?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    idProofUrl?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    welcomeSent?: BoolWithAggregatesFilter<"Employee"> | boolean
    designation?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    branch?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    department?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    subDepartment?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    grade?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    employeeType?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    zone?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    level?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    shift?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    email?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    doj?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    probationDays?: IntNullableWithAggregatesFilter<"Employee"> | number | null
    trainingCompletionDate?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    permanentDate?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    sisterCompany?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    location?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    managerId?: IntNullableWithAggregatesFilter<"Employee"> | number | null
    insuranceNo?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    insuranceCompany?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    insuranceExpiry?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    retirementAge?: IntNullableWithAggregatesFilter<"Employee"> | number | null
    jobDescription?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    whatsapp?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    altPhone?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    emergencyNumber?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    companyMobile?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    currentAddress?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    permanentAddress?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    personalEmail?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    socialLinks?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    skills?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    hobbies?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    languages?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    specialSkills?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    maritalStatus?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    familyMembers?: IntNullableWithAggregatesFilter<"Employee"> | number | null
    nationality?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    bankHolder?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    bankName?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    bankBranch?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    accountType?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    accountNo?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    ifscCode?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    crnNo?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    esicNo?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    panNo?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    pfNo?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    uanNo?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    micrNo?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    status?: StringWithAggregatesFilter<"Employee"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type ExEmployeeWhereInput = {
    AND?: ExEmployeeWhereInput | ExEmployeeWhereInput[]
    OR?: ExEmployeeWhereInput[]
    NOT?: ExEmployeeWhereInput | ExEmployeeWhereInput[]
    id?: IntFilter<"ExEmployee"> | number
    employeeId?: StringFilter<"ExEmployee"> | string
    firstName?: StringNullableFilter<"ExEmployee"> | string | null
    middleName?: StringNullableFilter<"ExEmployee"> | string | null
    lastName?: StringNullableFilter<"ExEmployee"> | string | null
    email?: StringNullableFilter<"ExEmployee"> | string | null
    mobile?: StringNullableFilter<"ExEmployee"> | string | null
    designation?: StringNullableFilter<"ExEmployee"> | string | null
    department?: StringNullableFilter<"ExEmployee"> | string | null
    branch?: StringNullableFilter<"ExEmployee"> | string | null
    exitDate?: DateTimeNullableFilter<"ExEmployee"> | Date | string | null
    reason?: StringNullableFilter<"ExEmployee"> | string | null
    eligibleForRehire?: BoolNullableFilter<"ExEmployee"> | boolean | null
    createdAt?: DateTimeFilter<"ExEmployee"> | Date | string
    updatedAt?: DateTimeFilter<"ExEmployee"> | Date | string
  }

  export type ExEmployeeOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    designation?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    branch?: SortOrderInput | SortOrder
    exitDate?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    eligibleForRehire?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: ExEmployeeOrderByRelevanceInput
  }

  export type ExEmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExEmployeeWhereInput | ExEmployeeWhereInput[]
    OR?: ExEmployeeWhereInput[]
    NOT?: ExEmployeeWhereInput | ExEmployeeWhereInput[]
    employeeId?: StringFilter<"ExEmployee"> | string
    firstName?: StringNullableFilter<"ExEmployee"> | string | null
    middleName?: StringNullableFilter<"ExEmployee"> | string | null
    lastName?: StringNullableFilter<"ExEmployee"> | string | null
    email?: StringNullableFilter<"ExEmployee"> | string | null
    mobile?: StringNullableFilter<"ExEmployee"> | string | null
    designation?: StringNullableFilter<"ExEmployee"> | string | null
    department?: StringNullableFilter<"ExEmployee"> | string | null
    branch?: StringNullableFilter<"ExEmployee"> | string | null
    exitDate?: DateTimeNullableFilter<"ExEmployee"> | Date | string | null
    reason?: StringNullableFilter<"ExEmployee"> | string | null
    eligibleForRehire?: BoolNullableFilter<"ExEmployee"> | boolean | null
    createdAt?: DateTimeFilter<"ExEmployee"> | Date | string
    updatedAt?: DateTimeFilter<"ExEmployee"> | Date | string
  }, "id">

  export type ExEmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    designation?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    branch?: SortOrderInput | SortOrder
    exitDate?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    eligibleForRehire?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExEmployeeCountOrderByAggregateInput
    _avg?: ExEmployeeAvgOrderByAggregateInput
    _max?: ExEmployeeMaxOrderByAggregateInput
    _min?: ExEmployeeMinOrderByAggregateInput
    _sum?: ExEmployeeSumOrderByAggregateInput
  }

  export type ExEmployeeScalarWhereWithAggregatesInput = {
    AND?: ExEmployeeScalarWhereWithAggregatesInput | ExEmployeeScalarWhereWithAggregatesInput[]
    OR?: ExEmployeeScalarWhereWithAggregatesInput[]
    NOT?: ExEmployeeScalarWhereWithAggregatesInput | ExEmployeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExEmployee"> | number
    employeeId?: StringWithAggregatesFilter<"ExEmployee"> | string
    firstName?: StringNullableWithAggregatesFilter<"ExEmployee"> | string | null
    middleName?: StringNullableWithAggregatesFilter<"ExEmployee"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"ExEmployee"> | string | null
    email?: StringNullableWithAggregatesFilter<"ExEmployee"> | string | null
    mobile?: StringNullableWithAggregatesFilter<"ExEmployee"> | string | null
    designation?: StringNullableWithAggregatesFilter<"ExEmployee"> | string | null
    department?: StringNullableWithAggregatesFilter<"ExEmployee"> | string | null
    branch?: StringNullableWithAggregatesFilter<"ExEmployee"> | string | null
    exitDate?: DateTimeNullableWithAggregatesFilter<"ExEmployee"> | Date | string | null
    reason?: StringNullableWithAggregatesFilter<"ExEmployee"> | string | null
    eligibleForRehire?: BoolNullableWithAggregatesFilter<"ExEmployee"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"ExEmployee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExEmployee"> | Date | string
  }

  export type ManagerWhereInput = {
    AND?: ManagerWhereInput | ManagerWhereInput[]
    OR?: ManagerWhereInput[]
    NOT?: ManagerWhereInput | ManagerWhereInput[]
    id?: IntFilter<"Manager"> | number
    name?: StringNullableFilter<"Manager"> | string | null
    email?: StringNullableFilter<"Manager"> | string | null
    mobile?: StringNullableFilter<"Manager"> | string | null
    department?: StringNullableFilter<"Manager"> | string | null
    branch?: StringNullableFilter<"Manager"> | string | null
    level?: StringNullableFilter<"Manager"> | string | null
    active?: BoolNullableFilter<"Manager"> | boolean | null
    createdAt?: DateTimeFilter<"Manager"> | Date | string
    updatedAt?: DateTimeFilter<"Manager"> | Date | string
    employees?: EmployeeListRelationFilter
  }

  export type ManagerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    branch?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employees?: EmployeeOrderByRelationAggregateInput
    _relevance?: ManagerOrderByRelevanceInput
  }

  export type ManagerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ManagerWhereInput | ManagerWhereInput[]
    OR?: ManagerWhereInput[]
    NOT?: ManagerWhereInput | ManagerWhereInput[]
    name?: StringNullableFilter<"Manager"> | string | null
    email?: StringNullableFilter<"Manager"> | string | null
    mobile?: StringNullableFilter<"Manager"> | string | null
    department?: StringNullableFilter<"Manager"> | string | null
    branch?: StringNullableFilter<"Manager"> | string | null
    level?: StringNullableFilter<"Manager"> | string | null
    active?: BoolNullableFilter<"Manager"> | boolean | null
    createdAt?: DateTimeFilter<"Manager"> | Date | string
    updatedAt?: DateTimeFilter<"Manager"> | Date | string
    employees?: EmployeeListRelationFilter
  }, "id">

  export type ManagerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    branch?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ManagerCountOrderByAggregateInput
    _avg?: ManagerAvgOrderByAggregateInput
    _max?: ManagerMaxOrderByAggregateInput
    _min?: ManagerMinOrderByAggregateInput
    _sum?: ManagerSumOrderByAggregateInput
  }

  export type ManagerScalarWhereWithAggregatesInput = {
    AND?: ManagerScalarWhereWithAggregatesInput | ManagerScalarWhereWithAggregatesInput[]
    OR?: ManagerScalarWhereWithAggregatesInput[]
    NOT?: ManagerScalarWhereWithAggregatesInput | ManagerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Manager"> | number
    name?: StringNullableWithAggregatesFilter<"Manager"> | string | null
    email?: StringNullableWithAggregatesFilter<"Manager"> | string | null
    mobile?: StringNullableWithAggregatesFilter<"Manager"> | string | null
    department?: StringNullableWithAggregatesFilter<"Manager"> | string | null
    branch?: StringNullableWithAggregatesFilter<"Manager"> | string | null
    level?: StringNullableWithAggregatesFilter<"Manager"> | string | null
    active?: BoolNullableWithAggregatesFilter<"Manager"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Manager"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Manager"> | Date | string
  }

  export type OffboardingWhereInput = {
    AND?: OffboardingWhereInput | OffboardingWhereInput[]
    OR?: OffboardingWhereInput[]
    NOT?: OffboardingWhereInput | OffboardingWhereInput[]
    id?: IntFilter<"Offboarding"> | number
    employeeId?: IntFilter<"Offboarding"> | number
    lastWorkingDate?: DateTimeNullableFilter<"Offboarding"> | Date | string | null
    reason?: StringNullableFilter<"Offboarding"> | string | null
    status?: StringFilter<"Offboarding"> | string
    createdAt?: DateTimeFilter<"Offboarding"> | Date | string
    updatedAt?: DateTimeFilter<"Offboarding"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    checklists?: ExitChecklistListRelationFilter
  }

  export type OffboardingOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    lastWorkingDate?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    checklists?: ExitChecklistOrderByRelationAggregateInput
    _relevance?: OffboardingOrderByRelevanceInput
  }

  export type OffboardingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OffboardingWhereInput | OffboardingWhereInput[]
    OR?: OffboardingWhereInput[]
    NOT?: OffboardingWhereInput | OffboardingWhereInput[]
    employeeId?: IntFilter<"Offboarding"> | number
    lastWorkingDate?: DateTimeNullableFilter<"Offboarding"> | Date | string | null
    reason?: StringNullableFilter<"Offboarding"> | string | null
    status?: StringFilter<"Offboarding"> | string
    createdAt?: DateTimeFilter<"Offboarding"> | Date | string
    updatedAt?: DateTimeFilter<"Offboarding"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    checklists?: ExitChecklistListRelationFilter
  }, "id">

  export type OffboardingOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    lastWorkingDate?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OffboardingCountOrderByAggregateInput
    _avg?: OffboardingAvgOrderByAggregateInput
    _max?: OffboardingMaxOrderByAggregateInput
    _min?: OffboardingMinOrderByAggregateInput
    _sum?: OffboardingSumOrderByAggregateInput
  }

  export type OffboardingScalarWhereWithAggregatesInput = {
    AND?: OffboardingScalarWhereWithAggregatesInput | OffboardingScalarWhereWithAggregatesInput[]
    OR?: OffboardingScalarWhereWithAggregatesInput[]
    NOT?: OffboardingScalarWhereWithAggregatesInput | OffboardingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Offboarding"> | number
    employeeId?: IntWithAggregatesFilter<"Offboarding"> | number
    lastWorkingDate?: DateTimeNullableWithAggregatesFilter<"Offboarding"> | Date | string | null
    reason?: StringNullableWithAggregatesFilter<"Offboarding"> | string | null
    status?: StringWithAggregatesFilter<"Offboarding"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Offboarding"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Offboarding"> | Date | string
  }

  export type ExitChecklistWhereInput = {
    AND?: ExitChecklistWhereInput | ExitChecklistWhereInput[]
    OR?: ExitChecklistWhereInput[]
    NOT?: ExitChecklistWhereInput | ExitChecklistWhereInput[]
    id?: IntFilter<"ExitChecklist"> | number
    offboardingId?: IntFilter<"ExitChecklist"> | number
    department?: StringFilter<"ExitChecklist"> | string
    taskName?: StringFilter<"ExitChecklist"> | string
    assignedTo?: StringNullableFilter<"ExitChecklist"> | string | null
    status?: StringFilter<"ExitChecklist"> | string
    completionDate?: DateTimeNullableFilter<"ExitChecklist"> | Date | string | null
    createdAt?: DateTimeFilter<"ExitChecklist"> | Date | string
    updatedAt?: DateTimeFilter<"ExitChecklist"> | Date | string
    offboarding?: XOR<OffboardingScalarRelationFilter, OffboardingWhereInput>
  }

  export type ExitChecklistOrderByWithRelationInput = {
    id?: SortOrder
    offboardingId?: SortOrder
    department?: SortOrder
    taskName?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    status?: SortOrder
    completionDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    offboarding?: OffboardingOrderByWithRelationInput
    _relevance?: ExitChecklistOrderByRelevanceInput
  }

  export type ExitChecklistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExitChecklistWhereInput | ExitChecklistWhereInput[]
    OR?: ExitChecklistWhereInput[]
    NOT?: ExitChecklistWhereInput | ExitChecklistWhereInput[]
    offboardingId?: IntFilter<"ExitChecklist"> | number
    department?: StringFilter<"ExitChecklist"> | string
    taskName?: StringFilter<"ExitChecklist"> | string
    assignedTo?: StringNullableFilter<"ExitChecklist"> | string | null
    status?: StringFilter<"ExitChecklist"> | string
    completionDate?: DateTimeNullableFilter<"ExitChecklist"> | Date | string | null
    createdAt?: DateTimeFilter<"ExitChecklist"> | Date | string
    updatedAt?: DateTimeFilter<"ExitChecklist"> | Date | string
    offboarding?: XOR<OffboardingScalarRelationFilter, OffboardingWhereInput>
  }, "id">

  export type ExitChecklistOrderByWithAggregationInput = {
    id?: SortOrder
    offboardingId?: SortOrder
    department?: SortOrder
    taskName?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    status?: SortOrder
    completionDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExitChecklistCountOrderByAggregateInput
    _avg?: ExitChecklistAvgOrderByAggregateInput
    _max?: ExitChecklistMaxOrderByAggregateInput
    _min?: ExitChecklistMinOrderByAggregateInput
    _sum?: ExitChecklistSumOrderByAggregateInput
  }

  export type ExitChecklistScalarWhereWithAggregatesInput = {
    AND?: ExitChecklistScalarWhereWithAggregatesInput | ExitChecklistScalarWhereWithAggregatesInput[]
    OR?: ExitChecklistScalarWhereWithAggregatesInput[]
    NOT?: ExitChecklistScalarWhereWithAggregatesInput | ExitChecklistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExitChecklist"> | number
    offboardingId?: IntWithAggregatesFilter<"ExitChecklist"> | number
    department?: StringWithAggregatesFilter<"ExitChecklist"> | string
    taskName?: StringWithAggregatesFilter<"ExitChecklist"> | string
    assignedTo?: StringNullableWithAggregatesFilter<"ExitChecklist"> | string | null
    status?: StringWithAggregatesFilter<"ExitChecklist"> | string
    completionDate?: DateTimeNullableWithAggregatesFilter<"ExitChecklist"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ExitChecklist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExitChecklist"> | Date | string
  }

  export type FinanceWhereInput = {
    AND?: FinanceWhereInput | FinanceWhereInput[]
    OR?: FinanceWhereInput[]
    NOT?: FinanceWhereInput | FinanceWhereInput[]
    id?: IntFilter<"Finance"> | number
    employeeId?: StringFilter<"Finance"> | string
    salary?: FloatNullableFilter<"Finance"> | number | null
    bonus?: FloatNullableFilter<"Finance"> | number | null
    deductions?: FloatNullableFilter<"Finance"> | number | null
    month?: StringNullableFilter<"Finance"> | string | null
    year?: IntNullableFilter<"Finance"> | number | null
    createdAt?: DateTimeFilter<"Finance"> | Date | string
    updatedAt?: DateTimeFilter<"Finance"> | Date | string
  }

  export type FinanceOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    salary?: SortOrderInput | SortOrder
    bonus?: SortOrderInput | SortOrder
    deductions?: SortOrderInput | SortOrder
    month?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: FinanceOrderByRelevanceInput
  }

  export type FinanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FinanceWhereInput | FinanceWhereInput[]
    OR?: FinanceWhereInput[]
    NOT?: FinanceWhereInput | FinanceWhereInput[]
    employeeId?: StringFilter<"Finance"> | string
    salary?: FloatNullableFilter<"Finance"> | number | null
    bonus?: FloatNullableFilter<"Finance"> | number | null
    deductions?: FloatNullableFilter<"Finance"> | number | null
    month?: StringNullableFilter<"Finance"> | string | null
    year?: IntNullableFilter<"Finance"> | number | null
    createdAt?: DateTimeFilter<"Finance"> | Date | string
    updatedAt?: DateTimeFilter<"Finance"> | Date | string
  }, "id">

  export type FinanceOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    salary?: SortOrderInput | SortOrder
    bonus?: SortOrderInput | SortOrder
    deductions?: SortOrderInput | SortOrder
    month?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FinanceCountOrderByAggregateInput
    _avg?: FinanceAvgOrderByAggregateInput
    _max?: FinanceMaxOrderByAggregateInput
    _min?: FinanceMinOrderByAggregateInput
    _sum?: FinanceSumOrderByAggregateInput
  }

  export type FinanceScalarWhereWithAggregatesInput = {
    AND?: FinanceScalarWhereWithAggregatesInput | FinanceScalarWhereWithAggregatesInput[]
    OR?: FinanceScalarWhereWithAggregatesInput[]
    NOT?: FinanceScalarWhereWithAggregatesInput | FinanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Finance"> | number
    employeeId?: StringWithAggregatesFilter<"Finance"> | string
    salary?: FloatNullableWithAggregatesFilter<"Finance"> | number | null
    bonus?: FloatNullableWithAggregatesFilter<"Finance"> | number | null
    deductions?: FloatNullableWithAggregatesFilter<"Finance"> | number | null
    month?: StringNullableWithAggregatesFilter<"Finance"> | string | null
    year?: IntNullableWithAggregatesFilter<"Finance"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Finance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Finance"> | Date | string
  }

  export type OnboardingWhereInput = {
    AND?: OnboardingWhereInput | OnboardingWhereInput[]
    OR?: OnboardingWhereInput[]
    NOT?: OnboardingWhereInput | OnboardingWhereInput[]
    id?: IntFilter<"Onboarding"> | number
    employeeId?: StringFilter<"Onboarding"> | string
    documentsSubmitted?: BoolNullableFilter<"Onboarding"> | boolean | null
    trainingCompleted?: BoolNullableFilter<"Onboarding"> | boolean | null
    orientationDone?: BoolNullableFilter<"Onboarding"> | boolean | null
    status?: StringNullableFilter<"Onboarding"> | string | null
    createdAt?: DateTimeFilter<"Onboarding"> | Date | string
    updatedAt?: DateTimeFilter<"Onboarding"> | Date | string
  }

  export type OnboardingOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    documentsSubmitted?: SortOrderInput | SortOrder
    trainingCompleted?: SortOrderInput | SortOrder
    orientationDone?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: OnboardingOrderByRelevanceInput
  }

  export type OnboardingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OnboardingWhereInput | OnboardingWhereInput[]
    OR?: OnboardingWhereInput[]
    NOT?: OnboardingWhereInput | OnboardingWhereInput[]
    employeeId?: StringFilter<"Onboarding"> | string
    documentsSubmitted?: BoolNullableFilter<"Onboarding"> | boolean | null
    trainingCompleted?: BoolNullableFilter<"Onboarding"> | boolean | null
    orientationDone?: BoolNullableFilter<"Onboarding"> | boolean | null
    status?: StringNullableFilter<"Onboarding"> | string | null
    createdAt?: DateTimeFilter<"Onboarding"> | Date | string
    updatedAt?: DateTimeFilter<"Onboarding"> | Date | string
  }, "id">

  export type OnboardingOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    documentsSubmitted?: SortOrderInput | SortOrder
    trainingCompleted?: SortOrderInput | SortOrder
    orientationDone?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OnboardingCountOrderByAggregateInput
    _avg?: OnboardingAvgOrderByAggregateInput
    _max?: OnboardingMaxOrderByAggregateInput
    _min?: OnboardingMinOrderByAggregateInput
    _sum?: OnboardingSumOrderByAggregateInput
  }

  export type OnboardingScalarWhereWithAggregatesInput = {
    AND?: OnboardingScalarWhereWithAggregatesInput | OnboardingScalarWhereWithAggregatesInput[]
    OR?: OnboardingScalarWhereWithAggregatesInput[]
    NOT?: OnboardingScalarWhereWithAggregatesInput | OnboardingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Onboarding"> | number
    employeeId?: StringWithAggregatesFilter<"Onboarding"> | string
    documentsSubmitted?: BoolNullableWithAggregatesFilter<"Onboarding"> | boolean | null
    trainingCompleted?: BoolNullableWithAggregatesFilter<"Onboarding"> | boolean | null
    orientationDone?: BoolNullableWithAggregatesFilter<"Onboarding"> | boolean | null
    status?: StringNullableWithAggregatesFilter<"Onboarding"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Onboarding"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Onboarding"> | Date | string
  }

  export type EmployeeCreateInput = {
    employeeId: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    mobile?: string | null
    dob?: Date | string | null
    bloodGroup?: string | null
    gender?: string | null
    cvUrl?: string | null
    idProofUrl?: string | null
    welcomeSent?: boolean
    designation?: string | null
    branch?: string | null
    department?: string | null
    subDepartment?: string | null
    grade?: string | null
    employeeType?: string | null
    zone?: string | null
    level?: string | null
    shift?: string | null
    email?: string | null
    doj?: Date | string | null
    probationDays?: number | null
    trainingCompletionDate?: Date | string | null
    permanentDate?: Date | string | null
    sisterCompany?: string | null
    location?: string | null
    insuranceNo?: string | null
    insuranceCompany?: string | null
    insuranceExpiry?: Date | string | null
    retirementAge?: number | null
    jobDescription?: string | null
    whatsapp?: string | null
    altPhone?: string | null
    emergencyNumber?: string | null
    companyMobile?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    personalEmail?: string | null
    socialLinks?: string | null
    skills?: string | null
    hobbies?: string | null
    languages?: string | null
    specialSkills?: string | null
    maritalStatus?: string | null
    familyMembers?: number | null
    nationality?: string | null
    bankHolder?: string | null
    bankName?: string | null
    bankBranch?: string | null
    accountType?: string | null
    accountNo?: string | null
    ifscCode?: string | null
    crnNo?: string | null
    esicNo?: string | null
    panNo?: string | null
    pfNo?: string | null
    uanNo?: string | null
    micrNo?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    manager?: ManagerCreateNestedOneWithoutEmployeesInput
    offboardings?: OffboardingCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: number
    employeeId: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    mobile?: string | null
    dob?: Date | string | null
    bloodGroup?: string | null
    gender?: string | null
    cvUrl?: string | null
    idProofUrl?: string | null
    welcomeSent?: boolean
    designation?: string | null
    branch?: string | null
    department?: string | null
    subDepartment?: string | null
    grade?: string | null
    employeeType?: string | null
    zone?: string | null
    level?: string | null
    shift?: string | null
    email?: string | null
    doj?: Date | string | null
    probationDays?: number | null
    trainingCompletionDate?: Date | string | null
    permanentDate?: Date | string | null
    sisterCompany?: string | null
    location?: string | null
    managerId?: number | null
    insuranceNo?: string | null
    insuranceCompany?: string | null
    insuranceExpiry?: Date | string | null
    retirementAge?: number | null
    jobDescription?: string | null
    whatsapp?: string | null
    altPhone?: string | null
    emergencyNumber?: string | null
    companyMobile?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    personalEmail?: string | null
    socialLinks?: string | null
    skills?: string | null
    hobbies?: string | null
    languages?: string | null
    specialSkills?: string | null
    maritalStatus?: string | null
    familyMembers?: number | null
    nationality?: string | null
    bankHolder?: string | null
    bankName?: string | null
    bankBranch?: string | null
    accountType?: string | null
    accountNo?: string | null
    ifscCode?: string | null
    crnNo?: string | null
    esicNo?: string | null
    panNo?: string | null
    pfNo?: string | null
    uanNo?: string | null
    micrNo?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    offboardings?: OffboardingUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    cvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    idProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeSent?: BoolFieldUpdateOperationsInput | boolean
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    subDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    employeeType?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    doj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    probationDays?: NullableIntFieldUpdateOperationsInput | number | null
    trainingCompletionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permanentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sisterCompany?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceNo?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retirementAge?: NullableIntFieldUpdateOperationsInput | number | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    altPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyMobile?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    hobbies?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    specialSkills?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    familyMembers?: NullableIntFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    bankHolder?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranch?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    accountNo?: NullableStringFieldUpdateOperationsInput | string | null
    ifscCode?: NullableStringFieldUpdateOperationsInput | string | null
    crnNo?: NullableStringFieldUpdateOperationsInput | string | null
    esicNo?: NullableStringFieldUpdateOperationsInput | string | null
    panNo?: NullableStringFieldUpdateOperationsInput | string | null
    pfNo?: NullableStringFieldUpdateOperationsInput | string | null
    uanNo?: NullableStringFieldUpdateOperationsInput | string | null
    micrNo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: ManagerUpdateOneWithoutEmployeesNestedInput
    offboardings?: OffboardingUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    cvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    idProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeSent?: BoolFieldUpdateOperationsInput | boolean
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    subDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    employeeType?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    doj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    probationDays?: NullableIntFieldUpdateOperationsInput | number | null
    trainingCompletionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permanentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sisterCompany?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    insuranceNo?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retirementAge?: NullableIntFieldUpdateOperationsInput | number | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    altPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyMobile?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    hobbies?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    specialSkills?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    familyMembers?: NullableIntFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    bankHolder?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranch?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    accountNo?: NullableStringFieldUpdateOperationsInput | string | null
    ifscCode?: NullableStringFieldUpdateOperationsInput | string | null
    crnNo?: NullableStringFieldUpdateOperationsInput | string | null
    esicNo?: NullableStringFieldUpdateOperationsInput | string | null
    panNo?: NullableStringFieldUpdateOperationsInput | string | null
    pfNo?: NullableStringFieldUpdateOperationsInput | string | null
    uanNo?: NullableStringFieldUpdateOperationsInput | string | null
    micrNo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offboardings?: OffboardingUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: number
    employeeId: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    mobile?: string | null
    dob?: Date | string | null
    bloodGroup?: string | null
    gender?: string | null
    cvUrl?: string | null
    idProofUrl?: string | null
    welcomeSent?: boolean
    designation?: string | null
    branch?: string | null
    department?: string | null
    subDepartment?: string | null
    grade?: string | null
    employeeType?: string | null
    zone?: string | null
    level?: string | null
    shift?: string | null
    email?: string | null
    doj?: Date | string | null
    probationDays?: number | null
    trainingCompletionDate?: Date | string | null
    permanentDate?: Date | string | null
    sisterCompany?: string | null
    location?: string | null
    managerId?: number | null
    insuranceNo?: string | null
    insuranceCompany?: string | null
    insuranceExpiry?: Date | string | null
    retirementAge?: number | null
    jobDescription?: string | null
    whatsapp?: string | null
    altPhone?: string | null
    emergencyNumber?: string | null
    companyMobile?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    personalEmail?: string | null
    socialLinks?: string | null
    skills?: string | null
    hobbies?: string | null
    languages?: string | null
    specialSkills?: string | null
    maritalStatus?: string | null
    familyMembers?: number | null
    nationality?: string | null
    bankHolder?: string | null
    bankName?: string | null
    bankBranch?: string | null
    accountType?: string | null
    accountNo?: string | null
    ifscCode?: string | null
    crnNo?: string | null
    esicNo?: string | null
    panNo?: string | null
    pfNo?: string | null
    uanNo?: string | null
    micrNo?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    cvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    idProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeSent?: BoolFieldUpdateOperationsInput | boolean
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    subDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    employeeType?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    doj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    probationDays?: NullableIntFieldUpdateOperationsInput | number | null
    trainingCompletionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permanentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sisterCompany?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceNo?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retirementAge?: NullableIntFieldUpdateOperationsInput | number | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    altPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyMobile?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    hobbies?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    specialSkills?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    familyMembers?: NullableIntFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    bankHolder?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranch?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    accountNo?: NullableStringFieldUpdateOperationsInput | string | null
    ifscCode?: NullableStringFieldUpdateOperationsInput | string | null
    crnNo?: NullableStringFieldUpdateOperationsInput | string | null
    esicNo?: NullableStringFieldUpdateOperationsInput | string | null
    panNo?: NullableStringFieldUpdateOperationsInput | string | null
    pfNo?: NullableStringFieldUpdateOperationsInput | string | null
    uanNo?: NullableStringFieldUpdateOperationsInput | string | null
    micrNo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    cvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    idProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeSent?: BoolFieldUpdateOperationsInput | boolean
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    subDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    employeeType?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    doj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    probationDays?: NullableIntFieldUpdateOperationsInput | number | null
    trainingCompletionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permanentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sisterCompany?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    insuranceNo?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retirementAge?: NullableIntFieldUpdateOperationsInput | number | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    altPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyMobile?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    hobbies?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    specialSkills?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    familyMembers?: NullableIntFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    bankHolder?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranch?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    accountNo?: NullableStringFieldUpdateOperationsInput | string | null
    ifscCode?: NullableStringFieldUpdateOperationsInput | string | null
    crnNo?: NullableStringFieldUpdateOperationsInput | string | null
    esicNo?: NullableStringFieldUpdateOperationsInput | string | null
    panNo?: NullableStringFieldUpdateOperationsInput | string | null
    pfNo?: NullableStringFieldUpdateOperationsInput | string | null
    uanNo?: NullableStringFieldUpdateOperationsInput | string | null
    micrNo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExEmployeeCreateInput = {
    employeeId: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    email?: string | null
    mobile?: string | null
    designation?: string | null
    department?: string | null
    branch?: string | null
    exitDate?: Date | string | null
    reason?: string | null
    eligibleForRehire?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExEmployeeUncheckedCreateInput = {
    id?: number
    employeeId: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    email?: string | null
    mobile?: string | null
    designation?: string | null
    department?: string | null
    branch?: string | null
    exitDate?: Date | string | null
    reason?: string | null
    eligibleForRehire?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExEmployeeUpdateInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    eligibleForRehire?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExEmployeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    eligibleForRehire?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExEmployeeCreateManyInput = {
    id?: number
    employeeId: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    email?: string | null
    mobile?: string | null
    designation?: string | null
    department?: string | null
    branch?: string | null
    exitDate?: Date | string | null
    reason?: string | null
    eligibleForRehire?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExEmployeeUpdateManyMutationInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    eligibleForRehire?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExEmployeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    eligibleForRehire?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagerCreateInput = {
    name?: string | null
    email?: string | null
    mobile?: string | null
    department?: string | null
    branch?: string | null
    level?: string | null
    active?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeCreateNestedManyWithoutManagerInput
  }

  export type ManagerUncheckedCreateInput = {
    id?: number
    name?: string | null
    email?: string | null
    mobile?: string | null
    department?: string | null
    branch?: string | null
    level?: string | null
    active?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeUncheckedCreateNestedManyWithoutManagerInput
  }

  export type ManagerUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUpdateManyWithoutManagerNestedInput
  }

  export type ManagerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type ManagerCreateManyInput = {
    id?: number
    name?: string | null
    email?: string | null
    mobile?: string | null
    department?: string | null
    branch?: string | null
    level?: string | null
    active?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManagerUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OffboardingCreateInput = {
    lastWorkingDate?: Date | string | null
    reason?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutOffboardingsInput
    checklists?: ExitChecklistCreateNestedManyWithoutOffboardingInput
  }

  export type OffboardingUncheckedCreateInput = {
    id?: number
    employeeId: number
    lastWorkingDate?: Date | string | null
    reason?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    checklists?: ExitChecklistUncheckedCreateNestedManyWithoutOffboardingInput
  }

  export type OffboardingUpdateInput = {
    lastWorkingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutOffboardingsNestedInput
    checklists?: ExitChecklistUpdateManyWithoutOffboardingNestedInput
  }

  export type OffboardingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    lastWorkingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checklists?: ExitChecklistUncheckedUpdateManyWithoutOffboardingNestedInput
  }

  export type OffboardingCreateManyInput = {
    id?: number
    employeeId: number
    lastWorkingDate?: Date | string | null
    reason?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OffboardingUpdateManyMutationInput = {
    lastWorkingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OffboardingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    lastWorkingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExitChecklistCreateInput = {
    department: string
    taskName: string
    assignedTo?: string | null
    status?: string
    completionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    offboarding: OffboardingCreateNestedOneWithoutChecklistsInput
  }

  export type ExitChecklistUncheckedCreateInput = {
    id?: number
    offboardingId: number
    department: string
    taskName: string
    assignedTo?: string | null
    status?: string
    completionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExitChecklistUpdateInput = {
    department?: StringFieldUpdateOperationsInput | string
    taskName?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offboarding?: OffboardingUpdateOneRequiredWithoutChecklistsNestedInput
  }

  export type ExitChecklistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    offboardingId?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    taskName?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExitChecklistCreateManyInput = {
    id?: number
    offboardingId: number
    department: string
    taskName: string
    assignedTo?: string | null
    status?: string
    completionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExitChecklistUpdateManyMutationInput = {
    department?: StringFieldUpdateOperationsInput | string
    taskName?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExitChecklistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    offboardingId?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    taskName?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceCreateInput = {
    employeeId: string
    salary?: number | null
    bonus?: number | null
    deductions?: number | null
    month?: string | null
    year?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinanceUncheckedCreateInput = {
    id?: number
    employeeId: string
    salary?: number | null
    bonus?: number | null
    deductions?: number | null
    month?: string | null
    year?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinanceUpdateInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    bonus?: NullableFloatFieldUpdateOperationsInput | number | null
    deductions?: NullableFloatFieldUpdateOperationsInput | number | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    bonus?: NullableFloatFieldUpdateOperationsInput | number | null
    deductions?: NullableFloatFieldUpdateOperationsInput | number | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceCreateManyInput = {
    id?: number
    employeeId: string
    salary?: number | null
    bonus?: number | null
    deductions?: number | null
    month?: string | null
    year?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinanceUpdateManyMutationInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    bonus?: NullableFloatFieldUpdateOperationsInput | number | null
    deductions?: NullableFloatFieldUpdateOperationsInput | number | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    bonus?: NullableFloatFieldUpdateOperationsInput | number | null
    deductions?: NullableFloatFieldUpdateOperationsInput | number | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnboardingCreateInput = {
    employeeId: string
    documentsSubmitted?: boolean | null
    trainingCompleted?: boolean | null
    orientationDone?: boolean | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OnboardingUncheckedCreateInput = {
    id?: number
    employeeId: string
    documentsSubmitted?: boolean | null
    trainingCompleted?: boolean | null
    orientationDone?: boolean | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OnboardingUpdateInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    documentsSubmitted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    trainingCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    orientationDone?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnboardingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: StringFieldUpdateOperationsInput | string
    documentsSubmitted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    trainingCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    orientationDone?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnboardingCreateManyInput = {
    id?: number
    employeeId: string
    documentsSubmitted?: boolean | null
    trainingCompleted?: boolean | null
    orientationDone?: boolean | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OnboardingUpdateManyMutationInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    documentsSubmitted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    trainingCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    orientationDone?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnboardingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: StringFieldUpdateOperationsInput | string
    documentsSubmitted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    trainingCompleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    orientationDone?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ManagerNullableScalarRelationFilter = {
    is?: ManagerWhereInput | null
    isNot?: ManagerWhereInput | null
  }

  export type OffboardingListRelationFilter = {
    every?: OffboardingWhereInput
    some?: OffboardingWhereInput
    none?: OffboardingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OffboardingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeOrderByRelevanceInput = {
    fields: EmployeeOrderByRelevanceFieldEnum | EmployeeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    mobile?: SortOrder
    dob?: SortOrder
    bloodGroup?: SortOrder
    gender?: SortOrder
    cvUrl?: SortOrder
    idProofUrl?: SortOrder
    welcomeSent?: SortOrder
    designation?: SortOrder
    branch?: SortOrder
    department?: SortOrder
    subDepartment?: SortOrder
    grade?: SortOrder
    employeeType?: SortOrder
    zone?: SortOrder
    level?: SortOrder
    shift?: SortOrder
    email?: SortOrder
    doj?: SortOrder
    probationDays?: SortOrder
    trainingCompletionDate?: SortOrder
    permanentDate?: SortOrder
    sisterCompany?: SortOrder
    location?: SortOrder
    managerId?: SortOrder
    insuranceNo?: SortOrder
    insuranceCompany?: SortOrder
    insuranceExpiry?: SortOrder
    retirementAge?: SortOrder
    jobDescription?: SortOrder
    whatsapp?: SortOrder
    altPhone?: SortOrder
    emergencyNumber?: SortOrder
    companyMobile?: SortOrder
    currentAddress?: SortOrder
    permanentAddress?: SortOrder
    personalEmail?: SortOrder
    socialLinks?: SortOrder
    skills?: SortOrder
    hobbies?: SortOrder
    languages?: SortOrder
    specialSkills?: SortOrder
    maritalStatus?: SortOrder
    familyMembers?: SortOrder
    nationality?: SortOrder
    bankHolder?: SortOrder
    bankName?: SortOrder
    bankBranch?: SortOrder
    accountType?: SortOrder
    accountNo?: SortOrder
    ifscCode?: SortOrder
    crnNo?: SortOrder
    esicNo?: SortOrder
    panNo?: SortOrder
    pfNo?: SortOrder
    uanNo?: SortOrder
    micrNo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
    probationDays?: SortOrder
    managerId?: SortOrder
    retirementAge?: SortOrder
    familyMembers?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    mobile?: SortOrder
    dob?: SortOrder
    bloodGroup?: SortOrder
    gender?: SortOrder
    cvUrl?: SortOrder
    idProofUrl?: SortOrder
    welcomeSent?: SortOrder
    designation?: SortOrder
    branch?: SortOrder
    department?: SortOrder
    subDepartment?: SortOrder
    grade?: SortOrder
    employeeType?: SortOrder
    zone?: SortOrder
    level?: SortOrder
    shift?: SortOrder
    email?: SortOrder
    doj?: SortOrder
    probationDays?: SortOrder
    trainingCompletionDate?: SortOrder
    permanentDate?: SortOrder
    sisterCompany?: SortOrder
    location?: SortOrder
    managerId?: SortOrder
    insuranceNo?: SortOrder
    insuranceCompany?: SortOrder
    insuranceExpiry?: SortOrder
    retirementAge?: SortOrder
    jobDescription?: SortOrder
    whatsapp?: SortOrder
    altPhone?: SortOrder
    emergencyNumber?: SortOrder
    companyMobile?: SortOrder
    currentAddress?: SortOrder
    permanentAddress?: SortOrder
    personalEmail?: SortOrder
    socialLinks?: SortOrder
    skills?: SortOrder
    hobbies?: SortOrder
    languages?: SortOrder
    specialSkills?: SortOrder
    maritalStatus?: SortOrder
    familyMembers?: SortOrder
    nationality?: SortOrder
    bankHolder?: SortOrder
    bankName?: SortOrder
    bankBranch?: SortOrder
    accountType?: SortOrder
    accountNo?: SortOrder
    ifscCode?: SortOrder
    crnNo?: SortOrder
    esicNo?: SortOrder
    panNo?: SortOrder
    pfNo?: SortOrder
    uanNo?: SortOrder
    micrNo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    mobile?: SortOrder
    dob?: SortOrder
    bloodGroup?: SortOrder
    gender?: SortOrder
    cvUrl?: SortOrder
    idProofUrl?: SortOrder
    welcomeSent?: SortOrder
    designation?: SortOrder
    branch?: SortOrder
    department?: SortOrder
    subDepartment?: SortOrder
    grade?: SortOrder
    employeeType?: SortOrder
    zone?: SortOrder
    level?: SortOrder
    shift?: SortOrder
    email?: SortOrder
    doj?: SortOrder
    probationDays?: SortOrder
    trainingCompletionDate?: SortOrder
    permanentDate?: SortOrder
    sisterCompany?: SortOrder
    location?: SortOrder
    managerId?: SortOrder
    insuranceNo?: SortOrder
    insuranceCompany?: SortOrder
    insuranceExpiry?: SortOrder
    retirementAge?: SortOrder
    jobDescription?: SortOrder
    whatsapp?: SortOrder
    altPhone?: SortOrder
    emergencyNumber?: SortOrder
    companyMobile?: SortOrder
    currentAddress?: SortOrder
    permanentAddress?: SortOrder
    personalEmail?: SortOrder
    socialLinks?: SortOrder
    skills?: SortOrder
    hobbies?: SortOrder
    languages?: SortOrder
    specialSkills?: SortOrder
    maritalStatus?: SortOrder
    familyMembers?: SortOrder
    nationality?: SortOrder
    bankHolder?: SortOrder
    bankName?: SortOrder
    bankBranch?: SortOrder
    accountType?: SortOrder
    accountNo?: SortOrder
    ifscCode?: SortOrder
    crnNo?: SortOrder
    esicNo?: SortOrder
    panNo?: SortOrder
    pfNo?: SortOrder
    uanNo?: SortOrder
    micrNo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    id?: SortOrder
    probationDays?: SortOrder
    managerId?: SortOrder
    retirementAge?: SortOrder
    familyMembers?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ExEmployeeOrderByRelevanceInput = {
    fields: ExEmployeeOrderByRelevanceFieldEnum | ExEmployeeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ExEmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    designation?: SortOrder
    department?: SortOrder
    branch?: SortOrder
    exitDate?: SortOrder
    reason?: SortOrder
    eligibleForRehire?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExEmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExEmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    designation?: SortOrder
    department?: SortOrder
    branch?: SortOrder
    exitDate?: SortOrder
    reason?: SortOrder
    eligibleForRehire?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExEmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    designation?: SortOrder
    department?: SortOrder
    branch?: SortOrder
    exitDate?: SortOrder
    reason?: SortOrder
    eligibleForRehire?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExEmployeeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ManagerOrderByRelevanceInput = {
    fields: ManagerOrderByRelevanceFieldEnum | ManagerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ManagerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    department?: SortOrder
    branch?: SortOrder
    level?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ManagerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ManagerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    department?: SortOrder
    branch?: SortOrder
    level?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ManagerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    department?: SortOrder
    branch?: SortOrder
    level?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ManagerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type ExitChecklistListRelationFilter = {
    every?: ExitChecklistWhereInput
    some?: ExitChecklistWhereInput
    none?: ExitChecklistWhereInput
  }

  export type ExitChecklistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OffboardingOrderByRelevanceInput = {
    fields: OffboardingOrderByRelevanceFieldEnum | OffboardingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OffboardingCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    lastWorkingDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OffboardingAvgOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type OffboardingMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    lastWorkingDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OffboardingMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    lastWorkingDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OffboardingSumOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type OffboardingScalarRelationFilter = {
    is?: OffboardingWhereInput
    isNot?: OffboardingWhereInput
  }

  export type ExitChecklistOrderByRelevanceInput = {
    fields: ExitChecklistOrderByRelevanceFieldEnum | ExitChecklistOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ExitChecklistCountOrderByAggregateInput = {
    id?: SortOrder
    offboardingId?: SortOrder
    department?: SortOrder
    taskName?: SortOrder
    assignedTo?: SortOrder
    status?: SortOrder
    completionDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExitChecklistAvgOrderByAggregateInput = {
    id?: SortOrder
    offboardingId?: SortOrder
  }

  export type ExitChecklistMaxOrderByAggregateInput = {
    id?: SortOrder
    offboardingId?: SortOrder
    department?: SortOrder
    taskName?: SortOrder
    assignedTo?: SortOrder
    status?: SortOrder
    completionDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExitChecklistMinOrderByAggregateInput = {
    id?: SortOrder
    offboardingId?: SortOrder
    department?: SortOrder
    taskName?: SortOrder
    assignedTo?: SortOrder
    status?: SortOrder
    completionDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExitChecklistSumOrderByAggregateInput = {
    id?: SortOrder
    offboardingId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FinanceOrderByRelevanceInput = {
    fields: FinanceOrderByRelevanceFieldEnum | FinanceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FinanceCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    salary?: SortOrder
    bonus?: SortOrder
    deductions?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinanceAvgOrderByAggregateInput = {
    id?: SortOrder
    salary?: SortOrder
    bonus?: SortOrder
    deductions?: SortOrder
    year?: SortOrder
  }

  export type FinanceMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    salary?: SortOrder
    bonus?: SortOrder
    deductions?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinanceMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    salary?: SortOrder
    bonus?: SortOrder
    deductions?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinanceSumOrderByAggregateInput = {
    id?: SortOrder
    salary?: SortOrder
    bonus?: SortOrder
    deductions?: SortOrder
    year?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type OnboardingOrderByRelevanceInput = {
    fields: OnboardingOrderByRelevanceFieldEnum | OnboardingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OnboardingCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    documentsSubmitted?: SortOrder
    trainingCompleted?: SortOrder
    orientationDone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OnboardingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OnboardingMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    documentsSubmitted?: SortOrder
    trainingCompleted?: SortOrder
    orientationDone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OnboardingMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    documentsSubmitted?: SortOrder
    trainingCompleted?: SortOrder
    orientationDone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OnboardingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ManagerCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<ManagerCreateWithoutEmployeesInput, ManagerUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: ManagerCreateOrConnectWithoutEmployeesInput
    connect?: ManagerWhereUniqueInput
  }

  export type OffboardingCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<OffboardingCreateWithoutEmployeeInput, OffboardingUncheckedCreateWithoutEmployeeInput> | OffboardingCreateWithoutEmployeeInput[] | OffboardingUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: OffboardingCreateOrConnectWithoutEmployeeInput | OffboardingCreateOrConnectWithoutEmployeeInput[]
    createMany?: OffboardingCreateManyEmployeeInputEnvelope
    connect?: OffboardingWhereUniqueInput | OffboardingWhereUniqueInput[]
  }

  export type OffboardingUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<OffboardingCreateWithoutEmployeeInput, OffboardingUncheckedCreateWithoutEmployeeInput> | OffboardingCreateWithoutEmployeeInput[] | OffboardingUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: OffboardingCreateOrConnectWithoutEmployeeInput | OffboardingCreateOrConnectWithoutEmployeeInput[]
    createMany?: OffboardingCreateManyEmployeeInputEnvelope
    connect?: OffboardingWhereUniqueInput | OffboardingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ManagerUpdateOneWithoutEmployeesNestedInput = {
    create?: XOR<ManagerCreateWithoutEmployeesInput, ManagerUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: ManagerCreateOrConnectWithoutEmployeesInput
    upsert?: ManagerUpsertWithoutEmployeesInput
    disconnect?: ManagerWhereInput | boolean
    delete?: ManagerWhereInput | boolean
    connect?: ManagerWhereUniqueInput
    update?: XOR<XOR<ManagerUpdateToOneWithWhereWithoutEmployeesInput, ManagerUpdateWithoutEmployeesInput>, ManagerUncheckedUpdateWithoutEmployeesInput>
  }

  export type OffboardingUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<OffboardingCreateWithoutEmployeeInput, OffboardingUncheckedCreateWithoutEmployeeInput> | OffboardingCreateWithoutEmployeeInput[] | OffboardingUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: OffboardingCreateOrConnectWithoutEmployeeInput | OffboardingCreateOrConnectWithoutEmployeeInput[]
    upsert?: OffboardingUpsertWithWhereUniqueWithoutEmployeeInput | OffboardingUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: OffboardingCreateManyEmployeeInputEnvelope
    set?: OffboardingWhereUniqueInput | OffboardingWhereUniqueInput[]
    disconnect?: OffboardingWhereUniqueInput | OffboardingWhereUniqueInput[]
    delete?: OffboardingWhereUniqueInput | OffboardingWhereUniqueInput[]
    connect?: OffboardingWhereUniqueInput | OffboardingWhereUniqueInput[]
    update?: OffboardingUpdateWithWhereUniqueWithoutEmployeeInput | OffboardingUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: OffboardingUpdateManyWithWhereWithoutEmployeeInput | OffboardingUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: OffboardingScalarWhereInput | OffboardingScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OffboardingUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<OffboardingCreateWithoutEmployeeInput, OffboardingUncheckedCreateWithoutEmployeeInput> | OffboardingCreateWithoutEmployeeInput[] | OffboardingUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: OffboardingCreateOrConnectWithoutEmployeeInput | OffboardingCreateOrConnectWithoutEmployeeInput[]
    upsert?: OffboardingUpsertWithWhereUniqueWithoutEmployeeInput | OffboardingUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: OffboardingCreateManyEmployeeInputEnvelope
    set?: OffboardingWhereUniqueInput | OffboardingWhereUniqueInput[]
    disconnect?: OffboardingWhereUniqueInput | OffboardingWhereUniqueInput[]
    delete?: OffboardingWhereUniqueInput | OffboardingWhereUniqueInput[]
    connect?: OffboardingWhereUniqueInput | OffboardingWhereUniqueInput[]
    update?: OffboardingUpdateWithWhereUniqueWithoutEmployeeInput | OffboardingUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: OffboardingUpdateManyWithWhereWithoutEmployeeInput | OffboardingUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: OffboardingScalarWhereInput | OffboardingScalarWhereInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type EmployeeCreateNestedManyWithoutManagerInput = {
    create?: XOR<EmployeeCreateWithoutManagerInput, EmployeeUncheckedCreateWithoutManagerInput> | EmployeeCreateWithoutManagerInput[] | EmployeeUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutManagerInput | EmployeeCreateOrConnectWithoutManagerInput[]
    createMany?: EmployeeCreateManyManagerInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<EmployeeCreateWithoutManagerInput, EmployeeUncheckedCreateWithoutManagerInput> | EmployeeCreateWithoutManagerInput[] | EmployeeUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutManagerInput | EmployeeCreateOrConnectWithoutManagerInput[]
    createMany?: EmployeeCreateManyManagerInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUpdateManyWithoutManagerNestedInput = {
    create?: XOR<EmployeeCreateWithoutManagerInput, EmployeeUncheckedCreateWithoutManagerInput> | EmployeeCreateWithoutManagerInput[] | EmployeeUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutManagerInput | EmployeeCreateOrConnectWithoutManagerInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutManagerInput | EmployeeUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: EmployeeCreateManyManagerInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutManagerInput | EmployeeUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutManagerInput | EmployeeUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<EmployeeCreateWithoutManagerInput, EmployeeUncheckedCreateWithoutManagerInput> | EmployeeCreateWithoutManagerInput[] | EmployeeUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutManagerInput | EmployeeCreateOrConnectWithoutManagerInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutManagerInput | EmployeeUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: EmployeeCreateManyManagerInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutManagerInput | EmployeeUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutManagerInput | EmployeeUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutOffboardingsInput = {
    create?: XOR<EmployeeCreateWithoutOffboardingsInput, EmployeeUncheckedCreateWithoutOffboardingsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutOffboardingsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type ExitChecklistCreateNestedManyWithoutOffboardingInput = {
    create?: XOR<ExitChecklistCreateWithoutOffboardingInput, ExitChecklistUncheckedCreateWithoutOffboardingInput> | ExitChecklistCreateWithoutOffboardingInput[] | ExitChecklistUncheckedCreateWithoutOffboardingInput[]
    connectOrCreate?: ExitChecklistCreateOrConnectWithoutOffboardingInput | ExitChecklistCreateOrConnectWithoutOffboardingInput[]
    createMany?: ExitChecklistCreateManyOffboardingInputEnvelope
    connect?: ExitChecklistWhereUniqueInput | ExitChecklistWhereUniqueInput[]
  }

  export type ExitChecklistUncheckedCreateNestedManyWithoutOffboardingInput = {
    create?: XOR<ExitChecklistCreateWithoutOffboardingInput, ExitChecklistUncheckedCreateWithoutOffboardingInput> | ExitChecklistCreateWithoutOffboardingInput[] | ExitChecklistUncheckedCreateWithoutOffboardingInput[]
    connectOrCreate?: ExitChecklistCreateOrConnectWithoutOffboardingInput | ExitChecklistCreateOrConnectWithoutOffboardingInput[]
    createMany?: ExitChecklistCreateManyOffboardingInputEnvelope
    connect?: ExitChecklistWhereUniqueInput | ExitChecklistWhereUniqueInput[]
  }

  export type EmployeeUpdateOneRequiredWithoutOffboardingsNestedInput = {
    create?: XOR<EmployeeCreateWithoutOffboardingsInput, EmployeeUncheckedCreateWithoutOffboardingsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutOffboardingsInput
    upsert?: EmployeeUpsertWithoutOffboardingsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutOffboardingsInput, EmployeeUpdateWithoutOffboardingsInput>, EmployeeUncheckedUpdateWithoutOffboardingsInput>
  }

  export type ExitChecklistUpdateManyWithoutOffboardingNestedInput = {
    create?: XOR<ExitChecklistCreateWithoutOffboardingInput, ExitChecklistUncheckedCreateWithoutOffboardingInput> | ExitChecklistCreateWithoutOffboardingInput[] | ExitChecklistUncheckedCreateWithoutOffboardingInput[]
    connectOrCreate?: ExitChecklistCreateOrConnectWithoutOffboardingInput | ExitChecklistCreateOrConnectWithoutOffboardingInput[]
    upsert?: ExitChecklistUpsertWithWhereUniqueWithoutOffboardingInput | ExitChecklistUpsertWithWhereUniqueWithoutOffboardingInput[]
    createMany?: ExitChecklistCreateManyOffboardingInputEnvelope
    set?: ExitChecklistWhereUniqueInput | ExitChecklistWhereUniqueInput[]
    disconnect?: ExitChecklistWhereUniqueInput | ExitChecklistWhereUniqueInput[]
    delete?: ExitChecklistWhereUniqueInput | ExitChecklistWhereUniqueInput[]
    connect?: ExitChecklistWhereUniqueInput | ExitChecklistWhereUniqueInput[]
    update?: ExitChecklistUpdateWithWhereUniqueWithoutOffboardingInput | ExitChecklistUpdateWithWhereUniqueWithoutOffboardingInput[]
    updateMany?: ExitChecklistUpdateManyWithWhereWithoutOffboardingInput | ExitChecklistUpdateManyWithWhereWithoutOffboardingInput[]
    deleteMany?: ExitChecklistScalarWhereInput | ExitChecklistScalarWhereInput[]
  }

  export type ExitChecklistUncheckedUpdateManyWithoutOffboardingNestedInput = {
    create?: XOR<ExitChecklistCreateWithoutOffboardingInput, ExitChecklistUncheckedCreateWithoutOffboardingInput> | ExitChecklistCreateWithoutOffboardingInput[] | ExitChecklistUncheckedCreateWithoutOffboardingInput[]
    connectOrCreate?: ExitChecklistCreateOrConnectWithoutOffboardingInput | ExitChecklistCreateOrConnectWithoutOffboardingInput[]
    upsert?: ExitChecklistUpsertWithWhereUniqueWithoutOffboardingInput | ExitChecklistUpsertWithWhereUniqueWithoutOffboardingInput[]
    createMany?: ExitChecklistCreateManyOffboardingInputEnvelope
    set?: ExitChecklistWhereUniqueInput | ExitChecklistWhereUniqueInput[]
    disconnect?: ExitChecklistWhereUniqueInput | ExitChecklistWhereUniqueInput[]
    delete?: ExitChecklistWhereUniqueInput | ExitChecklistWhereUniqueInput[]
    connect?: ExitChecklistWhereUniqueInput | ExitChecklistWhereUniqueInput[]
    update?: ExitChecklistUpdateWithWhereUniqueWithoutOffboardingInput | ExitChecklistUpdateWithWhereUniqueWithoutOffboardingInput[]
    updateMany?: ExitChecklistUpdateManyWithWhereWithoutOffboardingInput | ExitChecklistUpdateManyWithWhereWithoutOffboardingInput[]
    deleteMany?: ExitChecklistScalarWhereInput | ExitChecklistScalarWhereInput[]
  }

  export type OffboardingCreateNestedOneWithoutChecklistsInput = {
    create?: XOR<OffboardingCreateWithoutChecklistsInput, OffboardingUncheckedCreateWithoutChecklistsInput>
    connectOrCreate?: OffboardingCreateOrConnectWithoutChecklistsInput
    connect?: OffboardingWhereUniqueInput
  }

  export type OffboardingUpdateOneRequiredWithoutChecklistsNestedInput = {
    create?: XOR<OffboardingCreateWithoutChecklistsInput, OffboardingUncheckedCreateWithoutChecklistsInput>
    connectOrCreate?: OffboardingCreateOrConnectWithoutChecklistsInput
    upsert?: OffboardingUpsertWithoutChecklistsInput
    connect?: OffboardingWhereUniqueInput
    update?: XOR<XOR<OffboardingUpdateToOneWithWhereWithoutChecklistsInput, OffboardingUpdateWithoutChecklistsInput>, OffboardingUncheckedUpdateWithoutChecklistsInput>
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ManagerCreateWithoutEmployeesInput = {
    name?: string | null
    email?: string | null
    mobile?: string | null
    department?: string | null
    branch?: string | null
    level?: string | null
    active?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManagerUncheckedCreateWithoutEmployeesInput = {
    id?: number
    name?: string | null
    email?: string | null
    mobile?: string | null
    department?: string | null
    branch?: string | null
    level?: string | null
    active?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManagerCreateOrConnectWithoutEmployeesInput = {
    where: ManagerWhereUniqueInput
    create: XOR<ManagerCreateWithoutEmployeesInput, ManagerUncheckedCreateWithoutEmployeesInput>
  }

  export type OffboardingCreateWithoutEmployeeInput = {
    lastWorkingDate?: Date | string | null
    reason?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    checklists?: ExitChecklistCreateNestedManyWithoutOffboardingInput
  }

  export type OffboardingUncheckedCreateWithoutEmployeeInput = {
    id?: number
    lastWorkingDate?: Date | string | null
    reason?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    checklists?: ExitChecklistUncheckedCreateNestedManyWithoutOffboardingInput
  }

  export type OffboardingCreateOrConnectWithoutEmployeeInput = {
    where: OffboardingWhereUniqueInput
    create: XOR<OffboardingCreateWithoutEmployeeInput, OffboardingUncheckedCreateWithoutEmployeeInput>
  }

  export type OffboardingCreateManyEmployeeInputEnvelope = {
    data: OffboardingCreateManyEmployeeInput | OffboardingCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type ManagerUpsertWithoutEmployeesInput = {
    update: XOR<ManagerUpdateWithoutEmployeesInput, ManagerUncheckedUpdateWithoutEmployeesInput>
    create: XOR<ManagerCreateWithoutEmployeesInput, ManagerUncheckedCreateWithoutEmployeesInput>
    where?: ManagerWhereInput
  }

  export type ManagerUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: ManagerWhereInput
    data: XOR<ManagerUpdateWithoutEmployeesInput, ManagerUncheckedUpdateWithoutEmployeesInput>
  }

  export type ManagerUpdateWithoutEmployeesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagerUncheckedUpdateWithoutEmployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OffboardingUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: OffboardingWhereUniqueInput
    update: XOR<OffboardingUpdateWithoutEmployeeInput, OffboardingUncheckedUpdateWithoutEmployeeInput>
    create: XOR<OffboardingCreateWithoutEmployeeInput, OffboardingUncheckedCreateWithoutEmployeeInput>
  }

  export type OffboardingUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: OffboardingWhereUniqueInput
    data: XOR<OffboardingUpdateWithoutEmployeeInput, OffboardingUncheckedUpdateWithoutEmployeeInput>
  }

  export type OffboardingUpdateManyWithWhereWithoutEmployeeInput = {
    where: OffboardingScalarWhereInput
    data: XOR<OffboardingUpdateManyMutationInput, OffboardingUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type OffboardingScalarWhereInput = {
    AND?: OffboardingScalarWhereInput | OffboardingScalarWhereInput[]
    OR?: OffboardingScalarWhereInput[]
    NOT?: OffboardingScalarWhereInput | OffboardingScalarWhereInput[]
    id?: IntFilter<"Offboarding"> | number
    employeeId?: IntFilter<"Offboarding"> | number
    lastWorkingDate?: DateTimeNullableFilter<"Offboarding"> | Date | string | null
    reason?: StringNullableFilter<"Offboarding"> | string | null
    status?: StringFilter<"Offboarding"> | string
    createdAt?: DateTimeFilter<"Offboarding"> | Date | string
    updatedAt?: DateTimeFilter<"Offboarding"> | Date | string
  }

  export type EmployeeCreateWithoutManagerInput = {
    employeeId: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    mobile?: string | null
    dob?: Date | string | null
    bloodGroup?: string | null
    gender?: string | null
    cvUrl?: string | null
    idProofUrl?: string | null
    welcomeSent?: boolean
    designation?: string | null
    branch?: string | null
    department?: string | null
    subDepartment?: string | null
    grade?: string | null
    employeeType?: string | null
    zone?: string | null
    level?: string | null
    shift?: string | null
    email?: string | null
    doj?: Date | string | null
    probationDays?: number | null
    trainingCompletionDate?: Date | string | null
    permanentDate?: Date | string | null
    sisterCompany?: string | null
    location?: string | null
    insuranceNo?: string | null
    insuranceCompany?: string | null
    insuranceExpiry?: Date | string | null
    retirementAge?: number | null
    jobDescription?: string | null
    whatsapp?: string | null
    altPhone?: string | null
    emergencyNumber?: string | null
    companyMobile?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    personalEmail?: string | null
    socialLinks?: string | null
    skills?: string | null
    hobbies?: string | null
    languages?: string | null
    specialSkills?: string | null
    maritalStatus?: string | null
    familyMembers?: number | null
    nationality?: string | null
    bankHolder?: string | null
    bankName?: string | null
    bankBranch?: string | null
    accountType?: string | null
    accountNo?: string | null
    ifscCode?: string | null
    crnNo?: string | null
    esicNo?: string | null
    panNo?: string | null
    pfNo?: string | null
    uanNo?: string | null
    micrNo?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    offboardings?: OffboardingCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutManagerInput = {
    id?: number
    employeeId: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    mobile?: string | null
    dob?: Date | string | null
    bloodGroup?: string | null
    gender?: string | null
    cvUrl?: string | null
    idProofUrl?: string | null
    welcomeSent?: boolean
    designation?: string | null
    branch?: string | null
    department?: string | null
    subDepartment?: string | null
    grade?: string | null
    employeeType?: string | null
    zone?: string | null
    level?: string | null
    shift?: string | null
    email?: string | null
    doj?: Date | string | null
    probationDays?: number | null
    trainingCompletionDate?: Date | string | null
    permanentDate?: Date | string | null
    sisterCompany?: string | null
    location?: string | null
    insuranceNo?: string | null
    insuranceCompany?: string | null
    insuranceExpiry?: Date | string | null
    retirementAge?: number | null
    jobDescription?: string | null
    whatsapp?: string | null
    altPhone?: string | null
    emergencyNumber?: string | null
    companyMobile?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    personalEmail?: string | null
    socialLinks?: string | null
    skills?: string | null
    hobbies?: string | null
    languages?: string | null
    specialSkills?: string | null
    maritalStatus?: string | null
    familyMembers?: number | null
    nationality?: string | null
    bankHolder?: string | null
    bankName?: string | null
    bankBranch?: string | null
    accountType?: string | null
    accountNo?: string | null
    ifscCode?: string | null
    crnNo?: string | null
    esicNo?: string | null
    panNo?: string | null
    pfNo?: string | null
    uanNo?: string | null
    micrNo?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    offboardings?: OffboardingUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutManagerInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutManagerInput, EmployeeUncheckedCreateWithoutManagerInput>
  }

  export type EmployeeCreateManyManagerInputEnvelope = {
    data: EmployeeCreateManyManagerInput | EmployeeCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithWhereUniqueWithoutManagerInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutManagerInput, EmployeeUncheckedUpdateWithoutManagerInput>
    create: XOR<EmployeeCreateWithoutManagerInput, EmployeeUncheckedCreateWithoutManagerInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutManagerInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutManagerInput, EmployeeUncheckedUpdateWithoutManagerInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutManagerInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutManagerInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    id?: IntFilter<"Employee"> | number
    employeeId?: StringFilter<"Employee"> | string
    firstName?: StringNullableFilter<"Employee"> | string | null
    middleName?: StringNullableFilter<"Employee"> | string | null
    lastName?: StringNullableFilter<"Employee"> | string | null
    mobile?: StringNullableFilter<"Employee"> | string | null
    dob?: DateTimeNullableFilter<"Employee"> | Date | string | null
    bloodGroup?: StringNullableFilter<"Employee"> | string | null
    gender?: StringNullableFilter<"Employee"> | string | null
    cvUrl?: StringNullableFilter<"Employee"> | string | null
    idProofUrl?: StringNullableFilter<"Employee"> | string | null
    welcomeSent?: BoolFilter<"Employee"> | boolean
    designation?: StringNullableFilter<"Employee"> | string | null
    branch?: StringNullableFilter<"Employee"> | string | null
    department?: StringNullableFilter<"Employee"> | string | null
    subDepartment?: StringNullableFilter<"Employee"> | string | null
    grade?: StringNullableFilter<"Employee"> | string | null
    employeeType?: StringNullableFilter<"Employee"> | string | null
    zone?: StringNullableFilter<"Employee"> | string | null
    level?: StringNullableFilter<"Employee"> | string | null
    shift?: StringNullableFilter<"Employee"> | string | null
    email?: StringNullableFilter<"Employee"> | string | null
    doj?: DateTimeNullableFilter<"Employee"> | Date | string | null
    probationDays?: IntNullableFilter<"Employee"> | number | null
    trainingCompletionDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    permanentDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    sisterCompany?: StringNullableFilter<"Employee"> | string | null
    location?: StringNullableFilter<"Employee"> | string | null
    managerId?: IntNullableFilter<"Employee"> | number | null
    insuranceNo?: StringNullableFilter<"Employee"> | string | null
    insuranceCompany?: StringNullableFilter<"Employee"> | string | null
    insuranceExpiry?: DateTimeNullableFilter<"Employee"> | Date | string | null
    retirementAge?: IntNullableFilter<"Employee"> | number | null
    jobDescription?: StringNullableFilter<"Employee"> | string | null
    whatsapp?: StringNullableFilter<"Employee"> | string | null
    altPhone?: StringNullableFilter<"Employee"> | string | null
    emergencyNumber?: StringNullableFilter<"Employee"> | string | null
    companyMobile?: StringNullableFilter<"Employee"> | string | null
    currentAddress?: StringNullableFilter<"Employee"> | string | null
    permanentAddress?: StringNullableFilter<"Employee"> | string | null
    personalEmail?: StringNullableFilter<"Employee"> | string | null
    socialLinks?: StringNullableFilter<"Employee"> | string | null
    skills?: StringNullableFilter<"Employee"> | string | null
    hobbies?: StringNullableFilter<"Employee"> | string | null
    languages?: StringNullableFilter<"Employee"> | string | null
    specialSkills?: StringNullableFilter<"Employee"> | string | null
    maritalStatus?: StringNullableFilter<"Employee"> | string | null
    familyMembers?: IntNullableFilter<"Employee"> | number | null
    nationality?: StringNullableFilter<"Employee"> | string | null
    bankHolder?: StringNullableFilter<"Employee"> | string | null
    bankName?: StringNullableFilter<"Employee"> | string | null
    bankBranch?: StringNullableFilter<"Employee"> | string | null
    accountType?: StringNullableFilter<"Employee"> | string | null
    accountNo?: StringNullableFilter<"Employee"> | string | null
    ifscCode?: StringNullableFilter<"Employee"> | string | null
    crnNo?: StringNullableFilter<"Employee"> | string | null
    esicNo?: StringNullableFilter<"Employee"> | string | null
    panNo?: StringNullableFilter<"Employee"> | string | null
    pfNo?: StringNullableFilter<"Employee"> | string | null
    uanNo?: StringNullableFilter<"Employee"> | string | null
    micrNo?: StringNullableFilter<"Employee"> | string | null
    status?: StringFilter<"Employee"> | string
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
  }

  export type EmployeeCreateWithoutOffboardingsInput = {
    employeeId: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    mobile?: string | null
    dob?: Date | string | null
    bloodGroup?: string | null
    gender?: string | null
    cvUrl?: string | null
    idProofUrl?: string | null
    welcomeSent?: boolean
    designation?: string | null
    branch?: string | null
    department?: string | null
    subDepartment?: string | null
    grade?: string | null
    employeeType?: string | null
    zone?: string | null
    level?: string | null
    shift?: string | null
    email?: string | null
    doj?: Date | string | null
    probationDays?: number | null
    trainingCompletionDate?: Date | string | null
    permanentDate?: Date | string | null
    sisterCompany?: string | null
    location?: string | null
    insuranceNo?: string | null
    insuranceCompany?: string | null
    insuranceExpiry?: Date | string | null
    retirementAge?: number | null
    jobDescription?: string | null
    whatsapp?: string | null
    altPhone?: string | null
    emergencyNumber?: string | null
    companyMobile?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    personalEmail?: string | null
    socialLinks?: string | null
    skills?: string | null
    hobbies?: string | null
    languages?: string | null
    specialSkills?: string | null
    maritalStatus?: string | null
    familyMembers?: number | null
    nationality?: string | null
    bankHolder?: string | null
    bankName?: string | null
    bankBranch?: string | null
    accountType?: string | null
    accountNo?: string | null
    ifscCode?: string | null
    crnNo?: string | null
    esicNo?: string | null
    panNo?: string | null
    pfNo?: string | null
    uanNo?: string | null
    micrNo?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    manager?: ManagerCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeUncheckedCreateWithoutOffboardingsInput = {
    id?: number
    employeeId: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    mobile?: string | null
    dob?: Date | string | null
    bloodGroup?: string | null
    gender?: string | null
    cvUrl?: string | null
    idProofUrl?: string | null
    welcomeSent?: boolean
    designation?: string | null
    branch?: string | null
    department?: string | null
    subDepartment?: string | null
    grade?: string | null
    employeeType?: string | null
    zone?: string | null
    level?: string | null
    shift?: string | null
    email?: string | null
    doj?: Date | string | null
    probationDays?: number | null
    trainingCompletionDate?: Date | string | null
    permanentDate?: Date | string | null
    sisterCompany?: string | null
    location?: string | null
    managerId?: number | null
    insuranceNo?: string | null
    insuranceCompany?: string | null
    insuranceExpiry?: Date | string | null
    retirementAge?: number | null
    jobDescription?: string | null
    whatsapp?: string | null
    altPhone?: string | null
    emergencyNumber?: string | null
    companyMobile?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    personalEmail?: string | null
    socialLinks?: string | null
    skills?: string | null
    hobbies?: string | null
    languages?: string | null
    specialSkills?: string | null
    maritalStatus?: string | null
    familyMembers?: number | null
    nationality?: string | null
    bankHolder?: string | null
    bankName?: string | null
    bankBranch?: string | null
    accountType?: string | null
    accountNo?: string | null
    ifscCode?: string | null
    crnNo?: string | null
    esicNo?: string | null
    panNo?: string | null
    pfNo?: string | null
    uanNo?: string | null
    micrNo?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeCreateOrConnectWithoutOffboardingsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutOffboardingsInput, EmployeeUncheckedCreateWithoutOffboardingsInput>
  }

  export type ExitChecklistCreateWithoutOffboardingInput = {
    department: string
    taskName: string
    assignedTo?: string | null
    status?: string
    completionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExitChecklistUncheckedCreateWithoutOffboardingInput = {
    id?: number
    department: string
    taskName: string
    assignedTo?: string | null
    status?: string
    completionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExitChecklistCreateOrConnectWithoutOffboardingInput = {
    where: ExitChecklistWhereUniqueInput
    create: XOR<ExitChecklistCreateWithoutOffboardingInput, ExitChecklistUncheckedCreateWithoutOffboardingInput>
  }

  export type ExitChecklistCreateManyOffboardingInputEnvelope = {
    data: ExitChecklistCreateManyOffboardingInput | ExitChecklistCreateManyOffboardingInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithoutOffboardingsInput = {
    update: XOR<EmployeeUpdateWithoutOffboardingsInput, EmployeeUncheckedUpdateWithoutOffboardingsInput>
    create: XOR<EmployeeCreateWithoutOffboardingsInput, EmployeeUncheckedCreateWithoutOffboardingsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutOffboardingsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutOffboardingsInput, EmployeeUncheckedUpdateWithoutOffboardingsInput>
  }

  export type EmployeeUpdateWithoutOffboardingsInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    cvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    idProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeSent?: BoolFieldUpdateOperationsInput | boolean
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    subDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    employeeType?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    doj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    probationDays?: NullableIntFieldUpdateOperationsInput | number | null
    trainingCompletionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permanentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sisterCompany?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceNo?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retirementAge?: NullableIntFieldUpdateOperationsInput | number | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    altPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyMobile?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    hobbies?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    specialSkills?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    familyMembers?: NullableIntFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    bankHolder?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranch?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    accountNo?: NullableStringFieldUpdateOperationsInput | string | null
    ifscCode?: NullableStringFieldUpdateOperationsInput | string | null
    crnNo?: NullableStringFieldUpdateOperationsInput | string | null
    esicNo?: NullableStringFieldUpdateOperationsInput | string | null
    panNo?: NullableStringFieldUpdateOperationsInput | string | null
    pfNo?: NullableStringFieldUpdateOperationsInput | string | null
    uanNo?: NullableStringFieldUpdateOperationsInput | string | null
    micrNo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: ManagerUpdateOneWithoutEmployeesNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutOffboardingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    cvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    idProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeSent?: BoolFieldUpdateOperationsInput | boolean
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    subDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    employeeType?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    doj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    probationDays?: NullableIntFieldUpdateOperationsInput | number | null
    trainingCompletionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permanentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sisterCompany?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    insuranceNo?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retirementAge?: NullableIntFieldUpdateOperationsInput | number | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    altPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyMobile?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    hobbies?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    specialSkills?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    familyMembers?: NullableIntFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    bankHolder?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranch?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    accountNo?: NullableStringFieldUpdateOperationsInput | string | null
    ifscCode?: NullableStringFieldUpdateOperationsInput | string | null
    crnNo?: NullableStringFieldUpdateOperationsInput | string | null
    esicNo?: NullableStringFieldUpdateOperationsInput | string | null
    panNo?: NullableStringFieldUpdateOperationsInput | string | null
    pfNo?: NullableStringFieldUpdateOperationsInput | string | null
    uanNo?: NullableStringFieldUpdateOperationsInput | string | null
    micrNo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExitChecklistUpsertWithWhereUniqueWithoutOffboardingInput = {
    where: ExitChecklistWhereUniqueInput
    update: XOR<ExitChecklistUpdateWithoutOffboardingInput, ExitChecklistUncheckedUpdateWithoutOffboardingInput>
    create: XOR<ExitChecklistCreateWithoutOffboardingInput, ExitChecklistUncheckedCreateWithoutOffboardingInput>
  }

  export type ExitChecklistUpdateWithWhereUniqueWithoutOffboardingInput = {
    where: ExitChecklistWhereUniqueInput
    data: XOR<ExitChecklistUpdateWithoutOffboardingInput, ExitChecklistUncheckedUpdateWithoutOffboardingInput>
  }

  export type ExitChecklistUpdateManyWithWhereWithoutOffboardingInput = {
    where: ExitChecklistScalarWhereInput
    data: XOR<ExitChecklistUpdateManyMutationInput, ExitChecklistUncheckedUpdateManyWithoutOffboardingInput>
  }

  export type ExitChecklistScalarWhereInput = {
    AND?: ExitChecklistScalarWhereInput | ExitChecklistScalarWhereInput[]
    OR?: ExitChecklistScalarWhereInput[]
    NOT?: ExitChecklistScalarWhereInput | ExitChecklistScalarWhereInput[]
    id?: IntFilter<"ExitChecklist"> | number
    offboardingId?: IntFilter<"ExitChecklist"> | number
    department?: StringFilter<"ExitChecklist"> | string
    taskName?: StringFilter<"ExitChecklist"> | string
    assignedTo?: StringNullableFilter<"ExitChecklist"> | string | null
    status?: StringFilter<"ExitChecklist"> | string
    completionDate?: DateTimeNullableFilter<"ExitChecklist"> | Date | string | null
    createdAt?: DateTimeFilter<"ExitChecklist"> | Date | string
    updatedAt?: DateTimeFilter<"ExitChecklist"> | Date | string
  }

  export type OffboardingCreateWithoutChecklistsInput = {
    lastWorkingDate?: Date | string | null
    reason?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutOffboardingsInput
  }

  export type OffboardingUncheckedCreateWithoutChecklistsInput = {
    id?: number
    employeeId: number
    lastWorkingDate?: Date | string | null
    reason?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OffboardingCreateOrConnectWithoutChecklistsInput = {
    where: OffboardingWhereUniqueInput
    create: XOR<OffboardingCreateWithoutChecklistsInput, OffboardingUncheckedCreateWithoutChecklistsInput>
  }

  export type OffboardingUpsertWithoutChecklistsInput = {
    update: XOR<OffboardingUpdateWithoutChecklistsInput, OffboardingUncheckedUpdateWithoutChecklistsInput>
    create: XOR<OffboardingCreateWithoutChecklistsInput, OffboardingUncheckedCreateWithoutChecklistsInput>
    where?: OffboardingWhereInput
  }

  export type OffboardingUpdateToOneWithWhereWithoutChecklistsInput = {
    where?: OffboardingWhereInput
    data: XOR<OffboardingUpdateWithoutChecklistsInput, OffboardingUncheckedUpdateWithoutChecklistsInput>
  }

  export type OffboardingUpdateWithoutChecklistsInput = {
    lastWorkingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutOffboardingsNestedInput
  }

  export type OffboardingUncheckedUpdateWithoutChecklistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    lastWorkingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OffboardingCreateManyEmployeeInput = {
    id?: number
    lastWorkingDate?: Date | string | null
    reason?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OffboardingUpdateWithoutEmployeeInput = {
    lastWorkingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checklists?: ExitChecklistUpdateManyWithoutOffboardingNestedInput
  }

  export type OffboardingUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastWorkingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checklists?: ExitChecklistUncheckedUpdateManyWithoutOffboardingNestedInput
  }

  export type OffboardingUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastWorkingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateManyManagerInput = {
    id?: number
    employeeId: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    mobile?: string | null
    dob?: Date | string | null
    bloodGroup?: string | null
    gender?: string | null
    cvUrl?: string | null
    idProofUrl?: string | null
    welcomeSent?: boolean
    designation?: string | null
    branch?: string | null
    department?: string | null
    subDepartment?: string | null
    grade?: string | null
    employeeType?: string | null
    zone?: string | null
    level?: string | null
    shift?: string | null
    email?: string | null
    doj?: Date | string | null
    probationDays?: number | null
    trainingCompletionDate?: Date | string | null
    permanentDate?: Date | string | null
    sisterCompany?: string | null
    location?: string | null
    insuranceNo?: string | null
    insuranceCompany?: string | null
    insuranceExpiry?: Date | string | null
    retirementAge?: number | null
    jobDescription?: string | null
    whatsapp?: string | null
    altPhone?: string | null
    emergencyNumber?: string | null
    companyMobile?: string | null
    currentAddress?: string | null
    permanentAddress?: string | null
    personalEmail?: string | null
    socialLinks?: string | null
    skills?: string | null
    hobbies?: string | null
    languages?: string | null
    specialSkills?: string | null
    maritalStatus?: string | null
    familyMembers?: number | null
    nationality?: string | null
    bankHolder?: string | null
    bankName?: string | null
    bankBranch?: string | null
    accountType?: string | null
    accountNo?: string | null
    ifscCode?: string | null
    crnNo?: string | null
    esicNo?: string | null
    panNo?: string | null
    pfNo?: string | null
    uanNo?: string | null
    micrNo?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateWithoutManagerInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    cvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    idProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeSent?: BoolFieldUpdateOperationsInput | boolean
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    subDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    employeeType?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    doj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    probationDays?: NullableIntFieldUpdateOperationsInput | number | null
    trainingCompletionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permanentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sisterCompany?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceNo?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retirementAge?: NullableIntFieldUpdateOperationsInput | number | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    altPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyMobile?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    hobbies?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    specialSkills?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    familyMembers?: NullableIntFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    bankHolder?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranch?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    accountNo?: NullableStringFieldUpdateOperationsInput | string | null
    ifscCode?: NullableStringFieldUpdateOperationsInput | string | null
    crnNo?: NullableStringFieldUpdateOperationsInput | string | null
    esicNo?: NullableStringFieldUpdateOperationsInput | string | null
    panNo?: NullableStringFieldUpdateOperationsInput | string | null
    pfNo?: NullableStringFieldUpdateOperationsInput | string | null
    uanNo?: NullableStringFieldUpdateOperationsInput | string | null
    micrNo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offboardings?: OffboardingUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    cvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    idProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeSent?: BoolFieldUpdateOperationsInput | boolean
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    subDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    employeeType?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    doj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    probationDays?: NullableIntFieldUpdateOperationsInput | number | null
    trainingCompletionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permanentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sisterCompany?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceNo?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retirementAge?: NullableIntFieldUpdateOperationsInput | number | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    altPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyMobile?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    hobbies?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    specialSkills?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    familyMembers?: NullableIntFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    bankHolder?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranch?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    accountNo?: NullableStringFieldUpdateOperationsInput | string | null
    ifscCode?: NullableStringFieldUpdateOperationsInput | string | null
    crnNo?: NullableStringFieldUpdateOperationsInput | string | null
    esicNo?: NullableStringFieldUpdateOperationsInput | string | null
    panNo?: NullableStringFieldUpdateOperationsInput | string | null
    pfNo?: NullableStringFieldUpdateOperationsInput | string | null
    uanNo?: NullableStringFieldUpdateOperationsInput | string | null
    micrNo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offboardings?: OffboardingUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    cvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    idProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeSent?: BoolFieldUpdateOperationsInput | boolean
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    subDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    employeeType?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    doj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    probationDays?: NullableIntFieldUpdateOperationsInput | number | null
    trainingCompletionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permanentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sisterCompany?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceNo?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceCompany?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retirementAge?: NullableIntFieldUpdateOperationsInput | number | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    altPhone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyMobile?: NullableStringFieldUpdateOperationsInput | string | null
    currentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    permanentAddress?: NullableStringFieldUpdateOperationsInput | string | null
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    hobbies?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    specialSkills?: NullableStringFieldUpdateOperationsInput | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    familyMembers?: NullableIntFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    bankHolder?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankBranch?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    accountNo?: NullableStringFieldUpdateOperationsInput | string | null
    ifscCode?: NullableStringFieldUpdateOperationsInput | string | null
    crnNo?: NullableStringFieldUpdateOperationsInput | string | null
    esicNo?: NullableStringFieldUpdateOperationsInput | string | null
    panNo?: NullableStringFieldUpdateOperationsInput | string | null
    pfNo?: NullableStringFieldUpdateOperationsInput | string | null
    uanNo?: NullableStringFieldUpdateOperationsInput | string | null
    micrNo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExitChecklistCreateManyOffboardingInput = {
    id?: number
    department: string
    taskName: string
    assignedTo?: string | null
    status?: string
    completionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExitChecklistUpdateWithoutOffboardingInput = {
    department?: StringFieldUpdateOperationsInput | string
    taskName?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExitChecklistUncheckedUpdateWithoutOffboardingInput = {
    id?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    taskName?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExitChecklistUncheckedUpdateManyWithoutOffboardingInput = {
    id?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    taskName?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}