// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SettingTwoToneSvg from '@whalue-design/icons-svg/lib/asn/SettingTwoTone';

export default {
  name: 'IconSettingTwoTone',
  displayName: 'SettingTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SettingTwoToneSvg } },
      children,
    ),
};