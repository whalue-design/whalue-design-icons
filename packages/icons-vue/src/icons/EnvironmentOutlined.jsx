// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import EnvironmentOutlinedSvg from '@whalue-design/icons-svg/lib/asn/EnvironmentOutlined';

export default {
  name: 'IconEnvironmentOutlined',
  displayName: 'EnvironmentOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: EnvironmentOutlinedSvg } },
      children,
    ),
};