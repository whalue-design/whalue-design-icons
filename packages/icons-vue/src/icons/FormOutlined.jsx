// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FormOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FormOutlined';

export default {
  name: 'IconFormOutlined',
  displayName: 'FormOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FormOutlinedSvg } },
      children,
    ),
};