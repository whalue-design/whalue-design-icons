// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SettingOutlinedSvg from '@whalue-design/icons-svg/lib/asn/SettingOutlined';

export default {
  name: 'IconSettingOutlined',
  displayName: 'SettingOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SettingOutlinedSvg } },
      children,
    ),
};