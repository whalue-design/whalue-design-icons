// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SettingFilledSvg from '@whalue-design/icons-svg/lib/asn/SettingFilled';

export default {
  name: 'IconSettingFilled',
  displayName: 'SettingFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SettingFilledSvg } },
      children,
    ),
};