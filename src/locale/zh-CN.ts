import localeMessageBox from '@/components/message-box/locale/zh-CN';
import localeLogin from '@/views/login/locale/zh-CN';

import localeWorkplace from '@/views/dashboard/workplace/locale/zh-CN';

import localeMonitor from '@/views/dashboard/monitor/locale/zh-CN';

import localeSearchTable from '@/views/list/search-table/locale/zh-CN';
import localeCardList from '@/views/list/card/locale/zh-CN';

import localeStepForm from '@/views/form/step/locale/zh-CN';
import localeGroupForm from '@/views/form/group/locale/zh-CN';

import localeBasicProfile from '@/views/profile/basic/locale/zh-CN';

import localeDataAnalysis from '@/views/visualization/data-analysis/locale/zh-CN';
import localeMultiDAnalysis from '@/views/visualization/multi-dimension-data-analysis/locale/zh-CN';

import localeSuccess from '@/views/result/success/locale/zh-CN';
import localeError from '@/views/result/error/locale/zh-CN';

import locale403 from '@/views/exception/403/locale/zh-CN';
import locale404 from '@/views/exception/404/locale/zh-CN';
import locale500 from '@/views/exception/500/locale/zh-CN';

import localeUserInfo from '@/views/user/info/locale/zh-CN';
import localeUserSetting from '@/views/user/setting/locale/zh-CN';

import localeSettings from './zh-CN/settings';

export default {
  'menu.dashboard': '写频',
  'menu.cps.channel': '信道管理',
  'menu.cps.settings': '设置管理',
  'menu.server.dashboard': '仪表盘-服务端',
  'menu.server.workplace': '工作台-服务端',
  'menu.server.monitor': '实时监控-服务端',
  'menu.list': '小工具',
  'menu.result': '结果页',
  'menu.exception': '异常页',
  'menu.form': '表单页',
  'menu.profile': '详情页',
  'menu.visualization': '固件更新',
  'menu.user': '个人中心',
  'menu.arcoWebsite': 'Arco Design',
  'menu.faq': '常见问题',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',
  'navbar.author': '作者：BD8DFN',
  'navbar.connect': '连接',
  'navbar.disconnect': '断开',
  'navbar.qa': '问题反馈',
  'global.8kb': '8KB（64Kbit）',
  'global.128kb': '128KB（1Mbit）',
  'global.256kb': '256KB（2Mbit）',
  'global.512kb': '512KB（4Mbit）',
  'menu.rb': '备份/还原',
  'menu.flash': '固件升级',
  'menu.image': '开机图片',
  'menu.font': '字库写入',
  'menu.satellite': '多普勒写入',
  'global.onStart': '（手台应在开机状态下）',
  'global.onBoot': '（手台应在刷机模式下）',
  'cps.onDeviceRead': '从设备读取',
  'cps.onDeviceWrite': '写入设备',
  'cps.downloadImportTemplate': '下载导入模板',
  'cps.import': '导入',
  'cps.export': '导出',
  'cps.save': '保存',
  'cps.load': '加载',
  'cps.line1': '启动画面首行文字',
  'cps.line2': '启动画面次行文字',
  'cps.mdclocplay': '本地播放首尾音（仅117P6）',
  'cps.sort': '排序',
  'cps.name': '信道名称',
  'cps.bandwidth': '带宽',
  'cps.tx': '发送频率',
  'cps.rx': '接收频率',
  'cps.power': '发送功率',
  'cps.rxToneType': '接收亚音类型',
  'cps.rxToneCTCSS': '接收亚音频（Hz）',
  'cps.rxToneDCS': '接收亚音数码',
  'cps.txToneType': '发送亚音类型',
  'cps.txToneCTCSS': '发送亚音频（Hz）',
  'cps.txToneDCS': '发送亚音数码',
  'cps.step': '频率步进',
  'cps.reverse': '倒频',
  'cps.scramb': '加密',
  'cps.busy': '繁忙禁发',
  'cps.pttid': '信令码',
  'cps.mode': '信道模式',
  'cps.dtmf': 'DTMF解码',
  'cps.scanlist': '扫描列表',
  'cps.operate': '操作',
  'cps.clear': '清空',
  'tool.quickbackup': '快捷备份',
  'tool.fullbackup': '完整备份',
  'tool.cleardata': '清空数据',
  'tool.backupConfig': '备份配置',
  'tool.restoreConfig': '恢复配置',
  'tool.backupCalibration': '备份校准',
  'tool.restoreCalibration': '恢复校准',
  'tool.backup': '备份',
  'tool.restore': '恢复',
  'tool.autocheck': '自动检测',
  'tool.selectSize': '选择 EEPROM 大小',
  'tool.first': '第 ',
  'tool.firstTitle': ' 次警告',
  'tool.last': '（最后警告）',
  'tool.clearMessage': '这将会清空 EEPROM 所有内容，包括配置及校准数据！！！',
  'tool.selectFirmware': '选择固件',
  'tool.flash': '更新',
  'tool.selectImage': '选择图片',
  'tool.write': '写入',
  'tool.fontwrite': 'LOSEHU 固件字库写入',
  'tool.pinyinwrite': 'LOSEHU H 版固件拼音索引表',
  'tool.writefontwrite': '自动写入字库',
  'tool.writepinyin': '写入拼音检索表',
  'tool.brtime': '浏览器时间',
  'tool.selectSatellite': '选择卫星',
  'tool.longitude': '经度',
  'tool.latitude': '纬度',
  'tool.altitude': '海拔',
  'tool.brlonlat': '浏览器获取经纬度',
  'tool.phonelonlat': '手机扫码获取经纬度',
  'tool.satpasstime': '获取卫星过境时间',
  'tool.selectPassTime': '选择过境时间',
  'tool.txFreq': '上行频率',
  'tool.txTone': '上行亚音',
  'tool.rxFreq': '下行频率',
  'tool.rxTone': '下行亚音',
  'tool.writeData': '写入数据',
  'tool.off': '关闭',
  'tool.scanqr': '手机扫码获取经纬度',
  'tool.scannotice': '上传经纬度信息将被服务器缓存十分钟',
  'tool.scaned': '已扫码上传',
  'global.nosupport': '当前浏览器不支持网页串口功能，请使用 Chrome, Edge, Opera 浏览器。',
  'global.connectFail': '连接失败',
  'menu.workshop': '创意工坊',
  'menu.firmware': '固件市场',
  'global.use': '使用',
  'tool.ssbpatch': 'LOSEHU S 版固件 SI4732 单边带补丁',
  'tool.writessbpatch': '写入单边带补丁',
  ...localeSettings,
  ...localeMessageBox,
  ...localeLogin,
  ...localeWorkplace,

  ...localeMonitor,
  ...localeSearchTable,
  ...localeCardList,
  ...localeStepForm,
  ...localeGroupForm,
  ...localeBasicProfile,
  ...localeDataAnalysis,
  ...localeMultiDAnalysis,
  ...localeSuccess,
  ...localeError,
  ...locale403,
  ...locale404,
  ...locale500,
  ...localeUserInfo,
  ...localeUserSetting,
};
