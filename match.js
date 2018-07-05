
// build a collection of sockets...set a property for each..
// ...bring an array of logged in users from the otherside
// and then do a foreach with above function while adding a marker as well, 
// to create another array of sockets. so arrUsers maps to arrSockets.
// new socket on the back end is then added to the arrArrRooms, to the next available spot.
// when room is full, emit the room assignment to the user. 

// 1. array of rooms is empty first
// 1. as sockets connect, 
// have rooms as an array of arrays
// when room is not full, put them in, and then when they get putin, check room size, 
// and if right size. for each each person in room  and emit to them a room assignment. 
// each time a socket joins, check length. 


// arrRooms
var arrRooms = []

// arrUsers
var arrUsers = [ 
    { id: 4,
    name: 'Test',
    propic: 'test.com',
    isloggedin: true,
    idfb: '2343151345',
    status: null },
  { id: 9,
    name: 'Sanket C Shah',
    propic:
     'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10100816835811311&height=200&width=200&ext=1530483435&hash=AeQluuGefGPUyaQc',
    isloggedin: true,
    idfb: '10100816835811311',
    status: 'asdfasdfa' } 
]
  
// map above to
// arrSockets
// what does this need to look like? and who uses it?


socketIO.on('connection', 
  function(socket) {


// a socket object looks like this:
Socket {
    nsp:
     Namespace {
       name: '/',
       server:
        Server {
          nsps: [Object],
          parentNsps: Map {},
          _path: '/socket.io',
          _serveClient: true,
          parser: [Object],
          encoder: Encoder {},
          _adapter: [Function: Adapter],
          _origins: '*:*',
          sockets: [Circular],
          eio: [Server],
          httpServer: [Server],
          engine: [Server] },
       sockets: { 'XPvVcff0UT-k0sxuAAAA':[Circular] },
       connected: { 'XPvVcff0UT-k0sxuAAAA': [Circular] },
       fns: [],
       ids: 0,
       rooms: [],
       flags: {},
       adapter:
        Adapter {
          nsp: [Circular],
          rooms: [Object],
          sids: [Object],
          encoder: Encoder {} },
       _events: { connection: [Function] },
       _eventsCount: 1 },
//////////
    server:
     Server {
       nsps: { '/': [Namespace] },
       parentNsps: Map {},
       _path: '/socket.io',
       _serveClient: true,
       parser:
        { protocol: 4,
          types: [Array],
          CONNECT: 0,
          DISCONNECT: 1,
          EVENT: 2,
          ACK: 3,
          ERROR: 4,
          BINARY_EVENT: 5,
          BINARY_ACK: 6,
          Encoder: [Function: Encoder],
          Decoder: [Function: Decoder] },
       encoder: Encoder {},
       _adapter: [Function: Adapter],
       _origins: '*:*',
       sockets:
        Namespace {
          name: '/',
          server: [Circular],
          sockets: [Object],
          connected: [Object],
          fns: [],
          ids: 0,
          rooms: [],
          flags: {},
          adapter: [Adapter],
          _events: [Object],
          _eventsCount: 1 },
       eio:
        Server {
          clients: [Object],
          clientsCount: 1,
          wsEngine: 'ws',
          pingTimeout: 5000,
          pingInterval: 25000,
          upgradeTimeout: 10000,
          maxHttpBufferSize: 100000000,
          transports: [Array],
          allowUpgrades: true,
          allowRequest: [Function: bound ],
          cookie: 'io',
          cookiePath: '/',
          cookieHttpOnly: true,
          perMessageDeflate: [Object],
          httpCompression: [Object],
          initialPacket: [Array],
          ws: [WebSocketServer],
          _events: [Object],
          _eventsCount: 1 },
       httpServer:
        Server {
          _contexts: [],
          requestCert: false,
          rejectUnauthorized: true,
          key:
           <Buffer 2d 2d 2d 2d 2d 42 45 47 49 4e 20 50 52 49 56 41 54 45 20 4b 4559 2d 2d 2d 2d 2d 0a 4d 49 49 45 76 51 49 42 41 44 41 4e 42 67 6b 71 68 6b 69 47 39 77 ... >,
          cert:
           <Buffer 2d 2d 2d 2d 2d 42 45 47 49 4e 20 43 45 52 54 49 46 49 43 41 5445 2d 2d 2d 2d 2d 0a 4d 49 49 44 78 6a 43 43 41 71 36 67 41 77 49 42 41 67 49 4a 41 4b ... >,
          honorCipherOrder: true,
          ALPNProtocols: <Buffer 08 68 7474 70 2f 31 2e 31>,
          sessionIdContext: 'e44342896fdf8efdf1e6b3cc83b4b967',
          _sharedCreds: [SecureContext],
          _events: [Object],
          _eventsCount: 7,
          _maxListeners: undefined,
          _connections: 2,
          _handle: [TCP],
          _usingWorkers: false,
          _workers: [],
          _unref: false,
          allowHalfOpen: false,
          pauseOnConnect: false,
          httpAllowHalfOpen: false,
          timeout: 120000,
          keepAliveTimeout: 5000,
          maxHeadersCount: null,
          _connectionKey: '6::::443',
          [Symbol(IncomingMessage)]: [Function],
          [Symbol(ServerResponse)]: [Function],
          [Symbol(handshake-timeout)]: 120000,
          [Symbol(snicallback)]: undefined,
          [Symbol(asyncId)]: 6 },
       engine:
        Server {
          clients: [Object],
          clientsCount: 1,
          wsEngine: 'ws',
          pingTimeout: 5000,
          pingInterval: 25000,
          upgradeTimeout: 10000,
          maxHttpBufferSize: 100000000,
          transports: [Array],
          allowUpgrades: true,
          allowRequest: [Function: bound ],
          cookie: 'io',
          cookiePath: '/',
          cookieHttpOnly: true,
          perMessageDeflate: [Object],
          httpCompression: [Object],
          initialPacket: [Array],
          ws: [WebSocketServer],
          _events: [Object],
          _eventsCount: 1 } },
///////////////
    adapter:
     Adapter {
       nsp:
        Namespace {
          name: '/',
          server: [Server],
          sockets: [Object],
          connected: [Object],
          fns: [],
          ids: 0,
          rooms: [],
          flags: {},
          adapter: [Circular],
          _events: [Object],
          _eventsCount: 1 },
       rooms: { 'XPvVcff0UT-k0sxuAAAA': [Room] },
       sids: { 'XPvVcff0UT-k0sxuAAAA': [Object] },
       encoder: Encoder {} },
////////////////////
    id: 'XPvVcff0UT-k0sxuAAAA',
///////////
    client:
     Client {
       server:
        Server {
          nsps: [Object],
          parentNsps: Map {},
          _path: '/socket.io',
          _serveClient: true,
          parser: [Object],
          encoder: Encoder {},
          _adapter: [Function: Adapter],
          _origins: '*:*',
          sockets: [Namespace],
          eio: [Server],
          httpServer: [Server],
          engine: [Server] },
       conn:
        Socket {
          id: 'XPvVcff0UT-k0sxuAAAA',
          server: [Server],
          upgrading: false,
          upgraded: false,
          readyState: 'open',
          writeBuffer: [],
          packetsFn: [],
          sentCallbackFn: [],
          cleanupFn: [Array],
          request: [IncomingMessage],
          remoteAddress: '::ffff:10.150.40.196',
          checkIntervalTimer: null,
          upgradeTimeoutTimer: null,
          pingTimeoutTimer: [Timeout],
          transport: [XHR],
          _events: [Object],
          _eventsCount: 3 },
       encoder: Encoder {},
       decoder: Decoder { reconstructor: null, _callbacks: [Object] },
       id: 'XPvVcff0UT-k0sxuAAAA',
       request:
        IncomingMessage {
          _readableState: [ReadableState],
          readable: true,
          _events: {},
          _eventsCount: 0,
          _maxListeners: undefined,
          socket: [TLSSocket],
          connection: [TLSSocket],
          httpVersionMajor: 1,
          httpVersionMinor: 1,
          httpVersion: '1.1',
          complete: true,
          headers: [Object],
          rawHeaders: [Array],
          trailers: {},
          rawTrailers: [],
          aborted: false,
          upgrade: false,
          url: '/socket.io/?EIO=3&transport=polling&t=MHWkSj6',
          method: 'GET',
          statusCode: null,
          statusMessage: null,
          client: [TLSSocket],
          _consuming: false,
          _dumped: true,
          _query: [Object],
          res: [ServerResponse],
          cleanup: [Function: cleanup] },
       onclose: [Function: bound ],
       ondata: [Function: bound ],
       onerror: [Function: bound ],
       ondecoded: [Function: bound ],
       sockets: { 'XPvVcff0UT-k0sxuAAAA':[Circular] },
       nsps: { '/': [Circular] },
       connectBuffer: [] },
///////////////
    conn:
     Socket {
       id: 'XPvVcff0UT-k0sxuAAAA',
       server:
        Server {
          clients: [Object],
          clientsCount: 1,
          wsEngine: 'ws',
          pingTimeout: 5000,
          pingInterval: 25000,
          upgradeTimeout: 10000,
          maxHttpBufferSize: 100000000,
          transports: [Array],
          allowUpgrades: true,
          allowRequest: [Function: bound ],
          cookie: 'io',
          cookiePath: '/',
          cookieHttpOnly: true,
          perMessageDeflate: [Object],
          httpCompression: [Object],
          initialPacket: [Array],
          ws: [WebSocketServer],
          _events: [Object],
          _eventsCount: 1 },
       upgrading: false,
       upgraded: false,
       readyState: 'open',
       writeBuffer: [],
       packetsFn: [],
       sentCallbackFn: [],
       cleanupFn: [ [Function], [Function] ],
       request:
        IncomingMessage {
          _readableState: [ReadableState],
          readable: true,
          _events: {},
          _eventsCount: 0,
          _maxListeners: undefined,
          socket: [TLSSocket],
          connection: [TLSSocket],
          httpVersionMajor: 1,
          httpVersionMinor: 1,
          httpVersion: '1.1',
          complete: true,
          headers: [Object],
          rawHeaders: [Array],
          trailers: {},
          rawTrailers: [],
          aborted: false,
          upgrade: false,
          url: '/socket.io/?EIO=3&transport=polling&t=MHWkSj6',
          method: 'GET',
          statusCode: null,
          statusMessage: null,
          client: [TLSSocket],
          _consuming: false,
          _dumped: true,
          _query: [Object],
          res: [ServerResponse],
          cleanup: [Function: cleanup] },
       remoteAddress: '::ffff:10.150.40.196',
       checkIntervalTimer: null,
       upgradeTimeoutTimer: null,
       pingTimeoutTimer:
        Timeout {
          _called: false,
          _idleTimeout: 30000,
          _idlePrev: [TimersList],
          _idleNext: [TimersList],
          _idleStart: 6989,
          _onTimeout: [Function],
          _timerArgs: undefined,
          _repeat: null,
          _destroyed: false,
          [Symbol(unrefed)]: false,
          [Symbol(asyncId)]: 138,
          [Symbol(triggerId)]: 114 },
       transport:
        XHR {
          readyState: 'open',
          discarded: false,
          closeTimeout: 30000,
          maxHttpBufferSize: 100000000,
          httpCompression: [Object],
          supportsBinary: true,
          _events: [Object],
          _eventsCount: 5,
          sid: 'XPvVcff0UT-k0sxuAAAA',
          req: null,
          res: null,
          writable: false },
       _events:
        { close: [Array],
          data: [Function: bound ],
          error: [Function: bound ] },
       _eventsCount: 3 },
    ////////////
    rooms: {},
    acks: {},
    connected: true,
    disconnected: false,
    handshake:
     { headers:
        { host: '10.150.40.196',
          connection: 'keep-alive',
          accept: '*/*',
          'user-agent':
           'Mozilla/5.0 (Macintosh; IntelMac OS X 10_13_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36',
          referer: 'https://10.150.40.196/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9,fr;q=0.8',
          cookie:
           'io=_nyPdOwTeqHXz08UAAAC; connect.sid=s%3A3o6Uu5HVYbcLUv6qalKNp8Rd1Sqg8_8t.6q4ojR1%2FzQOWZ4t2C6DpVsvcDGlqlrepWVHzsse6%2FlU' },
       time: 'Tue Jul 03 2018 11:19:06 GMT-0400 (Eastern Daylight Time)',
       address: '::ffff:10.150.40.196',
       xdomain: false,
       secure: true,
       issued: 1530631146320,
       url: '/socket.io/?EIO=3&transport=polling&t=MHWkSj6',
       query: { EIO: '3', transport: 'polling', t: 'MHWkSj6' } },
    fns: [],
    flags: {},
    _rooms: [] }
  