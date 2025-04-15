
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
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model PayPeriod
 * 
 */
export type PayPeriod = $Result.DefaultSelection<Prisma.$PayPeriodPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payPeriod`: Exposes CRUD operations for the **PayPeriod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayPeriods
    * const payPeriods = await prisma.payPeriod.findMany()
    * ```
    */
  get payPeriod(): Prisma.PayPeriodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Organization: 'Organization',
    PayPeriod: 'PayPeriod',
    Employee: 'Employee'
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
      modelProps: "organization" | "payPeriod" | "employee"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      PayPeriod: {
        payload: Prisma.$PayPeriodPayload<ExtArgs>
        fields: Prisma.PayPeriodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayPeriodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayPeriodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayPeriodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayPeriodPayload>
          }
          findFirst: {
            args: Prisma.PayPeriodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayPeriodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayPeriodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayPeriodPayload>
          }
          findMany: {
            args: Prisma.PayPeriodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayPeriodPayload>[]
          }
          create: {
            args: Prisma.PayPeriodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayPeriodPayload>
          }
          createMany: {
            args: Prisma.PayPeriodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PayPeriodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayPeriodPayload>
          }
          update: {
            args: Prisma.PayPeriodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayPeriodPayload>
          }
          deleteMany: {
            args: Prisma.PayPeriodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayPeriodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PayPeriodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayPeriodPayload>
          }
          aggregate: {
            args: Prisma.PayPeriodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayPeriod>
          }
          groupBy: {
            args: Prisma.PayPeriodGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayPeriodGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayPeriodCountArgs<ExtArgs>
            result: $Utils.Optional<PayPeriodCountAggregateOutputType> | number
          }
        }
      }
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    organization?: OrganizationOmit
    payPeriod?: PayPeriodOmit
    employee?: EmployeeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    employees: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | OrganizationCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Count Type PayPeriodCountOutputType
   */

  export type PayPeriodCountOutputType = {
    employees: number
  }

  export type PayPeriodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | PayPeriodCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes
  /**
   * PayPeriodCountOutputType without action
   */
  export type PayPeriodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayPeriodCountOutputType
     */
    select?: PayPeriodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PayPeriodCountOutputType without action
   */
  export type PayPeriodCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    id: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    id: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: number | null
    organizationName: string | null
    registrationNumber: string | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: number | null
    organizationName: string | null
    registrationNumber: string | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    organizationName: number
    registrationNumber: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    id?: true
  }

  export type OrganizationSumAggregateInputType = {
    id?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    organizationName?: true
    registrationNumber?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    organizationName?: true
    registrationNumber?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    organizationName?: true
    registrationNumber?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: number
    organizationName: string
    registrationNumber: string
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationName?: boolean
    registrationNumber?: boolean
    employees?: boolean | Organization$employeesArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>



  export type OrganizationSelectScalar = {
    id?: boolean
    organizationName?: boolean
    registrationNumber?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationName" | "registrationNumber", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | Organization$employeesArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      employees: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      organizationName: string
      registrationNumber: string
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
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
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends Organization$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'Int'>
    readonly organizationName: FieldRef<"Organization", 'String'>
    readonly registrationNumber: FieldRef<"Organization", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.employees
   */
  export type Organization$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model PayPeriod
   */

  export type AggregatePayPeriod = {
    _count: PayPeriodCountAggregateOutputType | null
    _avg: PayPeriodAvgAggregateOutputType | null
    _sum: PayPeriodSumAggregateOutputType | null
    _min: PayPeriodMinAggregateOutputType | null
    _max: PayPeriodMaxAggregateOutputType | null
  }

  export type PayPeriodAvgAggregateOutputType = {
    id: number | null
    year: number | null
    month: number | null
  }

  export type PayPeriodSumAggregateOutputType = {
    id: number | null
    year: number | null
    month: number | null
  }

  export type PayPeriodMinAggregateOutputType = {
    id: number | null
    year: number | null
    month: number | null
  }

  export type PayPeriodMaxAggregateOutputType = {
    id: number | null
    year: number | null
    month: number | null
  }

  export type PayPeriodCountAggregateOutputType = {
    id: number
    year: number
    month: number
    _all: number
  }


  export type PayPeriodAvgAggregateInputType = {
    id?: true
    year?: true
    month?: true
  }

  export type PayPeriodSumAggregateInputType = {
    id?: true
    year?: true
    month?: true
  }

  export type PayPeriodMinAggregateInputType = {
    id?: true
    year?: true
    month?: true
  }

  export type PayPeriodMaxAggregateInputType = {
    id?: true
    year?: true
    month?: true
  }

  export type PayPeriodCountAggregateInputType = {
    id?: true
    year?: true
    month?: true
    _all?: true
  }

  export type PayPeriodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayPeriod to aggregate.
     */
    where?: PayPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayPeriods to fetch.
     */
    orderBy?: PayPeriodOrderByWithRelationInput | PayPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayPeriods
    **/
    _count?: true | PayPeriodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayPeriodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayPeriodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayPeriodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayPeriodMaxAggregateInputType
  }

  export type GetPayPeriodAggregateType<T extends PayPeriodAggregateArgs> = {
        [P in keyof T & keyof AggregatePayPeriod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayPeriod[P]>
      : GetScalarType<T[P], AggregatePayPeriod[P]>
  }




  export type PayPeriodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayPeriodWhereInput
    orderBy?: PayPeriodOrderByWithAggregationInput | PayPeriodOrderByWithAggregationInput[]
    by: PayPeriodScalarFieldEnum[] | PayPeriodScalarFieldEnum
    having?: PayPeriodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayPeriodCountAggregateInputType | true
    _avg?: PayPeriodAvgAggregateInputType
    _sum?: PayPeriodSumAggregateInputType
    _min?: PayPeriodMinAggregateInputType
    _max?: PayPeriodMaxAggregateInputType
  }

  export type PayPeriodGroupByOutputType = {
    id: number
    year: number
    month: number
    _count: PayPeriodCountAggregateOutputType | null
    _avg: PayPeriodAvgAggregateOutputType | null
    _sum: PayPeriodSumAggregateOutputType | null
    _min: PayPeriodMinAggregateOutputType | null
    _max: PayPeriodMaxAggregateOutputType | null
  }

  type GetPayPeriodGroupByPayload<T extends PayPeriodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayPeriodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayPeriodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayPeriodGroupByOutputType[P]>
            : GetScalarType<T[P], PayPeriodGroupByOutputType[P]>
        }
      >
    >


  export type PayPeriodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    month?: boolean
    employees?: boolean | PayPeriod$employeesArgs<ExtArgs>
    _count?: boolean | PayPeriodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payPeriod"]>



  export type PayPeriodSelectScalar = {
    id?: boolean
    year?: boolean
    month?: boolean
  }

  export type PayPeriodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "month", ExtArgs["result"]["payPeriod"]>
  export type PayPeriodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | PayPeriod$employeesArgs<ExtArgs>
    _count?: boolean | PayPeriodCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PayPeriodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayPeriod"
    objects: {
      employees: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      year: number
      month: number
    }, ExtArgs["result"]["payPeriod"]>
    composites: {}
  }

  type PayPeriodGetPayload<S extends boolean | null | undefined | PayPeriodDefaultArgs> = $Result.GetResult<Prisma.$PayPeriodPayload, S>

  type PayPeriodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayPeriodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayPeriodCountAggregateInputType | true
    }

  export interface PayPeriodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayPeriod'], meta: { name: 'PayPeriod' } }
    /**
     * Find zero or one PayPeriod that matches the filter.
     * @param {PayPeriodFindUniqueArgs} args - Arguments to find a PayPeriod
     * @example
     * // Get one PayPeriod
     * const payPeriod = await prisma.payPeriod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayPeriodFindUniqueArgs>(args: SelectSubset<T, PayPeriodFindUniqueArgs<ExtArgs>>): Prisma__PayPeriodClient<$Result.GetResult<Prisma.$PayPeriodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayPeriod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayPeriodFindUniqueOrThrowArgs} args - Arguments to find a PayPeriod
     * @example
     * // Get one PayPeriod
     * const payPeriod = await prisma.payPeriod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayPeriodFindUniqueOrThrowArgs>(args: SelectSubset<T, PayPeriodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayPeriodClient<$Result.GetResult<Prisma.$PayPeriodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayPeriod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayPeriodFindFirstArgs} args - Arguments to find a PayPeriod
     * @example
     * // Get one PayPeriod
     * const payPeriod = await prisma.payPeriod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayPeriodFindFirstArgs>(args?: SelectSubset<T, PayPeriodFindFirstArgs<ExtArgs>>): Prisma__PayPeriodClient<$Result.GetResult<Prisma.$PayPeriodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayPeriod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayPeriodFindFirstOrThrowArgs} args - Arguments to find a PayPeriod
     * @example
     * // Get one PayPeriod
     * const payPeriod = await prisma.payPeriod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayPeriodFindFirstOrThrowArgs>(args?: SelectSubset<T, PayPeriodFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayPeriodClient<$Result.GetResult<Prisma.$PayPeriodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayPeriods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayPeriodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayPeriods
     * const payPeriods = await prisma.payPeriod.findMany()
     * 
     * // Get first 10 PayPeriods
     * const payPeriods = await prisma.payPeriod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payPeriodWithIdOnly = await prisma.payPeriod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayPeriodFindManyArgs>(args?: SelectSubset<T, PayPeriodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayPeriodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayPeriod.
     * @param {PayPeriodCreateArgs} args - Arguments to create a PayPeriod.
     * @example
     * // Create one PayPeriod
     * const PayPeriod = await prisma.payPeriod.create({
     *   data: {
     *     // ... data to create a PayPeriod
     *   }
     * })
     * 
     */
    create<T extends PayPeriodCreateArgs>(args: SelectSubset<T, PayPeriodCreateArgs<ExtArgs>>): Prisma__PayPeriodClient<$Result.GetResult<Prisma.$PayPeriodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayPeriods.
     * @param {PayPeriodCreateManyArgs} args - Arguments to create many PayPeriods.
     * @example
     * // Create many PayPeriods
     * const payPeriod = await prisma.payPeriod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayPeriodCreateManyArgs>(args?: SelectSubset<T, PayPeriodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PayPeriod.
     * @param {PayPeriodDeleteArgs} args - Arguments to delete one PayPeriod.
     * @example
     * // Delete one PayPeriod
     * const PayPeriod = await prisma.payPeriod.delete({
     *   where: {
     *     // ... filter to delete one PayPeriod
     *   }
     * })
     * 
     */
    delete<T extends PayPeriodDeleteArgs>(args: SelectSubset<T, PayPeriodDeleteArgs<ExtArgs>>): Prisma__PayPeriodClient<$Result.GetResult<Prisma.$PayPeriodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayPeriod.
     * @param {PayPeriodUpdateArgs} args - Arguments to update one PayPeriod.
     * @example
     * // Update one PayPeriod
     * const payPeriod = await prisma.payPeriod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayPeriodUpdateArgs>(args: SelectSubset<T, PayPeriodUpdateArgs<ExtArgs>>): Prisma__PayPeriodClient<$Result.GetResult<Prisma.$PayPeriodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayPeriods.
     * @param {PayPeriodDeleteManyArgs} args - Arguments to filter PayPeriods to delete.
     * @example
     * // Delete a few PayPeriods
     * const { count } = await prisma.payPeriod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayPeriodDeleteManyArgs>(args?: SelectSubset<T, PayPeriodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayPeriods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayPeriodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayPeriods
     * const payPeriod = await prisma.payPeriod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayPeriodUpdateManyArgs>(args: SelectSubset<T, PayPeriodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PayPeriod.
     * @param {PayPeriodUpsertArgs} args - Arguments to update or create a PayPeriod.
     * @example
     * // Update or create a PayPeriod
     * const payPeriod = await prisma.payPeriod.upsert({
     *   create: {
     *     // ... data to create a PayPeriod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayPeriod we want to update
     *   }
     * })
     */
    upsert<T extends PayPeriodUpsertArgs>(args: SelectSubset<T, PayPeriodUpsertArgs<ExtArgs>>): Prisma__PayPeriodClient<$Result.GetResult<Prisma.$PayPeriodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayPeriods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayPeriodCountArgs} args - Arguments to filter PayPeriods to count.
     * @example
     * // Count the number of PayPeriods
     * const count = await prisma.payPeriod.count({
     *   where: {
     *     // ... the filter for the PayPeriods we want to count
     *   }
     * })
    **/
    count<T extends PayPeriodCountArgs>(
      args?: Subset<T, PayPeriodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayPeriodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayPeriod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayPeriodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayPeriodAggregateArgs>(args: Subset<T, PayPeriodAggregateArgs>): Prisma.PrismaPromise<GetPayPeriodAggregateType<T>>

    /**
     * Group by PayPeriod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayPeriodGroupByArgs} args - Group by arguments.
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
      T extends PayPeriodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayPeriodGroupByArgs['orderBy'] }
        : { orderBy?: PayPeriodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayPeriodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayPeriodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayPeriod model
   */
  readonly fields: PayPeriodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayPeriod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayPeriodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends PayPeriod$employeesArgs<ExtArgs> = {}>(args?: Subset<T, PayPeriod$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PayPeriod model
   */
  interface PayPeriodFieldRefs {
    readonly id: FieldRef<"PayPeriod", 'Int'>
    readonly year: FieldRef<"PayPeriod", 'Int'>
    readonly month: FieldRef<"PayPeriod", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PayPeriod findUnique
   */
  export type PayPeriodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayPeriod
     */
    select?: PayPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayPeriod
     */
    omit?: PayPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayPeriodInclude<ExtArgs> | null
    /**
     * Filter, which PayPeriod to fetch.
     */
    where: PayPeriodWhereUniqueInput
  }

  /**
   * PayPeriod findUniqueOrThrow
   */
  export type PayPeriodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayPeriod
     */
    select?: PayPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayPeriod
     */
    omit?: PayPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayPeriodInclude<ExtArgs> | null
    /**
     * Filter, which PayPeriod to fetch.
     */
    where: PayPeriodWhereUniqueInput
  }

  /**
   * PayPeriod findFirst
   */
  export type PayPeriodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayPeriod
     */
    select?: PayPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayPeriod
     */
    omit?: PayPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayPeriodInclude<ExtArgs> | null
    /**
     * Filter, which PayPeriod to fetch.
     */
    where?: PayPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayPeriods to fetch.
     */
    orderBy?: PayPeriodOrderByWithRelationInput | PayPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayPeriods.
     */
    cursor?: PayPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayPeriods.
     */
    distinct?: PayPeriodScalarFieldEnum | PayPeriodScalarFieldEnum[]
  }

  /**
   * PayPeriod findFirstOrThrow
   */
  export type PayPeriodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayPeriod
     */
    select?: PayPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayPeriod
     */
    omit?: PayPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayPeriodInclude<ExtArgs> | null
    /**
     * Filter, which PayPeriod to fetch.
     */
    where?: PayPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayPeriods to fetch.
     */
    orderBy?: PayPeriodOrderByWithRelationInput | PayPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayPeriods.
     */
    cursor?: PayPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayPeriods.
     */
    distinct?: PayPeriodScalarFieldEnum | PayPeriodScalarFieldEnum[]
  }

  /**
   * PayPeriod findMany
   */
  export type PayPeriodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayPeriod
     */
    select?: PayPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayPeriod
     */
    omit?: PayPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayPeriodInclude<ExtArgs> | null
    /**
     * Filter, which PayPeriods to fetch.
     */
    where?: PayPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayPeriods to fetch.
     */
    orderBy?: PayPeriodOrderByWithRelationInput | PayPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayPeriods.
     */
    cursor?: PayPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayPeriods.
     */
    skip?: number
    distinct?: PayPeriodScalarFieldEnum | PayPeriodScalarFieldEnum[]
  }

  /**
   * PayPeriod create
   */
  export type PayPeriodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayPeriod
     */
    select?: PayPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayPeriod
     */
    omit?: PayPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayPeriodInclude<ExtArgs> | null
    /**
     * The data needed to create a PayPeriod.
     */
    data: XOR<PayPeriodCreateInput, PayPeriodUncheckedCreateInput>
  }

  /**
   * PayPeriod createMany
   */
  export type PayPeriodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayPeriods.
     */
    data: PayPeriodCreateManyInput | PayPeriodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayPeriod update
   */
  export type PayPeriodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayPeriod
     */
    select?: PayPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayPeriod
     */
    omit?: PayPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayPeriodInclude<ExtArgs> | null
    /**
     * The data needed to update a PayPeriod.
     */
    data: XOR<PayPeriodUpdateInput, PayPeriodUncheckedUpdateInput>
    /**
     * Choose, which PayPeriod to update.
     */
    where: PayPeriodWhereUniqueInput
  }

  /**
   * PayPeriod updateMany
   */
  export type PayPeriodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayPeriods.
     */
    data: XOR<PayPeriodUpdateManyMutationInput, PayPeriodUncheckedUpdateManyInput>
    /**
     * Filter which PayPeriods to update
     */
    where?: PayPeriodWhereInput
    /**
     * Limit how many PayPeriods to update.
     */
    limit?: number
  }

  /**
   * PayPeriod upsert
   */
  export type PayPeriodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayPeriod
     */
    select?: PayPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayPeriod
     */
    omit?: PayPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayPeriodInclude<ExtArgs> | null
    /**
     * The filter to search for the PayPeriod to update in case it exists.
     */
    where: PayPeriodWhereUniqueInput
    /**
     * In case the PayPeriod found by the `where` argument doesn't exist, create a new PayPeriod with this data.
     */
    create: XOR<PayPeriodCreateInput, PayPeriodUncheckedCreateInput>
    /**
     * In case the PayPeriod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayPeriodUpdateInput, PayPeriodUncheckedUpdateInput>
  }

  /**
   * PayPeriod delete
   */
  export type PayPeriodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayPeriod
     */
    select?: PayPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayPeriod
     */
    omit?: PayPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayPeriodInclude<ExtArgs> | null
    /**
     * Filter which PayPeriod to delete.
     */
    where: PayPeriodWhereUniqueInput
  }

  /**
   * PayPeriod deleteMany
   */
  export type PayPeriodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayPeriods to delete
     */
    where?: PayPeriodWhereInput
    /**
     * Limit how many PayPeriods to delete.
     */
    limit?: number
  }

  /**
   * PayPeriod.employees
   */
  export type PayPeriod$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * PayPeriod without action
   */
  export type PayPeriodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayPeriod
     */
    select?: PayPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayPeriod
     */
    omit?: PayPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayPeriodInclude<ExtArgs> | null
  }


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
    staffBasicPay: number | null
    staffMedicalPay: number | null
    staffHousingPay: number | null
    staffBonus: number | null
    PAYE: number | null
    savings: number | null
    organizationId: number | null
    payPeriodId: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    id: number | null
    staffBasicPay: number | null
    staffMedicalPay: number | null
    staffHousingPay: number | null
    staffBonus: number | null
    PAYE: number | null
    savings: number | null
    organizationId: number | null
    payPeriodId: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: number | null
    staffNIN: string | null
    staffNssfNumber: string | null
    contributionType: string | null
    incomeType: string | null
    staffName: string | null
    staffBasicPay: number | null
    staffMedicalPay: number | null
    staffHousingPay: number | null
    staffBonus: number | null
    PAYE: number | null
    savings: number | null
    organizationId: number | null
    payPeriodId: number | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: number | null
    staffNIN: string | null
    staffNssfNumber: string | null
    contributionType: string | null
    incomeType: string | null
    staffName: string | null
    staffBasicPay: number | null
    staffMedicalPay: number | null
    staffHousingPay: number | null
    staffBonus: number | null
    PAYE: number | null
    savings: number | null
    organizationId: number | null
    payPeriodId: number | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    staffNIN: number
    staffNssfNumber: number
    contributionType: number
    incomeType: number
    staffName: number
    staffBasicPay: number
    staffMedicalPay: number
    staffHousingPay: number
    staffBonus: number
    PAYE: number
    savings: number
    organizationId: number
    payPeriodId: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    id?: true
    staffBasicPay?: true
    staffMedicalPay?: true
    staffHousingPay?: true
    staffBonus?: true
    PAYE?: true
    savings?: true
    organizationId?: true
    payPeriodId?: true
  }

  export type EmployeeSumAggregateInputType = {
    id?: true
    staffBasicPay?: true
    staffMedicalPay?: true
    staffHousingPay?: true
    staffBonus?: true
    PAYE?: true
    savings?: true
    organizationId?: true
    payPeriodId?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    staffNIN?: true
    staffNssfNumber?: true
    contributionType?: true
    incomeType?: true
    staffName?: true
    staffBasicPay?: true
    staffMedicalPay?: true
    staffHousingPay?: true
    staffBonus?: true
    PAYE?: true
    savings?: true
    organizationId?: true
    payPeriodId?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    staffNIN?: true
    staffNssfNumber?: true
    contributionType?: true
    incomeType?: true
    staffName?: true
    staffBasicPay?: true
    staffMedicalPay?: true
    staffHousingPay?: true
    staffBonus?: true
    PAYE?: true
    savings?: true
    organizationId?: true
    payPeriodId?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    staffNIN?: true
    staffNssfNumber?: true
    contributionType?: true
    incomeType?: true
    staffName?: true
    staffBasicPay?: true
    staffMedicalPay?: true
    staffHousingPay?: true
    staffBonus?: true
    PAYE?: true
    savings?: true
    organizationId?: true
    payPeriodId?: true
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
    staffNIN: string
    staffNssfNumber: string
    contributionType: string
    incomeType: string
    staffName: string
    staffBasicPay: number
    staffMedicalPay: number
    staffHousingPay: number
    staffBonus: number
    PAYE: number
    savings: number
    organizationId: number
    payPeriodId: number
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
    staffNIN?: boolean
    staffNssfNumber?: boolean
    contributionType?: boolean
    incomeType?: boolean
    staffName?: boolean
    staffBasicPay?: boolean
    staffMedicalPay?: boolean
    staffHousingPay?: boolean
    staffBonus?: boolean
    PAYE?: boolean
    savings?: boolean
    organizationId?: boolean
    payPeriodId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    payPeriod?: boolean | PayPeriodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>



  export type EmployeeSelectScalar = {
    id?: boolean
    staffNIN?: boolean
    staffNssfNumber?: boolean
    contributionType?: boolean
    incomeType?: boolean
    staffName?: boolean
    staffBasicPay?: boolean
    staffMedicalPay?: boolean
    staffHousingPay?: boolean
    staffBonus?: boolean
    PAYE?: boolean
    savings?: boolean
    organizationId?: boolean
    payPeriodId?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "staffNIN" | "staffNssfNumber" | "contributionType" | "incomeType" | "staffName" | "staffBasicPay" | "staffMedicalPay" | "staffHousingPay" | "staffBonus" | "PAYE" | "savings" | "organizationId" | "payPeriodId", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    payPeriod?: boolean | PayPeriodDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      payPeriod: Prisma.$PayPeriodPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      staffNIN: string
      staffNssfNumber: string
      contributionType: string
      incomeType: string
      staffName: string
      staffBasicPay: number
      staffMedicalPay: number
      staffHousingPay: number
      staffBonus: number
      PAYE: number
      savings: number
      organizationId: number
      payPeriodId: number
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
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payPeriod<T extends PayPeriodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PayPeriodDefaultArgs<ExtArgs>>): Prisma__PayPeriodClient<$Result.GetResult<Prisma.$PayPeriodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly staffNIN: FieldRef<"Employee", 'String'>
    readonly staffNssfNumber: FieldRef<"Employee", 'String'>
    readonly contributionType: FieldRef<"Employee", 'String'>
    readonly incomeType: FieldRef<"Employee", 'String'>
    readonly staffName: FieldRef<"Employee", 'String'>
    readonly staffBasicPay: FieldRef<"Employee", 'Int'>
    readonly staffMedicalPay: FieldRef<"Employee", 'Int'>
    readonly staffHousingPay: FieldRef<"Employee", 'Int'>
    readonly staffBonus: FieldRef<"Employee", 'Int'>
    readonly PAYE: FieldRef<"Employee", 'Int'>
    readonly savings: FieldRef<"Employee", 'Int'>
    readonly organizationId: FieldRef<"Employee", 'Int'>
    readonly payPeriodId: FieldRef<"Employee", 'Int'>
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    organizationName: 'organizationName',
    registrationNumber: 'registrationNumber'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const PayPeriodScalarFieldEnum: {
    id: 'id',
    year: 'year',
    month: 'month'
  };

  export type PayPeriodScalarFieldEnum = (typeof PayPeriodScalarFieldEnum)[keyof typeof PayPeriodScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    staffNIN: 'staffNIN',
    staffNssfNumber: 'staffNssfNumber',
    contributionType: 'contributionType',
    incomeType: 'incomeType',
    staffName: 'staffName',
    staffBasicPay: 'staffBasicPay',
    staffMedicalPay: 'staffMedicalPay',
    staffHousingPay: 'staffHousingPay',
    staffBonus: 'staffBonus',
    PAYE: 'PAYE',
    savings: 'savings',
    organizationId: 'organizationId',
    payPeriodId: 'payPeriodId'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const OrganizationOrderByRelevanceFieldEnum: {
    organizationName: 'organizationName',
    registrationNumber: 'registrationNumber'
  };

  export type OrganizationOrderByRelevanceFieldEnum = (typeof OrganizationOrderByRelevanceFieldEnum)[keyof typeof OrganizationOrderByRelevanceFieldEnum]


  export const EmployeeOrderByRelevanceFieldEnum: {
    staffNIN: 'staffNIN',
    staffNssfNumber: 'staffNssfNumber',
    contributionType: 'contributionType',
    incomeType: 'incomeType',
    staffName: 'staffName'
  };

  export type EmployeeOrderByRelevanceFieldEnum = (typeof EmployeeOrderByRelevanceFieldEnum)[keyof typeof EmployeeOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: IntFilter<"Organization"> | number
    organizationName?: StringFilter<"Organization"> | string
    registrationNumber?: StringFilter<"Organization"> | string
    employees?: EmployeeListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    organizationName?: SortOrder
    registrationNumber?: SortOrder
    employees?: EmployeeOrderByRelationAggregateInput
    _relevance?: OrganizationOrderByRelevanceInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    organizationName?: string
    registrationNumber?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    employees?: EmployeeListRelationFilter
  }, "id" | "organizationName" | "registrationNumber">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    organizationName?: SortOrder
    registrationNumber?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _avg?: OrganizationAvgOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
    _sum?: OrganizationSumOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Organization"> | number
    organizationName?: StringWithAggregatesFilter<"Organization"> | string
    registrationNumber?: StringWithAggregatesFilter<"Organization"> | string
  }

  export type PayPeriodWhereInput = {
    AND?: PayPeriodWhereInput | PayPeriodWhereInput[]
    OR?: PayPeriodWhereInput[]
    NOT?: PayPeriodWhereInput | PayPeriodWhereInput[]
    id?: IntFilter<"PayPeriod"> | number
    year?: IntFilter<"PayPeriod"> | number
    month?: IntFilter<"PayPeriod"> | number
    employees?: EmployeeListRelationFilter
  }

  export type PayPeriodOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    employees?: EmployeeOrderByRelationAggregateInput
  }

  export type PayPeriodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PayPeriodWhereInput | PayPeriodWhereInput[]
    OR?: PayPeriodWhereInput[]
    NOT?: PayPeriodWhereInput | PayPeriodWhereInput[]
    year?: IntFilter<"PayPeriod"> | number
    month?: IntFilter<"PayPeriod"> | number
    employees?: EmployeeListRelationFilter
  }, "id">

  export type PayPeriodOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    _count?: PayPeriodCountOrderByAggregateInput
    _avg?: PayPeriodAvgOrderByAggregateInput
    _max?: PayPeriodMaxOrderByAggregateInput
    _min?: PayPeriodMinOrderByAggregateInput
    _sum?: PayPeriodSumOrderByAggregateInput
  }

  export type PayPeriodScalarWhereWithAggregatesInput = {
    AND?: PayPeriodScalarWhereWithAggregatesInput | PayPeriodScalarWhereWithAggregatesInput[]
    OR?: PayPeriodScalarWhereWithAggregatesInput[]
    NOT?: PayPeriodScalarWhereWithAggregatesInput | PayPeriodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PayPeriod"> | number
    year?: IntWithAggregatesFilter<"PayPeriod"> | number
    month?: IntWithAggregatesFilter<"PayPeriod"> | number
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: IntFilter<"Employee"> | number
    staffNIN?: StringFilter<"Employee"> | string
    staffNssfNumber?: StringFilter<"Employee"> | string
    contributionType?: StringFilter<"Employee"> | string
    incomeType?: StringFilter<"Employee"> | string
    staffName?: StringFilter<"Employee"> | string
    staffBasicPay?: IntFilter<"Employee"> | number
    staffMedicalPay?: IntFilter<"Employee"> | number
    staffHousingPay?: IntFilter<"Employee"> | number
    staffBonus?: IntFilter<"Employee"> | number
    PAYE?: IntFilter<"Employee"> | number
    savings?: IntFilter<"Employee"> | number
    organizationId?: IntFilter<"Employee"> | number
    payPeriodId?: IntFilter<"Employee"> | number
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    payPeriod?: XOR<PayPeriodScalarRelationFilter, PayPeriodWhereInput>
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    staffNIN?: SortOrder
    staffNssfNumber?: SortOrder
    contributionType?: SortOrder
    incomeType?: SortOrder
    staffName?: SortOrder
    staffBasicPay?: SortOrder
    staffMedicalPay?: SortOrder
    staffHousingPay?: SortOrder
    staffBonus?: SortOrder
    PAYE?: SortOrder
    savings?: SortOrder
    organizationId?: SortOrder
    payPeriodId?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    payPeriod?: PayPeriodOrderByWithRelationInput
    _relevance?: EmployeeOrderByRelevanceInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    staffNIN?: string
    staffNssfNumber?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    contributionType?: StringFilter<"Employee"> | string
    incomeType?: StringFilter<"Employee"> | string
    staffName?: StringFilter<"Employee"> | string
    staffBasicPay?: IntFilter<"Employee"> | number
    staffMedicalPay?: IntFilter<"Employee"> | number
    staffHousingPay?: IntFilter<"Employee"> | number
    staffBonus?: IntFilter<"Employee"> | number
    PAYE?: IntFilter<"Employee"> | number
    savings?: IntFilter<"Employee"> | number
    organizationId?: IntFilter<"Employee"> | number
    payPeriodId?: IntFilter<"Employee"> | number
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    payPeriod?: XOR<PayPeriodScalarRelationFilter, PayPeriodWhereInput>
  }, "id" | "staffNIN" | "staffNssfNumber">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    staffNIN?: SortOrder
    staffNssfNumber?: SortOrder
    contributionType?: SortOrder
    incomeType?: SortOrder
    staffName?: SortOrder
    staffBasicPay?: SortOrder
    staffMedicalPay?: SortOrder
    staffHousingPay?: SortOrder
    staffBonus?: SortOrder
    PAYE?: SortOrder
    savings?: SortOrder
    organizationId?: SortOrder
    payPeriodId?: SortOrder
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
    staffNIN?: StringWithAggregatesFilter<"Employee"> | string
    staffNssfNumber?: StringWithAggregatesFilter<"Employee"> | string
    contributionType?: StringWithAggregatesFilter<"Employee"> | string
    incomeType?: StringWithAggregatesFilter<"Employee"> | string
    staffName?: StringWithAggregatesFilter<"Employee"> | string
    staffBasicPay?: IntWithAggregatesFilter<"Employee"> | number
    staffMedicalPay?: IntWithAggregatesFilter<"Employee"> | number
    staffHousingPay?: IntWithAggregatesFilter<"Employee"> | number
    staffBonus?: IntWithAggregatesFilter<"Employee"> | number
    PAYE?: IntWithAggregatesFilter<"Employee"> | number
    savings?: IntWithAggregatesFilter<"Employee"> | number
    organizationId?: IntWithAggregatesFilter<"Employee"> | number
    payPeriodId?: IntWithAggregatesFilter<"Employee"> | number
  }

  export type OrganizationCreateInput = {
    organizationName: string
    registrationNumber: string
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: number
    organizationName: string
    registrationNumber: string
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    organizationName?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationName?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: number
    organizationName: string
    registrationNumber: string
  }

  export type OrganizationUpdateManyMutationInput = {
    organizationName?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationName?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
  }

  export type PayPeriodCreateInput = {
    year: number
    month: number
    employees?: EmployeeCreateNestedManyWithoutPayPeriodInput
  }

  export type PayPeriodUncheckedCreateInput = {
    id?: number
    year: number
    month: number
    employees?: EmployeeUncheckedCreateNestedManyWithoutPayPeriodInput
  }

  export type PayPeriodUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    employees?: EmployeeUpdateManyWithoutPayPeriodNestedInput
  }

  export type PayPeriodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    employees?: EmployeeUncheckedUpdateManyWithoutPayPeriodNestedInput
  }

  export type PayPeriodCreateManyInput = {
    id?: number
    year: number
    month: number
  }

  export type PayPeriodUpdateManyMutationInput = {
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
  }

  export type PayPeriodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeCreateInput = {
    staffNIN: string
    staffNssfNumber: string
    contributionType: string
    incomeType: string
    staffName: string
    staffBasicPay: number
    staffMedicalPay: number
    staffHousingPay: number
    staffBonus: number
    PAYE: number
    savings: number
    organization: OrganizationCreateNestedOneWithoutEmployeesInput
    payPeriod: PayPeriodCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: number
    staffNIN: string
    staffNssfNumber: string
    contributionType: string
    incomeType: string
    staffName: string
    staffBasicPay: number
    staffMedicalPay: number
    staffHousingPay: number
    staffBonus: number
    PAYE: number
    savings: number
    organizationId: number
    payPeriodId: number
  }

  export type EmployeeUpdateInput = {
    staffNIN?: StringFieldUpdateOperationsInput | string
    staffNssfNumber?: StringFieldUpdateOperationsInput | string
    contributionType?: StringFieldUpdateOperationsInput | string
    incomeType?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    staffBasicPay?: IntFieldUpdateOperationsInput | number
    staffMedicalPay?: IntFieldUpdateOperationsInput | number
    staffHousingPay?: IntFieldUpdateOperationsInput | number
    staffBonus?: IntFieldUpdateOperationsInput | number
    PAYE?: IntFieldUpdateOperationsInput | number
    savings?: IntFieldUpdateOperationsInput | number
    organization?: OrganizationUpdateOneRequiredWithoutEmployeesNestedInput
    payPeriod?: PayPeriodUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    staffNIN?: StringFieldUpdateOperationsInput | string
    staffNssfNumber?: StringFieldUpdateOperationsInput | string
    contributionType?: StringFieldUpdateOperationsInput | string
    incomeType?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    staffBasicPay?: IntFieldUpdateOperationsInput | number
    staffMedicalPay?: IntFieldUpdateOperationsInput | number
    staffHousingPay?: IntFieldUpdateOperationsInput | number
    staffBonus?: IntFieldUpdateOperationsInput | number
    PAYE?: IntFieldUpdateOperationsInput | number
    savings?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    payPeriodId?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeCreateManyInput = {
    id?: number
    staffNIN: string
    staffNssfNumber: string
    contributionType: string
    incomeType: string
    staffName: string
    staffBasicPay: number
    staffMedicalPay: number
    staffHousingPay: number
    staffBonus: number
    PAYE: number
    savings: number
    organizationId: number
    payPeriodId: number
  }

  export type EmployeeUpdateManyMutationInput = {
    staffNIN?: StringFieldUpdateOperationsInput | string
    staffNssfNumber?: StringFieldUpdateOperationsInput | string
    contributionType?: StringFieldUpdateOperationsInput | string
    incomeType?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    staffBasicPay?: IntFieldUpdateOperationsInput | number
    staffMedicalPay?: IntFieldUpdateOperationsInput | number
    staffHousingPay?: IntFieldUpdateOperationsInput | number
    staffBonus?: IntFieldUpdateOperationsInput | number
    PAYE?: IntFieldUpdateOperationsInput | number
    savings?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    staffNIN?: StringFieldUpdateOperationsInput | string
    staffNssfNumber?: StringFieldUpdateOperationsInput | string
    contributionType?: StringFieldUpdateOperationsInput | string
    incomeType?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    staffBasicPay?: IntFieldUpdateOperationsInput | number
    staffMedicalPay?: IntFieldUpdateOperationsInput | number
    staffHousingPay?: IntFieldUpdateOperationsInput | number
    staffBonus?: IntFieldUpdateOperationsInput | number
    PAYE?: IntFieldUpdateOperationsInput | number
    savings?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    payPeriodId?: IntFieldUpdateOperationsInput | number
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

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationOrderByRelevanceInput = {
    fields: OrganizationOrderByRelevanceFieldEnum | OrganizationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    organizationName?: SortOrder
    registrationNumber?: SortOrder
  }

  export type OrganizationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationName?: SortOrder
    registrationNumber?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    organizationName?: SortOrder
    registrationNumber?: SortOrder
  }

  export type OrganizationSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type PayPeriodCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
  }

  export type PayPeriodAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
  }

  export type PayPeriodMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
  }

  export type PayPeriodMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
  }

  export type PayPeriodSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type PayPeriodScalarRelationFilter = {
    is?: PayPeriodWhereInput
    isNot?: PayPeriodWhereInput
  }

  export type EmployeeOrderByRelevanceInput = {
    fields: EmployeeOrderByRelevanceFieldEnum | EmployeeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    staffNIN?: SortOrder
    staffNssfNumber?: SortOrder
    contributionType?: SortOrder
    incomeType?: SortOrder
    staffName?: SortOrder
    staffBasicPay?: SortOrder
    staffMedicalPay?: SortOrder
    staffHousingPay?: SortOrder
    staffBonus?: SortOrder
    PAYE?: SortOrder
    savings?: SortOrder
    organizationId?: SortOrder
    payPeriodId?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
    staffBasicPay?: SortOrder
    staffMedicalPay?: SortOrder
    staffHousingPay?: SortOrder
    staffBonus?: SortOrder
    PAYE?: SortOrder
    savings?: SortOrder
    organizationId?: SortOrder
    payPeriodId?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    staffNIN?: SortOrder
    staffNssfNumber?: SortOrder
    contributionType?: SortOrder
    incomeType?: SortOrder
    staffName?: SortOrder
    staffBasicPay?: SortOrder
    staffMedicalPay?: SortOrder
    staffHousingPay?: SortOrder
    staffBonus?: SortOrder
    PAYE?: SortOrder
    savings?: SortOrder
    organizationId?: SortOrder
    payPeriodId?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    staffNIN?: SortOrder
    staffNssfNumber?: SortOrder
    contributionType?: SortOrder
    incomeType?: SortOrder
    staffName?: SortOrder
    staffBasicPay?: SortOrder
    staffMedicalPay?: SortOrder
    staffHousingPay?: SortOrder
    staffBonus?: SortOrder
    PAYE?: SortOrder
    savings?: SortOrder
    organizationId?: SortOrder
    payPeriodId?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    id?: SortOrder
    staffBasicPay?: SortOrder
    staffMedicalPay?: SortOrder
    staffHousingPay?: SortOrder
    staffBonus?: SortOrder
    PAYE?: SortOrder
    savings?: SortOrder
    organizationId?: SortOrder
    payPeriodId?: SortOrder
  }

  export type EmployeeCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput> | EmployeeCreateWithoutOrganizationInput[] | EmployeeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOrganizationInput | EmployeeCreateOrConnectWithoutOrganizationInput[]
    createMany?: EmployeeCreateManyOrganizationInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput> | EmployeeCreateWithoutOrganizationInput[] | EmployeeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOrganizationInput | EmployeeCreateOrConnectWithoutOrganizationInput[]
    createMany?: EmployeeCreateManyOrganizationInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EmployeeUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput> | EmployeeCreateWithoutOrganizationInput[] | EmployeeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOrganizationInput | EmployeeCreateOrConnectWithoutOrganizationInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutOrganizationInput | EmployeeUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: EmployeeCreateManyOrganizationInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutOrganizationInput | EmployeeUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutOrganizationInput | EmployeeUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput> | EmployeeCreateWithoutOrganizationInput[] | EmployeeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOrganizationInput | EmployeeCreateOrConnectWithoutOrganizationInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutOrganizationInput | EmployeeUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: EmployeeCreateManyOrganizationInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutOrganizationInput | EmployeeUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutOrganizationInput | EmployeeUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeCreateNestedManyWithoutPayPeriodInput = {
    create?: XOR<EmployeeCreateWithoutPayPeriodInput, EmployeeUncheckedCreateWithoutPayPeriodInput> | EmployeeCreateWithoutPayPeriodInput[] | EmployeeUncheckedCreateWithoutPayPeriodInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutPayPeriodInput | EmployeeCreateOrConnectWithoutPayPeriodInput[]
    createMany?: EmployeeCreateManyPayPeriodInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutPayPeriodInput = {
    create?: XOR<EmployeeCreateWithoutPayPeriodInput, EmployeeUncheckedCreateWithoutPayPeriodInput> | EmployeeCreateWithoutPayPeriodInput[] | EmployeeUncheckedCreateWithoutPayPeriodInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutPayPeriodInput | EmployeeCreateOrConnectWithoutPayPeriodInput[]
    createMany?: EmployeeCreateManyPayPeriodInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUpdateManyWithoutPayPeriodNestedInput = {
    create?: XOR<EmployeeCreateWithoutPayPeriodInput, EmployeeUncheckedCreateWithoutPayPeriodInput> | EmployeeCreateWithoutPayPeriodInput[] | EmployeeUncheckedCreateWithoutPayPeriodInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutPayPeriodInput | EmployeeCreateOrConnectWithoutPayPeriodInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutPayPeriodInput | EmployeeUpsertWithWhereUniqueWithoutPayPeriodInput[]
    createMany?: EmployeeCreateManyPayPeriodInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutPayPeriodInput | EmployeeUpdateWithWhereUniqueWithoutPayPeriodInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutPayPeriodInput | EmployeeUpdateManyWithWhereWithoutPayPeriodInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutPayPeriodNestedInput = {
    create?: XOR<EmployeeCreateWithoutPayPeriodInput, EmployeeUncheckedCreateWithoutPayPeriodInput> | EmployeeCreateWithoutPayPeriodInput[] | EmployeeUncheckedCreateWithoutPayPeriodInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutPayPeriodInput | EmployeeCreateOrConnectWithoutPayPeriodInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutPayPeriodInput | EmployeeUpsertWithWhereUniqueWithoutPayPeriodInput[]
    createMany?: EmployeeCreateManyPayPeriodInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutPayPeriodInput | EmployeeUpdateWithWhereUniqueWithoutPayPeriodInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutPayPeriodInput | EmployeeUpdateManyWithWhereWithoutPayPeriodInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<OrganizationCreateWithoutEmployeesInput, OrganizationUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutEmployeesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type PayPeriodCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<PayPeriodCreateWithoutEmployeesInput, PayPeriodUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: PayPeriodCreateOrConnectWithoutEmployeesInput
    connect?: PayPeriodWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<OrganizationCreateWithoutEmployeesInput, OrganizationUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutEmployeesInput
    upsert?: OrganizationUpsertWithoutEmployeesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutEmployeesInput, OrganizationUpdateWithoutEmployeesInput>, OrganizationUncheckedUpdateWithoutEmployeesInput>
  }

  export type PayPeriodUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<PayPeriodCreateWithoutEmployeesInput, PayPeriodUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: PayPeriodCreateOrConnectWithoutEmployeesInput
    upsert?: PayPeriodUpsertWithoutEmployeesInput
    connect?: PayPeriodWhereUniqueInput
    update?: XOR<XOR<PayPeriodUpdateToOneWithWhereWithoutEmployeesInput, PayPeriodUpdateWithoutEmployeesInput>, PayPeriodUncheckedUpdateWithoutEmployeesInput>
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

  export type EmployeeCreateWithoutOrganizationInput = {
    staffNIN: string
    staffNssfNumber: string
    contributionType: string
    incomeType: string
    staffName: string
    staffBasicPay: number
    staffMedicalPay: number
    staffHousingPay: number
    staffBonus: number
    PAYE: number
    savings: number
    payPeriod: PayPeriodCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeUncheckedCreateWithoutOrganizationInput = {
    id?: number
    staffNIN: string
    staffNssfNumber: string
    contributionType: string
    incomeType: string
    staffName: string
    staffBasicPay: number
    staffMedicalPay: number
    staffHousingPay: number
    staffBonus: number
    PAYE: number
    savings: number
    payPeriodId: number
  }

  export type EmployeeCreateOrConnectWithoutOrganizationInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput>
  }

  export type EmployeeCreateManyOrganizationInputEnvelope = {
    data: EmployeeCreateManyOrganizationInput | EmployeeCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutOrganizationInput, EmployeeUncheckedUpdateWithoutOrganizationInput>
    create: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutOrganizationInput, EmployeeUncheckedUpdateWithoutOrganizationInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutOrganizationInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    id?: IntFilter<"Employee"> | number
    staffNIN?: StringFilter<"Employee"> | string
    staffNssfNumber?: StringFilter<"Employee"> | string
    contributionType?: StringFilter<"Employee"> | string
    incomeType?: StringFilter<"Employee"> | string
    staffName?: StringFilter<"Employee"> | string
    staffBasicPay?: IntFilter<"Employee"> | number
    staffMedicalPay?: IntFilter<"Employee"> | number
    staffHousingPay?: IntFilter<"Employee"> | number
    staffBonus?: IntFilter<"Employee"> | number
    PAYE?: IntFilter<"Employee"> | number
    savings?: IntFilter<"Employee"> | number
    organizationId?: IntFilter<"Employee"> | number
    payPeriodId?: IntFilter<"Employee"> | number
  }

  export type EmployeeCreateWithoutPayPeriodInput = {
    staffNIN: string
    staffNssfNumber: string
    contributionType: string
    incomeType: string
    staffName: string
    staffBasicPay: number
    staffMedicalPay: number
    staffHousingPay: number
    staffBonus: number
    PAYE: number
    savings: number
    organization: OrganizationCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeUncheckedCreateWithoutPayPeriodInput = {
    id?: number
    staffNIN: string
    staffNssfNumber: string
    contributionType: string
    incomeType: string
    staffName: string
    staffBasicPay: number
    staffMedicalPay: number
    staffHousingPay: number
    staffBonus: number
    PAYE: number
    savings: number
    organizationId: number
  }

  export type EmployeeCreateOrConnectWithoutPayPeriodInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutPayPeriodInput, EmployeeUncheckedCreateWithoutPayPeriodInput>
  }

  export type EmployeeCreateManyPayPeriodInputEnvelope = {
    data: EmployeeCreateManyPayPeriodInput | EmployeeCreateManyPayPeriodInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithWhereUniqueWithoutPayPeriodInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutPayPeriodInput, EmployeeUncheckedUpdateWithoutPayPeriodInput>
    create: XOR<EmployeeCreateWithoutPayPeriodInput, EmployeeUncheckedCreateWithoutPayPeriodInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutPayPeriodInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutPayPeriodInput, EmployeeUncheckedUpdateWithoutPayPeriodInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutPayPeriodInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutPayPeriodInput>
  }

  export type OrganizationCreateWithoutEmployeesInput = {
    organizationName: string
    registrationNumber: string
  }

  export type OrganizationUncheckedCreateWithoutEmployeesInput = {
    id?: number
    organizationName: string
    registrationNumber: string
  }

  export type OrganizationCreateOrConnectWithoutEmployeesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutEmployeesInput, OrganizationUncheckedCreateWithoutEmployeesInput>
  }

  export type PayPeriodCreateWithoutEmployeesInput = {
    year: number
    month: number
  }

  export type PayPeriodUncheckedCreateWithoutEmployeesInput = {
    id?: number
    year: number
    month: number
  }

  export type PayPeriodCreateOrConnectWithoutEmployeesInput = {
    where: PayPeriodWhereUniqueInput
    create: XOR<PayPeriodCreateWithoutEmployeesInput, PayPeriodUncheckedCreateWithoutEmployeesInput>
  }

  export type OrganizationUpsertWithoutEmployeesInput = {
    update: XOR<OrganizationUpdateWithoutEmployeesInput, OrganizationUncheckedUpdateWithoutEmployeesInput>
    create: XOR<OrganizationCreateWithoutEmployeesInput, OrganizationUncheckedCreateWithoutEmployeesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutEmployeesInput, OrganizationUncheckedUpdateWithoutEmployeesInput>
  }

  export type OrganizationUpdateWithoutEmployeesInput = {
    organizationName?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
  }

  export type OrganizationUncheckedUpdateWithoutEmployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationName?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
  }

  export type PayPeriodUpsertWithoutEmployeesInput = {
    update: XOR<PayPeriodUpdateWithoutEmployeesInput, PayPeriodUncheckedUpdateWithoutEmployeesInput>
    create: XOR<PayPeriodCreateWithoutEmployeesInput, PayPeriodUncheckedCreateWithoutEmployeesInput>
    where?: PayPeriodWhereInput
  }

  export type PayPeriodUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: PayPeriodWhereInput
    data: XOR<PayPeriodUpdateWithoutEmployeesInput, PayPeriodUncheckedUpdateWithoutEmployeesInput>
  }

  export type PayPeriodUpdateWithoutEmployeesInput = {
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
  }

  export type PayPeriodUncheckedUpdateWithoutEmployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeCreateManyOrganizationInput = {
    id?: number
    staffNIN: string
    staffNssfNumber: string
    contributionType: string
    incomeType: string
    staffName: string
    staffBasicPay: number
    staffMedicalPay: number
    staffHousingPay: number
    staffBonus: number
    PAYE: number
    savings: number
    payPeriodId: number
  }

  export type EmployeeUpdateWithoutOrganizationInput = {
    staffNIN?: StringFieldUpdateOperationsInput | string
    staffNssfNumber?: StringFieldUpdateOperationsInput | string
    contributionType?: StringFieldUpdateOperationsInput | string
    incomeType?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    staffBasicPay?: IntFieldUpdateOperationsInput | number
    staffMedicalPay?: IntFieldUpdateOperationsInput | number
    staffHousingPay?: IntFieldUpdateOperationsInput | number
    staffBonus?: IntFieldUpdateOperationsInput | number
    PAYE?: IntFieldUpdateOperationsInput | number
    savings?: IntFieldUpdateOperationsInput | number
    payPeriod?: PayPeriodUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    staffNIN?: StringFieldUpdateOperationsInput | string
    staffNssfNumber?: StringFieldUpdateOperationsInput | string
    contributionType?: StringFieldUpdateOperationsInput | string
    incomeType?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    staffBasicPay?: IntFieldUpdateOperationsInput | number
    staffMedicalPay?: IntFieldUpdateOperationsInput | number
    staffHousingPay?: IntFieldUpdateOperationsInput | number
    staffBonus?: IntFieldUpdateOperationsInput | number
    PAYE?: IntFieldUpdateOperationsInput | number
    savings?: IntFieldUpdateOperationsInput | number
    payPeriodId?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    staffNIN?: StringFieldUpdateOperationsInput | string
    staffNssfNumber?: StringFieldUpdateOperationsInput | string
    contributionType?: StringFieldUpdateOperationsInput | string
    incomeType?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    staffBasicPay?: IntFieldUpdateOperationsInput | number
    staffMedicalPay?: IntFieldUpdateOperationsInput | number
    staffHousingPay?: IntFieldUpdateOperationsInput | number
    staffBonus?: IntFieldUpdateOperationsInput | number
    PAYE?: IntFieldUpdateOperationsInput | number
    savings?: IntFieldUpdateOperationsInput | number
    payPeriodId?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeCreateManyPayPeriodInput = {
    id?: number
    staffNIN: string
    staffNssfNumber: string
    contributionType: string
    incomeType: string
    staffName: string
    staffBasicPay: number
    staffMedicalPay: number
    staffHousingPay: number
    staffBonus: number
    PAYE: number
    savings: number
    organizationId: number
  }

  export type EmployeeUpdateWithoutPayPeriodInput = {
    staffNIN?: StringFieldUpdateOperationsInput | string
    staffNssfNumber?: StringFieldUpdateOperationsInput | string
    contributionType?: StringFieldUpdateOperationsInput | string
    incomeType?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    staffBasicPay?: IntFieldUpdateOperationsInput | number
    staffMedicalPay?: IntFieldUpdateOperationsInput | number
    staffHousingPay?: IntFieldUpdateOperationsInput | number
    staffBonus?: IntFieldUpdateOperationsInput | number
    PAYE?: IntFieldUpdateOperationsInput | number
    savings?: IntFieldUpdateOperationsInput | number
    organization?: OrganizationUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutPayPeriodInput = {
    id?: IntFieldUpdateOperationsInput | number
    staffNIN?: StringFieldUpdateOperationsInput | string
    staffNssfNumber?: StringFieldUpdateOperationsInput | string
    contributionType?: StringFieldUpdateOperationsInput | string
    incomeType?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    staffBasicPay?: IntFieldUpdateOperationsInput | number
    staffMedicalPay?: IntFieldUpdateOperationsInput | number
    staffHousingPay?: IntFieldUpdateOperationsInput | number
    staffBonus?: IntFieldUpdateOperationsInput | number
    PAYE?: IntFieldUpdateOperationsInput | number
    savings?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeUncheckedUpdateManyWithoutPayPeriodInput = {
    id?: IntFieldUpdateOperationsInput | number
    staffNIN?: StringFieldUpdateOperationsInput | string
    staffNssfNumber?: StringFieldUpdateOperationsInput | string
    contributionType?: StringFieldUpdateOperationsInput | string
    incomeType?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    staffBasicPay?: IntFieldUpdateOperationsInput | number
    staffMedicalPay?: IntFieldUpdateOperationsInput | number
    staffHousingPay?: IntFieldUpdateOperationsInput | number
    staffBonus?: IntFieldUpdateOperationsInput | number
    PAYE?: IntFieldUpdateOperationsInput | number
    savings?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
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