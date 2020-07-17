// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PaperClipOutlinedSvg from '@whalue-design/icons-svg/lib/asn/PaperClipOutlined';

export default {
  name: 'IconPaperClipOutlined',
  displayName: 'PaperClipOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PaperClipOutlinedSvg } },
      children,
    ),
};