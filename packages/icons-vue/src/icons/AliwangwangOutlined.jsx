// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import AliwangwangOutlinedSvg from '@whalue-design/icons-svg/lib/asn/AliwangwangOutlined';

export default {
  name: 'IconAliwangwangOutlined',
  displayName: 'AliwangwangOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AliwangwangOutlinedSvg } },
      children,
    ),
};