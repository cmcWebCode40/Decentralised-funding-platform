// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '22'));
  return {
    log: [ctc0]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Data({
    None: ctc3,
    Some: ctc2
    });
  const map0_ctc = ctc4;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2],
      2: [ctc0, ctc1, ctc2, ctc2, ctc2],
      6: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function _Contributors_contribute6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_contribute6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_contribute6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    Contributors_contribute0_60: ctc5,
    Contributors_getMetaDataHash0_60: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v303, v304, v306, v319, v324, v331] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1]);
  const v351 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:80:54:application call to [unknown function] (defined at: ./index.rsh:80:54:function exp)', 'at ./index.rsh:65:64:application call to "runContributors_contribute0_60" (defined at: ./index.rsh:80:22:function exp)', 'at ./index.rsh:65:64:application call to [unknown function] (defined at: ./index.rsh:65:64:function exp)'],
    msg: 'in',
    who: 'Contributors_contribute'
    });
  const v352 = v351[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v354 = stdlib.gt(v352, stdlib.checkedBigNumberify('./index.rsh:81:37:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v354, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:81:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:80:54:application call to [unknown function] (defined at: ./index.rsh:80:54:function exp)', 'at ./index.rsh:65:64:application call to "runContributors_contribute0_60" (defined at: ./index.rsh:80:22:function exp)', 'at ./index.rsh:65:64:application call to [unknown function] (defined at: ./index.rsh:65:64:function exp)'],
    msg: 'Contribution too small',
    who: 'Contributors_contribute'
    });
  const v361 = ['Contributors_contribute0_60', v351];
  
  const txn1 = await (ctc.sendrecv({
    args: [v303, v304, v306, v319, v324, v331, v361],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [v352, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v369], secs: v371, time: v370, didSend: v194, from: v368 } = txn1;
      
      switch (v369[0]) {
        case 'Contributors_contribute0_60': {
          const v372 = v369[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_contribute"
            });
          const v377 = v372[stdlib.checkedBigNumberify('./index.rsh:80:22:spread', stdlib.UInt_max, '0')];
          const v382 = stdlib.safeAdd(v331, v377);
          sim_r.txns.push({
            amt: v377,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v388 = null;
          const v389 = await txn1.getOutput('Contributors_contribute', 'v388', ctc0, v388);
          
          await stdlib.simMapSet(sim_r, 0, v368, v377);
          const v693 = v370;
          const v695 = v382;
          const v696 = stdlib.gt(v319, v324);
          if (v696) {
            sim_r.isHalt = false;
            }
          else {
            const v697 = stdlib.ge(v382, v306);
            if (v697) {
              const v698 = 'target-reached        ';
              null;
              const v699 = stdlib.safeSub(v382, v382);
              sim_r.txns.push({
                kind: 'from',
                to: v303,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v303,
                tok: undefined /* Nothing */
                });
              const v700 = 'close-contribution    ';
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v303,
                tok: undefined /* Nothing */
                });
              const v701 = 'close-contribution    ';
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'Contributors_getMetaDataHash0_60': {
          const v408 = v369[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v369], secs: v371, time: v370, didSend: v194, from: v368 } = txn1;
  switch (v369[0]) {
    case 'Contributors_contribute0_60': {
      const v372 = v369[1];
      undefined /* setApiDetails */;
      const v377 = v372[stdlib.checkedBigNumberify('./index.rsh:80:22:spread', stdlib.UInt_max, '0')];
      const v378 = stdlib.gt(v377, stdlib.checkedBigNumberify('./index.rsh:81:37:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v378, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:81:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:80:54:application call to [unknown function] (defined at: ./index.rsh:80:54:function exp)', 'at ./index.rsh:65:64:application call to [unknown function] (defined at: ./index.rsh:80:54:function exp)', 'at ./index.rsh:65:64:application call to [unknown function] (defined at: ./index.rsh:65:64:function exp)'],
        msg: 'Contribution too small',
        who: 'Contributors_contribute'
        });
      const v382 = stdlib.safeAdd(v331, v377);
      ;
      const v388 = null;
      const v389 = await txn1.getOutput('Contributors_contribute', 'v388', ctc0, v388);
      if (v194) {
        stdlib.protect(ctc0, await interact.out(v372, v389), {
          at: './index.rsh:80:23:application',
          fs: ['at ./index.rsh:80:23:application call to [unknown function] (defined at: ./index.rsh:80:23:function exp)', 'at ./index.rsh:86:47:application call to "notify" (defined at: ./index.rsh:85:42:function exp)', 'at ./index.rsh:85:42:application call to [unknown function] (defined at: ./index.rsh:85:42:function exp)'],
          msg: 'out',
          who: 'Contributors_contribute'
          });
        }
      else {
        }
      
      await stdlib.mapSet(map0, v368, v377);
      const v693 = v370;
      const v695 = v382;
      const v696 = stdlib.gt(v319, v324);
      if (v696) {
        return;
        }
      else {
        const v697 = stdlib.ge(v382, v306);
        if (v697) {
          const v698 = 'target-reached        ';
          null;
          const v699 = stdlib.safeSub(v382, v382);
          ;
          ;
          const v700 = 'close-contribution    ';
          null;
          return;
          }
        else {
          ;
          const v701 = 'close-contribution    ';
          null;
          return;
          }}
      break;
      }
    case 'Contributors_getMetaDataHash0_60': {
      const v408 = v369[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Contributors_getMetaDataHash6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_getMetaDataHash6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_getMetaDataHash6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Data({
    Contributors_contribute0_60: ctc6,
    Contributors_getMetaDataHash0_60: ctc5
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v303, v304, v306, v319, v324, v331] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1]);
  const v343 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:72:56:application call to [unknown function] (defined at: ./index.rsh:72:56:function exp)', 'at ./index.rsh:65:64:application call to "runContributors_getMetaDataHash0_60" (defined at: ./index.rsh:72:22:function exp)', 'at ./index.rsh:65:64:application call to [unknown function] (defined at: ./index.rsh:65:64:function exp)'],
    msg: 'in',
    who: 'Contributors_getMetaDataHash'
    });
  const v347 = ['Contributors_getMetaDataHash0_60', v343];
  
  const txn1 = await (ctc.sendrecv({
    args: [v303, v304, v306, v319, v324, v331, v347],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:72:22:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v369], secs: v371, time: v370, didSend: v194, from: v368 } = txn1;
      
      switch (v369[0]) {
        case 'Contributors_contribute0_60': {
          const v372 = v369[1];
          
          break;
          }
        case 'Contributors_getMetaDataHash0_60': {
          const v408 = v369[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_getMetaDataHash"
            });
          ;
          const v437 = await txn1.getOutput('Contributors_getMetaDataHash', 'v304', ctc4, v304);
          
          const v720 = v370;
          const v722 = v331;
          const v723 = stdlib.gt(v319, v324);
          if (v723) {
            sim_r.isHalt = false;
            }
          else {
            const v724 = stdlib.ge(v331, v306);
            if (v724) {
              const v725 = 'target-reached        ';
              null;
              const v726 = stdlib.safeSub(v331, v331);
              sim_r.txns.push({
                kind: 'from',
                to: v303,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v303,
                tok: undefined /* Nothing */
                });
              const v727 = 'close-contribution    ';
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v303,
                tok: undefined /* Nothing */
                });
              const v728 = 'close-contribution    ';
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v369], secs: v371, time: v370, didSend: v194, from: v368 } = txn1;
  switch (v369[0]) {
    case 'Contributors_contribute0_60': {
      const v372 = v369[1];
      return;
      break;
      }
    case 'Contributors_getMetaDataHash0_60': {
      const v408 = v369[1];
      undefined /* setApiDetails */;
      ;
      const v437 = await txn1.getOutput('Contributors_getMetaDataHash', 'v304', ctc4, v304);
      if (v194) {
        stdlib.protect(ctc0, await interact.out(v408, v437), {
          at: './index.rsh:72:23:application',
          fs: ['at ./index.rsh:72:23:application call to [unknown function] (defined at: ./index.rsh:72:23:function exp)', 'at ./index.rsh:75:47:application call to "notify" (defined at: ./index.rsh:74:42:function exp)', 'at ./index.rsh:74:42:application call to [unknown function] (defined at: ./index.rsh:74:42:function exp)'],
          msg: 'out',
          who: 'Contributors_getMetaDataHash'
          });
        }
      else {
        }
      
      const v720 = v370;
      const v722 = v331;
      const v723 = stdlib.gt(v319, v324);
      if (v723) {
        return;
        }
      else {
        const v724 = stdlib.ge(v331, v306);
        if (v724) {
          const v725 = 'target-reached        ';
          null;
          const v726 = stdlib.safeSub(v331, v331);
          ;
          ;
          const v727 = 'close-contribution    ';
          null;
          return;
          }
        else {
          ;
          const v728 = 'close-contribution    ';
          null;
          return;
          }}
      break;
      }
    }
  
  
  };
export async function FundRaiser(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for FundRaiser expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for FundRaiser expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc4 = stdlib.T_Tuple([ctc1]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    Contributors_contribute0_60: ctc4,
    Contributors_getMetaDataHash0_60: ctc5
    });
  const ctc7 = stdlib.T_Address;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v298 = stdlib.protect(ctc1, interact.duration, 'for FundRaiser\'s interact field duration');
  const v299 = stdlib.protect(ctc3, interact.metaDataHash, 'for FundRaiser\'s interact field metaDataHash');
  const v300 = stdlib.protect(ctc1, interact.targetAmount, 'for FundRaiser\'s interact field targetAmount');
  
  const txn1 = await (ctc.sendrecv({
    args: [v299, v298, v300],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:47:20:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v304, v305, v306], secs: v308, time: v307, didSend: v31, from: v303 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v304, v305, v306], secs: v308, time: v307, didSend: v31, from: v303 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v303, v304, v305, v306],
    evt_cnt: 0,
    funcNum: 1,
    lct: v307,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v311, time: v310, didSend: v36, from: v309 } = txn2;
      
      ;
      const v313 = 'intialise-contribution';
      null;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc3, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v311, time: v310, didSend: v36, from: v309 } = txn2;
  ;
  const v312 = stdlib.addressEq(v303, v309);
  stdlib.assert(v312, {
    at: './index.rsh:51:20:dot',
    fs: [],
    msg: 'sender correct',
    who: 'FundRaiser'
    });
  const v313 = 'intialise-contribution';
  null;
  const txn3 = await (ctc.sendrecv({
    args: [v303, v304, v305, v306, v310],
    evt_cnt: 0,
    funcNum: 2,
    lct: v310,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:59:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v316, time: v315, didSend: v42, from: v314 } = txn3;
      
      ;
      const v319 = stdlib.safeAdd(v310, v305);
      const v324 = v315;
      const v325 = v310;
      const v331 = stdlib.checkedBigNumberify('./index.rsh:39:15:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v335 = stdlib.gt(v319, v325);
        
        return v335;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v452 = stdlib.ge(v331, v306);
        if (v452) {
          const v453 = 'target-reached        ';
          null;
          
          const v459 = stdlib.safeSub(v331, v331);
          sim_r.txns.push({
            kind: 'from',
            to: v303,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v303,
            tok: undefined /* Nothing */
            });
          const v465 = 'close-contribution    ';
          null;
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v303,
            tok: undefined /* Nothing */
            });
          const v473 = 'close-contribution    ';
          null;
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc3, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v316, time: v315, didSend: v42, from: v314 } = txn3;
  ;
  const v317 = stdlib.addressEq(v303, v314);
  stdlib.assert(v317, {
    at: './index.rsh:59:20:dot',
    fs: [],
    msg: 'sender correct',
    who: 'FundRaiser'
    });
  const v319 = stdlib.safeAdd(v310, v305);
  let v324 = v315;
  let v325 = v310;
  let v331 = stdlib.checkedBigNumberify('./index.rsh:39:15:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v335 = stdlib.gt(v319, v325);
    
    return v335;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc6],
      timeoutAt: ['time', v319],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v303, v304, v306, v319, v324, v331],
        evt_cnt: 0,
        funcNum: 5,
        lct: v324,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:94:36:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v446, time: v445, didSend: v258, from: v444 } = txn5;
          
          ;
          const v448 = 'timeout               ';
          null;
          const cv324 = v445;
          const cv325 = v324;
          const cv331 = v331;
          
          await (async () => {
            const v324 = cv324;
            const v325 = cv325;
            const v331 = cv331;
            
            if (await (async () => {
              const v335 = stdlib.gt(v319, v325);
              
              return v335;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v452 = stdlib.ge(v331, v306);
              if (v452) {
                const v453 = 'target-reached        ';
                null;
                
                const v459 = stdlib.safeSub(v331, v331);
                sim_r.txns.push({
                  kind: 'from',
                  to: v303,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v303,
                  tok: undefined /* Nothing */
                  });
                const v465 = 'close-contribution    ';
                null;
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.txns.push({
                  kind: 'from',
                  to: v303,
                  tok: undefined /* Nothing */
                  });
                const v473 = 'close-contribution    ';
                null;
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc7, ctc3, ctc1, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v446, time: v445, didSend: v258, from: v444 } = txn5;
      ;
      const v447 = stdlib.addressEq(v303, v444);
      stdlib.assert(v447, {
        at: './index.rsh:94:36:dot',
        fs: ['at ./index.rsh:93:46:application call to [unknown function] (defined at: ./index.rsh:93:46:function exp)'],
        msg: 'sender correct',
        who: 'FundRaiser'
        });
      const v448 = 'timeout               ';
      null;
      const cv324 = v445;
      const cv325 = v324;
      const cv331 = v331;
      
      v324 = cv324;
      v325 = cv325;
      v331 = cv331;
      
      continue;
      }
    else {
      const {data: [v369], secs: v371, time: v370, didSend: v194, from: v368 } = txn4;
      switch (v369[0]) {
        case 'Contributors_contribute0_60': {
          const v372 = v369[1];
          undefined /* setApiDetails */;
          const v377 = v372[stdlib.checkedBigNumberify('./index.rsh:80:22:spread', stdlib.UInt_max, '0')];
          const v378 = stdlib.gt(v377, stdlib.checkedBigNumberify('./index.rsh:81:37:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v378, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:81:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:80:54:application call to [unknown function] (defined at: ./index.rsh:80:54:function exp)', 'at ./index.rsh:65:64:application call to [unknown function] (defined at: ./index.rsh:80:54:function exp)', 'at ./index.rsh:65:64:application call to [unknown function] (defined at: ./index.rsh:65:64:function exp)'],
            msg: 'Contribution too small',
            who: 'FundRaiser'
            });
          const v382 = stdlib.safeAdd(v331, v377);
          ;
          const v388 = null;
          await txn4.getOutput('Contributors_contribute', 'v388', ctc0, v388);
          await stdlib.mapSet(map0, v368, v377);
          const v396 = [v368, v377];
          stdlib.protect(ctc0, await interact.getContributionNotification(v396), {
            at: './index.rsh:88:88:application',
            fs: ['at ./index.rsh:88:88:application call to [unknown function] (defined at: ./index.rsh:88:88:function exp)', 'at ./index.rsh:88:88:application call to "liftedInteract" (defined at: ./index.rsh:88:88:application)', 'at ./index.rsh:85:42:application call to [unknown function] (defined at: ./index.rsh:85:42:function exp)'],
            msg: 'getContributionNotification',
            who: 'FundRaiser'
            });
          
          const cv324 = v370;
          const cv325 = v324;
          const cv331 = v382;
          
          v324 = cv324;
          v325 = cv325;
          v331 = cv331;
          
          continue;
          break;
          }
        case 'Contributors_getMetaDataHash0_60': {
          const v408 = v369[1];
          undefined /* setApiDetails */;
          ;
          await txn4.getOutput('Contributors_getMetaDataHash', 'v304', ctc3, v304);
          const cv324 = v370;
          const cv325 = v324;
          const cv331 = v331;
          
          v324 = cv324;
          v325 = cv325;
          v331 = cv331;
          
          continue;
          break;
          }
        }}
    
    }
  const v452 = stdlib.ge(v331, v306);
  if (v452) {
    const v453 = 'target-reached        ';
    null;
    stdlib.protect(ctc0, await interact.ownerCashOut(), {
      at: './index.rsh:100:49:application',
      fs: ['at ./index.rsh:100:49:application call to [unknown function] (defined at: ./index.rsh:100:49:function exp)', 'at ./index.rsh:100:49:application call to "liftedInteract" (defined at: ./index.rsh:100:49:application)'],
      msg: 'ownerCashOut',
      who: 'FundRaiser'
      });
    
    const v459 = stdlib.safeSub(v331, v331);
    ;
    ;
    const v465 = 'close-contribution    ';
    null;
    return;
    }
  else {
    ;
    const v473 = 'close-contribution    ';
    null;
    return;
    }
  
  
  
  
  
  };
export async function Contributors_contribute(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_contribute expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_contribute expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Contributors_contribute6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Contributors_getMetaDataHash(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_getMetaDataHash expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_getMetaDataHash expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Contributors_getMetaDataHash6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Contributors_contribute(uint64)byte[0]`, `Contributors_getMetaDataHash()byte[256]`],
    pure: [],
    sigs: [`Contributors_contribute(uint64)byte[0]`, `Contributors_getMetaDataHash()byte[256]`]
    },
  appApproval: `BiAOAAGAAgKoAiCgAgUGsAIItNeT8AkEuAImBQEAAQEBAgAanjvBCGNsb3NlLWNvbnRyaWJ1dGlvbgAAAAAiNQAxGEEEAStkSSJbNQEhCls1AjEZIxJBAAoxACiBCa9mQgPNNhoAF0lBADMiNQQjNQZJIQsMQAASIQsSRCs1/yk0/1AhCq9QQgCvgdSjpeECEkQ2GgE1/yg0/1BCAJs2GgIXNQQ2GgM2GgEXSSUMQAGYSSEMDEABPkkhBwxAAHkhBxJEIQg0ARJENARJIhJMNAISEUQoZClkUCpkUEk1A0lXACA1/yEEWzX+gATMmZJcsDIGNP4PRDT/MQASRIAanjvBCHRpbWVvdXQAAAAAAAAAAAAAAAAAAACwNP80AyEFJFg0AyEGWzT+MgY0AyEJWzQDIQ1bQgIQSCEINAESRDQESSISTDQCEhFEKGQpZFAqZFBJNQNJSkpXACA1/yEFJFg1/iEGWzX9IQRbNfwhCVs1+yENWzX6STUFNfmABNWOHas0+VCwMgY0/AxENPkiVUAAQDT5VwEINfg0+BdJNfciDUQ094gCvYAIAAAAAAAAAYSwKzUHMQAoKTT3FlBmNP80/jT9NPwyBjT7NPo09whCAXWACAAAAAAAAAEwNP5QsDT+NQc0/zT+NP00/DIGNPs0+kIBUiUSRCU0ARJENARJIhJMNAISEUQoZClkUCpkUEk1A0lXACA1/yEJWzX+gARBsUBNsDT/MQASRDT/NAMhBSRYNAMhBFs0/jQDIQZbCDIGNP4iQgD/SSMMQACOSCM0ARJENARJIhJMNAISEUQoZClkUCpkUEk1A0lKVwAgNf8hBSRYNf4hBls1/SEEWzX8gASai5F0sDT/MQASRIAanjvBCGludGlhbGlzZS1jb250cmlidXRpb26wNP80/lA0/RZQNPwWUDIGFlAoSwFXAH9nKUsBV39/ZypLAVf+OmdIJTUBMgY1AkIBNkiBoI0GiAGAIjQBEkQ0BEkiEkw0AhIRREk1BUlJIiRYNf8kWzX+gYgCWzX9gASx+44JNP9QNP4WUDT9FlCwMQA0/1A0/hZQNP0WUChLAVcAf2cpSwFXf39nKksBV/4yZ0gjNQEyBjUCQgDLNf81/jX9Nfw1+zX6Nfk0/DT+DUEANjT5NPpQNPsWUDT8FlA0/RZQNP8WUChLAVcAf2cpSwFXf39nKksBV/5CZ0ghCDUBMgY1AkIAfzT/NPsPQQBFgBqeO8EIdGFyZ2V0LXJlYWNoZWQAAAAAAAAAALCxIrIBNP+yCCOyEDT5sgezsSKyATT/SQmyCCOyEDT5sgezJwSwQgAWsSKyATT/sggjshA0+bIHsycEsEIAADEZIQcSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCs0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhDDE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 3,
  stateSize: 320,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem4",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem5",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem6",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem7",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v304",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v305",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v306",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem4",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem5",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem6",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem7",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v304",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v305",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v306",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T13",
                    "name": "_Contributors_contribute0_60",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Contributors_getMetaDataHash0_60",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T15",
                "name": "v369",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem4",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem5",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem6",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem7",
            "type": "bytes32"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v304",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v388",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes22",
            "name": "elem0",
            "type": "bytes22"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "log",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Contributors_contribute",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Contributors_getMetaDataHash",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem4",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem5",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem6",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem7",
            "type": "bytes32"
          }
        ],
        "internalType": "struct T1",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T13",
                    "name": "_Contributors_contribute0_60",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Contributors_getMetaDataHash0_60",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T15",
                "name": "v369",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001f6838038062001f688339810160408190526200002691620002a7565b60008055436003556040517f2bceddec6455f2efbbd7ecdae1730fd2cd85e94b0284cbc4b89db728f1924ca59062000062903390849062000380565b60405180910390a162000078341560076200013d565b604080516080808201835260008083528351610100810185528181526020808201839052818601839052606080830184905293820183905260a0820183905260c0820183905260e0820183905280850191825284860183815293850183815233865287820180515190935282518201519094529051850151909252600190819055439055915190916200010e9183910162000416565b604051602081830303815290604052600290805190602001906200013492919062000167565b505050620004de565b81620001635760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017590620004a1565b90600052602060002090601f016020900481019282620001995760008555620001e4565b82601f10620001b457805160ff1916838001178555620001e4565b82800160010185558215620001e4579182015b82811115620001e4578251825591602001919060010190620001c7565b50620001f2929150620001f6565b5090565b5b80821115620001f25760008155600101620001f7565b604080519081016001600160401b03811182821017156200023e57634e487b7160e01b600052604160045260246000fd5b60405290565b604051606081016001600160401b03811182821017156200023e57634e487b7160e01b600052604160045260246000fd5b60405161010081016001600160401b03811182821017156200023e57634e487b7160e01b600052604160045260246000fd5b6000818303610160811215620002bc57600080fd5b620002c66200020d565b83518152601f198201915061014080831215620002e257600080fd5b620002ec62000244565b61010080851215620002fd57600080fd5b6200030762000275565b94506020870151855260408701516020860152606087015160408601526080870151606086015260a0870151608086015260c087015160a086015260e087015160c08601528087015160e08601525083815261012086015160208201528186015160408201528060208401525050809250505092915050565b60006101808201905060018060a01b0384168252825160208301526020830151620003f8604084018251805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b60208101516101408401526040810151610160840152509392505050565b81516001600160a01b031681526020808301516101608301916200048590840182805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b5060408301516101208301526060909201516101409091015290565b600181811c90821680620004b657607f821691505b60208210811415620004d857634e487b7160e01b600052602260045260246000fd5b50919050565b611a7a80620004ee6000396000f3fe60806040526004361061008f5760003560e01c80637eea518c116100565780637eea518c1461012457806383230757146101375780638e3147691461014c578063972b44481461015f578063ab53f2c61461018257005b80631e93b0f1146100985780632c10a159146100bc57806332d24d45146100cf5780633bc5b7bf146100e45780635a03980d1461011157005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca3660046112eb565b6101a5565b6100d76101c9565b6040516100b39190611351565b3480156100f057600080fd5b506101046100ff366004611375565b6101ff565b6040516100b391906113cd565b61009661011f3660046113fd565b61022b565b6100966101323660046112eb565b61024b565b34801561014357600080fd5b506001546100a9565b61009661015a3660046112eb565b61026b565b61017261016d36600461140f565b61028b565b60405190151581526020016100b3565b34801561018e57600080fd5b506101976102c2565b6040516100b3929190611428565b6101ad611057565b6101c56101bf3684900384018461152e565b8261035f565b5050565b6101d1611078565b6101d96110bc565b602081015151600190526101eb611057565b6101f58282610567565b6020015192915050565b604080516060810182526000808252602082018190529181019190915261022582610891565b92915050565b610233611057565b6101c561024536849003840184611590565b82610567565b610253611057565b6101c56102653684900384018461152e565b82610964565b610273611057565b6101c56102853684900384018461152e565b82610b09565b60006102956110bc565b602081810180515160009052515101518390526102b0611057565b6102ba8282610567565b519392505050565b6000606060005460028080546102d79061162e565b80601f01602080910402602001604051908101604052809291908181526020018280546103039061162e565b80156103505780601f1061032557610100808354040283529160200191610350565b820191906000526020600020905b81548152906001019060200180831161033357829003601f168201915b50505050509050915091509091565b61036f600160005414600a610d02565b815161038a90158061038357508251600154145b600b610d02565b60008080556002805461039c9061162e565b80601f01602080910402602001604051908101604052809291908181526020018280546103c89061162e565b80156104155780601f106103ea57610100808354040283529160200191610415565b820191906000526020600020905b8154815290600101906020018083116103f857829003601f168201915b505050505080602001905181019061042d9190611701565b905061044a60408051808201909152600060208201908152815290565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338560405161047b929190611784565b60405180910390a161048f34156008610d02565b81516104a7906001600160a01b031633146009610d02565b80517534b73a34b0b634b9b296b1b7b73a3934b13aba34b7b760511b90528051604051600080516020611a25833981519152916104e3916117ac565b60405180910390a16104f36110d6565b82516001600160a01b03168152602080840151818301526040808501518184015260608086015190840152436080840181905260026000556001555161053b918391016117c3565b6040516020818303038152906040526002908051906020019061055f929190611114565b505050505050565b6105776006600054146013610d02565b815161059290158061058b57508251600154145b6014610d02565b6000808055600280546105a49061162e565b80601f01602080910402602001604051908101604052809291908181526020018280546105d09061162e565b801561061d5780601f106105f25761010080835404028352916020019161061d565b820191906000526020600020905b81548152906001019060200180831161060057829003601f168201915b5050505050806020019051810190610635919061180f565b905061065260408051808201909152600060208201908152815290565b610663826060015143106015610d02565b7fed31fa17b14f596eca798bcade985f5143b2cc0567155abfc0fa13cbda5b5a9533856040516106949291906118a8565b60405180910390a160006020850151515160018111156106b6576106b6611399565b14156107b757602080850151510151808252516106d69015156010610d02565b8051516106e69034146011610d02565b604051600081527fbfc6a8b0215d1c05fa0d00be6fca95d8338d9157bb456d3a76f9b21c2a5a10e19060200160405180910390a16000808452338152600460205260409020805460ff191660019081178255825151910155610746611198565b825181516001600160a01b03909116905260208084015182518201526040808501518351909101526060808501518351909101528082018051439052608085015190519091015260a083015182515161079f9190610d28565b6020820151604001526107b181610d75565b5061088b565b60016020850151515160018111156107d1576107d1611399565b141561088b576107e334156012610d02565b7fd5b2bd79d41ab6b54e8a5ca3a2254b29e1ec2365e7bdec66beae734127ddb37382602001516040516108169190611351565b60405180910390a160208083015190840152610830611198565b825181516001600160a01b039091169052602080840151825182015260408085015183518201526060808601518451909101528183018051439052608086015181519093019290925260a0850151915101526107b181610d75565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156108dd576108dd611399565b1415610954576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561091e5761091e611399565b600181111561092f5761092f611399565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600080825260208201525b919050565b610974600260005414600e610d02565b815161098f90158061098857508251600154145b600f610d02565b6000808055600280546109a19061162e565b80601f01602080910402602001604051908101604052809291908181526020018280546109cd9061162e565b8015610a1a5780601f106109ef57610100808354040283529160200191610a1a565b820191906000526020600020905b8154815290600101906020018083116109fd57829003601f168201915b5050505050806020019051810190610a3291906118fa565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503384604051610a65929190611784565b60405180910390a1610a793415600c610d02565b8051610a91906001600160a01b03163314600d610d02565b610a99611198565b815181516001600160a01b03909116905260208083015182519091015260608201518151604090810191909152608083015190830151610ad99190610d28565b81516060015260208082018051439052608084015181519092019190915251600060409091015261088b81610d75565b610b196006600054146018610d02565b8151610b34901580610b2d57508251600154145b6019610d02565b600080805560028054610b469061162e565b80601f0160208091040260200160405190810160405280929190818152602001828054610b729061162e565b8015610bbf5780601f10610b9457610100808354040283529160200191610bbf565b820191906000526020600020905b815481529060010190602001808311610ba257829003601f168201915b5050505050806020019051810190610bd7919061180f565b9050610bf460408051808201909152600060208201908152815290565b610c068260600151431015601a610d02565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3385604051610c37929190611784565b60405180910390a1610c4b34156016610d02565b8151610c63906001600160a01b031633146017610d02565b8051661d1a5b595bdd5d60ca1b90528051604051600080516020611a2583398151915291610c90916117ac565b60405180910390a1610ca0611198565b825181516001600160a01b039091169052602080840151825182015260408085015183518201526060808601518451909101528183018051439052608086015181519093019290925260a085015191510152610cfb81610d75565b5050505050565b816101c55760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600082610d35838261199e565b91508110156102255760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610d1f565b60408051608081018252600060608201818152825282516020808201855282825280840191909152835190810184529081529181019190915260208083015101518251606001511115610e4a57610dca6111d4565b8251516001600160a01b0316815282516020908101518183015283516040908101518184015284516060908101519084015281850180515160808501525181015160a084015260066000554360015551610e26918391016119b6565b6040516020818303038152906040526002908051906020019061088b929190611114565b81600001516040015182602001516040015110610f895780516d1d185c99d95d0b5c995858da195960921b90528051604051600080516020611a2583398151915291610e95916117ac565b60405180910390a1815151602083015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610ee0573d6000803e3d6000fd5b508151516020830151604001516001600160a01b03909116906108fc90610f079080611008565b6040518115909202916000818181858888f19350505050158015610f2f573d6000803e3d6000fd5b506020810180517131b637b9b296b1b7b73a3934b13aba34b7b760711b905251604051600080516020611a2583398151915291610f6b916117ac565b60405180910390a1600080805560018190556101c590600290611219565b815151602083015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610fcc573d6000803e3d6000fd5b50604080820180517131b637b9b296b1b7b73a3934b13aba34b7b760711b9052519051600080516020611a2583398151915291610f6b916117ac565b6000826110158382611a0d565b91508111156102255760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401610d1f565b6040518060400160405280600015158152602001611073611078565b905290565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915290565b604051806040016040528060008152602001611073611256565b6040518060a0016040528060006001600160a01b031681526020016110f9611078565b81526020016000815260200160008152602001600081525090565b8280546111209061162e565b90600052602060002090601f0160209004810192826111425760008555611188565b82601f1061115b57805160ff1916838001178555611188565b82800160010185558215611188579182015b8281111561118857825182559160200191906001019061116d565b50611194929150611269565b5090565b60405180604001604052806111ab61127e565b815260200161107360405180606001604052806000815260200160008152602001600081525090565b6040518060c0016040528060006001600160a01b031681526020016111f7611078565b8152602001600081526020016000815260200160008152602001600081525090565b5080546112259061162e565b6000825580601f10611235575050565b601f0160209004906000526020600020908101906112539190611269565b50565b60405180602001604052806110736112b5565b5b80821115611194576000815560010161126a565b604051806080016040528060006001600160a01b031681526020016112a1611078565b815260200160008152602001600081525090565b604080516060810190915280600081526020016112de6040518060200160405280600081525090565b8152600060209091015290565b6000604082840312156112fd57600080fd5b50919050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b61010081016102258284611303565b6001600160a01b038116811461125357600080fd5b60006020828403121561138757600080fd5b813561139281611360565b9392505050565b634e487b7160e01b600052602160045260246000fd5b6002811061125357634e487b7160e01b600052602160045260246000fd5b815160608201906113dd816113af565b808352506020830151151560208301526040830151604083015292915050565b6000608082840312156112fd57600080fd5b60006020828403121561142157600080fd5b5035919050565b82815260006020604081840152835180604085015260005b8181101561145c57858101830151858201606001528201611440565b8181111561146e576000606083870101525b50601f01601f191692909201606001949350505050565b6040805190810167ffffffffffffffff811182821017156114b657634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff811182821017156114b657634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156114b657634e487b7160e01b600052604160045260246000fd5b8035801515811461095f57600080fd5b60006040828403121561154057600080fd5b6040516040810181811067ffffffffffffffff8211171561157157634e487b7160e01b600052604160045260246000fd5b604052823581526115846020840161151e565b60208201529392505050565b600081830360808112156115a357600080fd5b6115ab611485565b833581526060601f19830112156115c157600080fd5b6115c96114bc565b6115d16114ed565b6020860135600281106115e357600080fd5b81526020603f19850112156115f757600080fd5b6115ff6114bc565b93506040860135845283602082015261161a6060870161151e565b604082015281526020820152949350505050565b600181811c9082168061164257607f821691505b602082108114156112fd57634e487b7160e01b600052602260045260246000fd5b600061010080838503121561167757600080fd5b6040519081019067ffffffffffffffff821181831017156116a857634e487b7160e01b600052604160045260246000fd5b81604052809250835181526020840151602082015260408401516040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152505092915050565b6000610160828403121561171457600080fd5b6040516080810181811067ffffffffffffffff8211171561174557634e487b7160e01b600052604160045260246000fd5b604052825161175381611360565b81526117628460208501611663565b6020820152610120830151604082015261014090920151606083015250919050565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b905169ffffffffffffffffffff1916815260200190565b81516001600160a01b031681526020808301516101808301916117e890840182611303565b50604083015161012083015260608301516101408301526080909201516101609091015290565b60006101a0828403121561182257600080fd5b60405160c0810181811067ffffffffffffffff8211171561185357634e487b7160e01b600052604160045260246000fd5b604052825161186181611360565b81526118708460208501611663565b60208201526101208301516040820152610140830151606082015261016083015160808201526101809092015160a083015250919050565b6001600160a01b0383168152815160208083019190915282015151805160a0830191906118d4816113af565b806040850152506020810151516060840152604081015115156080840152509392505050565b6000610180828403121561190d57600080fd5b60405160a0810181811067ffffffffffffffff8211171561193e57634e487b7160e01b600052604160045260246000fd5b604052825161194c81611360565b815261195b8460208501611663565b60208201526101208301516040820152610140830151606082015261016090920151608083015250919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156119b1576119b1611988565b500190565b81516001600160a01b031681526020808301516101a08301916119db90840182611303565b5060408301516101208301526060830151610140830152608083015161016083015260a0909201516101809091015290565b600082821015611a1f57611a1f611988565b50039056feec1a05e10dfefacf0bfc9a7f0620cf3b3cf78b0d5f98b8d8916787c4d5ead546a2646970667358221220a29f4a6bc89f99b3b2a0274df1b1a2d8091934e05bacc4bf9df41894b058c96664736f6c634300080c0033`,
  BytecodeLen: 8040,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:49:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:57:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:129:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:129:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:65:64:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Contributors_contribute": Contributors_contribute,
  "Contributors_getMetaDataHash": Contributors_getMetaDataHash,
  "FundRaiser": FundRaiser
  };
export const _APIs = {
  Contributors: {
    contribute: Contributors_contribute,
    getMetaDataHash: Contributors_getMetaDataHash
    }
  };
