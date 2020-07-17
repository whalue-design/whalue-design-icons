// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import RadiusSettingOutlinedSvg from '@whalue-design/icons-svg/lib/asn/RadiusSettingOutlined';

export default {
  name: 'IconRadiusSettingOutlined',
  displayName: 'RadiusSettingOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RadiusSettingOutlinedSvg } },
      children,
    ),
};