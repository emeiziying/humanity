'use client';

import SectionCard, { SectionKey } from './SectionCard';

const GameContainer = () => {
  const tabs = [
    {
      lebel: '人口',
      value: 'human',
      children: [
        { label: '工人', value: 'workers' },
        { label: '农民', value: 'farmers' },
        { label: '商人', value: 'merchants' },
        { label: '士兵', value: 'soldiers' },
        { label: '学者', value: 'scholars' },
        { label: '医生', value: 'doctors' },
        { label: '工程师', value: 'engineers' },
        { label: '科学家', value: 'scientists' },
      ],
    },
    {
      lebel: '食物',
      value: 'foods',
      children: [
        { lebel: '浆果', value: 'berries' },
        { lebel: '土豆', value: 'potatoes' },
        { lebel: '玉米', value: 'corns' },
        { lebel: '小麦', value: 'wheat' },
        { lebel: '大米', value: 'rice' },
        { lebel: '面粉', value: 'flour' },
        { lebel: '鱼肉', value: 'fish' },
        { lebel: '蛋', value: 'eggs' },
        { lebel: '奶', value: 'milk' },
        { lebel: '牛肉', value: 'beef' },
        { lebel: '羊肉', value: 'mutton' },
        { lebel: '猪肉', value: 'pork' },
        { lebel: '鸡肉', value: 'chicken' },
        { lebel: '米饭', value: 'rice' },
        { lebel: '面条', value: 'noodles' },
        { lebel: '蔬菜', value: 'vegetables' },
        { lebel: '水果', value: 'fruits' },
        { lebel: '面包', value: 'bread' },
        { lebel: '糖', value: 'sugar' },
        { lebel: '盐', value: 'salt' },
        { lebel: '油', value: 'oil' },
        { lebel: '酒', value: 'wine' },
        { lebel: '啤酒', value: 'beer' },
        { lebel: '咖啡', value: 'coffee' },
        { lebel: '茶', value: 'tea' },
        { lebel: '巧克力', value: 'chocolates' },
        { lebel: '糖果', value: 'candies' },
        { lebel: '冰淇淋', value: 'ice_cream' },
        { lebel: '果酱', value: 'jams' },
        { lebel: '酱油', value: 'soy_sauce' },
        { lebel: '醋', value: 'vinegar' },
        { lebel: '调味料', value: 'seasonings' },
        { lebel: '香料', value: 'spices' },
        { lebel: '草药', value: 'herbs' },
        { lebel: '蘑菇', value: 'mushrooms' },
        { lebel: '海藻', value: 'seaweeds' },
        { lebel: '海鲜', value: 'seafood' },
        { lebel: '肉制品', value: 'meat_products' },
        { lebel: '蛋制品', value: 'egg_products' },
        { lebel: '奶制品', value: 'dairy_products' },
        { lebel: '面包制品', value: 'bread_products' },
        { lebel: '糖果制品', value: 'candy_products' },
        { lebel: '饮料', value: 'beverages' },
        { lebel: '酒类', value: 'alcohols' },
        { lebel: '饮品', value: 'drinks' },
      ],
    },
    {
      lebel: '资源',
      value: 'resources',
      children: [
        { lebel: '木材', value: 'woods' },
        { label: '石头', value: 'stones' },
        { label: '铁矿', value: 'irons' },
        { label: '铜矿', value: 'coppers' },
        { label: '金矿', value: 'golds' },
        { label: '煤矿', value: 'coals' },
        { label: '石油', value: 'oils' },
        { label: '天然气', value: 'gases' },
        { label: '稀土', value: 'rare_earth' },
        { label: '水', value: 'waters' },
        { label: '粘土', value: 'clays' },
        { label: '沙子', value: 'sands' },
        { label: '盐', value: 'salts' },
        { label: '硫磺', value: 'sulfurs' },
        { label: '磷矿', value: 'phosphates' },
        { label: '硅矿', value: 'silicons' },
        { label: '铝矿', value: 'aluminums' },
        { label: '锌矿', value: 'zincs' },
        { label: '铅矿', value: 'leads' },
        { label: '锡矿', value: 'tins' },
        { label: '镍矿', value: 'nickels' },
        { label: '钨矿', value: 'tungs' },
        { label: '钛矿', value: 'titaniums' },
        { label: '铀矿', value: 'uraniums' },
        { label: '钻石', value: 'diamonds' },
        { label: '石膏', value: 'gypsums' },
        { label: '石棉', value: 'asbestoses' },
        { label: '石墨', value: 'graphites' },
        { label: '石英', value: 'quartzes' },
        { label: '石灰石', value: 'limestones' },
        { label: '大理石', value: 'marbles' },
        { label: '花岗岩', value: 'granites' },
        { label: '石英石', value: 'quartzites' },
        { label: '板岩', value: 'slates' },
        { label: '砂岩', value: 'sandstones' },
        { label: '石灰岩', value: 'calcareous' },
        { label: '蛋白石', value: 'zeolites' },
        { label: '蛭石', value: 'vermiculites' },
        { label: '膨润土', value: 'bentonites' },
      ],
    },
    {
      label: '产物',
      children: [
        { lebel: '木板', value: 'wooden_boards' },
        { lebel: '纸张', value: 'paper' },
        { lebel: '布料', value: 'fabric' },
        { lebel: '玻璃', value: 'glass' },
        { lebel: '金属板', value: 'metal_sheets' },
        { lebel: '塑料', value: 'plastic' },
        { lebel: '电子元件', value: 'electronic_components' },
        { lebel: '化学品', value: 'chemicals' },
        { lebel: '药品', value: 'medicines' },
        { lebel: '燃料', value: 'fuels' },
        { lebel: '能源', value: 'energy' },
        { lebel: '水泥', value: 'cement' },
        { lebel: '钢材', value: 'steel' },
        { lebel: '建材', value: 'building_materials' },
        { lebel: '电池', value: 'batteries' },
        { lebel: '电线', value: 'wires' },
        { lebel: '电路板', value: 'circuit_boards' },
        { lebel: '机械零件', value: 'mechanical_parts' },
        { lebel: '汽车', value: 'cars' },
        { lebel: '飞机', value: 'airplanes' },
        { lebel: '火箭', value: 'rockets' },
        { lebel: '船只', value: 'ships' },
        { lebel: '火车', value: 'trains' },
        { lebel: '电脑', value: 'computers' },
        { lebel: '手机', value: 'phones' },
        { lebel: '电视', value: 'televisions' },
        { lebel: '家具', value: 'furniture' },
        { lebel: '衣物', value: 'clothing' },
        { lebel: '鞋子', value: 'shoes' },
        { lebel: '首饰', value: 'jewelry' },
        { lebel: '玩具', value: 'toys' },
        { lebel: '书籍', value: 'books' },
        { lebel: '艺术品', value: 'artworks' },
        { lebel: '乐器', value: 'musical_instruments' },
        { lebel: '体育用品', value: 'sports_equipment' },
        { lebel: '游戏', value: 'games' },
        { lebel: '电影', value: 'movies' },
        { lebel: '音乐', value: 'music' },
        { lebel: '照相机', value: 'cameras' },
        { lebel: '电器', value: 'appliances' },
        { lebel: '家居用品', value: 'home_goods' },
        { lebel: '化妆品', value: 'cosmetics' },
        { lebel: '食品', value: 'snacks' },
        { lebel: '饮料', value: 'beverages' },
        { lebel: '烟酒', value: 'tobacco_alcohol' },
        { lebel: '玩偶', value: 'dolls' },
        { lebel: '宠物', value: 'pets' },
        { lebel: '植物', value: 'plants' },
        { lebel: '动物', value: 'animals' },
        { lebel: '人类', value: 'humans' },
      ],
    },

    {
      lebel: '工具',
      value: 'foods',
      children: [
        { lebel: '斧头', value: 'axe' },
        { lebel: '石镐', value: 'pickaxe' },
        { lebel: '锤子', value: 'hammer' },
        { lebel: '锄头', value: 'hoe' },
        { lebel: '铲子', value: 'shovel' },
        { lebel: '钢钳', value: 'tongs' },
        { lebel: '钳子', value: 'pliers' },
        { lebel: '螺丝刀', value: 'screwdriver' },
        { lebel: '扳手', value: 'wrench' },
        { lebel: '锯子', value: 'saw' },
      ],
    },
    {
      lebel: '装备',
      value: 'equipment',
      children: [
        { lebel: '草裙', value: 'grass_skirts' },
        { lebel: '头盔', value: 'helmets' },
        { lebel: '盔甲', value: 'armors' },
        { lebel: '护腕', value: 'bracers' },
        { lebel: '护手', value: 'gloves' },
        { lebel: '护腿', value: 'leggings' },
        { lebel: '鞋子', value: 'boots' },
        { lebel: '武器', value: 'weapons' },
        { lebel: '盾牌', value: 'shields' },
      ],
    },
    {
      lebel: '建筑',
      value: 'building',
      children: [
        { lebel: '房屋', value: 'houses' },
        { lebel: '商店', value: 'shops' },
        { lebel: '工厂', value: 'factories' },
        { lebel: '学校', value: 'schools' },
        { lebel: '医院', value: 'hospitals' },
        { lebel: '银行', value: 'banks' },
        { lebel: '政府', value: 'governments' },
        { lebel: '军队', value: 'armies' },
        { lebel: '警察', value: 'polices' },
        { lebel: '消防', value: 'fires' },
        { lebel: '教堂', value: 'churches' },
        { lebel: '寺庙', value: 'temples' },
        { lebel: '城堡', value: 'castles' },
        { lebel: '塔楼', value: 'towers' },
        { lebel: '桥梁', value: 'bridges' },
        { lebel: '隧道', value: 'tunnels' },
        { lebel: '道路', value: 'roads' },
        { lebel: '铁路', value: 'railways' },
        { lebel: '机场', value: 'airports' },
        { lebel: '码头', value: 'ports' },
        { lebel: '船坞', value: 'docks' },
        { lebel: '港口', value: 'harbors' },
        { lebel: '灯塔', value: 'lighthouses' },
        { lebel: '水坝', value: 'dams' },
        { lebel: '水库', value: 'reservoirs' },
        { lebel: '水渠', value: 'canals' },
        { lebel: '水塔', value: 'water_towers' },
        { lebel: '水井', value: 'water_wells' },
        { lebel: '水泵', value: 'water_pumps' },
      ],
    },
    {
      lebel: '科技',
      value: 'technology',
      children: [
        { lebel: '农业', value: 'agriculture' },
        { lebel: '手工', value: 'handcraft' },
        { lebel: '工业', value: 'industry' },
        { lebel: '信息', value: 'information' },
        { lebel: '通信', value: 'communication' },
        { lebel: '交通', value: 'transportation' },
        { lebel: '建筑', value: 'construction' },
        { lebel: '能源', value: 'energy' },
        { lebel: '环境', value: 'environment' },
        { lebel: '医学', value: 'medicine' },
        { lebel: '教育', value: 'education' },
        { lebel: '艺术', value: 'art' },
        { lebel: '文学', value: 'literature' },
        { lebel: '历史', value: 'history' },
        { lebel: '地理', value: 'geography' },
        { lebel: '数学', value: 'mathematics' },
        { lebel: '物理', value: 'physics' },
        { lebel: '化学', value: 'chemistry' },
        { lebel: '生物', value: 'biology' },
        { lebel: '地质', value: 'geology' },
        { lebel: '天文', value: 'astronomy' },
        { lebel: '地球', value: 'earth' },
        { lebel: '宇宙', value: 'universe' },
        { lebel: '人类', value: 'human' },
      ],
    },
    {
      lebel: '医药',
      value: 'medicine',
      children: [
        { lebel: '药物', value: 'drugs' },
        { lebel: '疫苗', value: 'vaccines' },
        { lebel: '手术', value: 'surgeries' },
        { lebel: '诊断', value: 'diagnostics' },
        { lebel: '治疗', value: 'therapies' },
        { lebel: '康复', value: 'rehabilitation' },
        { lebel: '护理', value: 'nursing' },
        { lebel: '保健', value: 'healthcare' },
        { lebel: '健康', value: 'wellness' },
        { lebel: '医院', value: 'hospitals' },
        { lebel: '诊所', value: 'clinics' },
        { lebel: '药店', value: 'pharmacies' },
        { lebel: '医生', value: 'doctors' },
        { lebel: '护士', value: 'nurses' },
        { lebel: '药剂师', value: 'pharmacists' },
        { lebel: '医学生', value: 'medical_students' },
        { lebel: '病人', value: 'patients' },
        { lebel: '家属', value: 'relatives' },
        { lebel: '保险', value: 'insurances' },
        { lebel: '医疗', value: 'medical' },
        { lebel: '健康', value: 'health' },
        { lebel: '生命', value: 'life' },
        { lebel: '死亡', value: 'death' },
        { lebel: '疾病', value: 'diseases' },
        { lebel: '症状', value: 'symptoms' },
        { lebel: '诊断', value: 'diagnosis' },
        { lebel: '治疗', value: 'treatment' },
        { lebel: '康复', value: 'recovery' },
      ],
    },
    {
      lebel: '仓储',
      value: 'storage',
      children: [
        { lebel: '仓库', value: 'warehouses' },
        { lebel: '货栈', value: 'storehouses' },
        { lebel: '货仓', value: 'depots' },
      ],
    },
    {
      lebel: '武器',
      value: 'weapons',
      children: [
        // 原始武器： 在原始社会，人类使用简单的工具作为武器，如石块、木棍、矛、弓箭等。这些武器主要用于狩猎和自卫，制造粗糙，杀伤力有限。
        // 青铜时代武器： 青铜时代的到来标志着武器制造技术的进步。人类开始使用铜和青铜制作更耐用、更锋利的武器，如青铜剑、铜斧等。这些武器提高了战斗的效率和杀伤力。
        // 铁器时代武器： 铁器时代的到来带来了更大的革命。铁制武器比青铜更加坚固和锋利，如铁剑、铁盾等。铁器时代的军事技术和战术也得到了进步，战争规模和强度都有所增加。
        // 中世纪武器： 中世纪见证了各种武器类型的出现和发展。长矛、弓箭、长剑、战斧、长弓等成为中世纪战争中常见的武器。同时，装甲的普及也推动了军事技术的发展，如锁子甲、板甲等。
        // 火器时代武器： 火器的出现彻底改变了战争的面貌。火枪、火炮等火器的使用使得战争更加致命和规模化。火器的进步和普及逐渐淘汰了传统的冷兵器，如长剑、战斧等。
        // 现代武器： 现代社会的武器以高科技为特征。从步枪、手枪、机关枪、坦克到导弹、战斗机、航母等，现代武器拥有更强大的杀伤力、射程和精确度。核武器的发明更是将战争的毁灭力推向了一个前所未有的高度。
        // 原始社会：
        // 石斧
        // 石锤
        // 矛
        // 弓箭

        // 青铜时代：
        // 青铜剑
        // 青铜斧
        // 青铜矛

        // 铁器时代：
        // 铁剑
        // 铁盾
        // 铁戈

        // 中世纪：
        // 长剑
        // 骑士长枪
        // 长弓
        // 战斧
        // 锁子甲
        // 板甲

        // 火器时代：
        // 火枪
        // 火炮
        // 加农炮
        // 连发枪
        // 连发手枪

        // 现代时代：
        // 步枪（例如M16、AK-47）
        // 手枪（例如格洛克、柯尔特）
        // 机关枪（例如M249、M60）
        // 坦克（例如M1艾布拉姆斯、T-90）
        // 导弹（例如导弹发射器、导弹战斗机）
        // 战斗机（例如F-22、苏-57）
        // 航母（例如尼米兹级航母、辽宁舰）
        // 核武器（例如原子弹、氢弹）
        { label: '木棍', value: 'clubs' },
        { label: '长矛', value: 'spears' },

        { lebel: '剑', value: 'swords' },
        { lebel: '刀', value: 'knives' },
        { lebel: '枪', value: 'guns' },
        { lebel: '炮', value: 'cannons' },
        { lebel: '弓', value: 'bows' },
        { lebel: '箭', value: 'arrows' },
        { lebel: '盾', value: 'shields' },
      ],
    },
    {
      lebel: '土地',
      value: 'lands',
      children: [
        { lebel: '农田', value: 'farmlands' },
        { lebel: '牧场', value: 'ranches' },
        { lebel: '林地', value: 'forests' },
        { lebel: '矿山', value: 'mines' },
        { lebel: '湖泊', value: 'lakes' },
        { lebel: '海洋', value: 'oceans' },
        { lebel: '岛屿', value: 'islands' },
        { lebel: '沙漠', value: 'deserts' },
        { lebel: '草原', value: 'grasslands' },
        { lebel: '沼泽', value: 'swamps' },
        { lebel: '冰川', value: 'glaciers' },
        { lebel: '火山', value: 'volcanoes' },
      ],
    },
    {
      lebel: '运输',
      value: 'transportation',
      children: [
        { label: '马车运输', value: 'carriage_transportation' },
        { label: '货车运输', value: 'truck_transportation' },
        // 船只 铁路 航空
        { label: '船运', value: 'shipping' },
        { label: '航运', value: 'aviation' },
        { label: '铁路', value: 'railway' },
        { label: '公路', value: 'highway' },
      ],
    },
    {
      lebel: '教育',
      value: 'education',
      children: [
        { lebel: '幼儿园', value: 'kindergarten' },
        { lebel: '小学', value: 'elementary_school' },
        { lebel: '中学', value: 'middle_school' },
        { lebel: '高中', value: 'high_school' },
        { lebel: '大学', value: 'university' },
        { lebel: '图书馆', value: 'library' },
        { lebel: '实验室', value: 'laboratory' },
      ],
    },
    {
      label: '天气',
      value: 'weather',
      children: [
        { label: '晴天', value: 'sunny' },
        { label: '阴天', value: 'cloudy' },
        { label: '多云', value: 'partly_cloudy' },
        { label: '雨天', value: 'rainy' },
        { label: '雪天', value: 'snowy' },
        { label: '风暴', value: 'stormy' },
        { label: '台风', value: 'typhoon' },
        { label: '龙卷风', value: 'tornado' },
        { label: '地震', value: 'earthquake' },
        { label: '火山', value: 'volcano' },
        { label: '海啸', value: 'tsunami' },
        { label: '洪水', value: 'flood' },
        { label: '干旱', value: 'drought' },
        { label: '沙尘暴', value: 'sandstorm' },
        { label: '雾霾', value: 'smog' },
        { label: '霜冻', value: 'frost' },
        { label: '雾凇', value: 'rime' },
      ],
    },
  ];

  const list: { section: SectionKey; value?: string }[] = [
    { section: 'worker', value: 'capacity' },
    { section: 'warehouse', value: 'amount' },
    { section: 'building' },
  ];

  console.log('GameContainer update');

  return (
    <div className='flex w-full flex-col'>
      <div className='grid grid-cols-3 gap-2 py-10'>
        {list.map((item) => (
          <SectionCard
            key={item.section}
            sectionKey={item.section}
            valueKey={item.value}
          />
        ))}
      </div>
    </div>
  );
};

export default GameContainer;
